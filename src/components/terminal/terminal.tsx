"use client";

/**
 * The hero terminal — the site's signature element and its primary nav.
 *
 * On first visit this types out a short boot sequence, then hands control
 * to the visitor: it's a real (tiny) command interpreter. Every command in
 * `commandList` (src/lib/terminal-commands.ts) does something — jump to a
 * section, open a link, flip the theme — nothing here is decorative.
 *
 * Accessibility & restraint:
 *  - The terminal is a *shortcut*, never the only way to do something. Every
 *    command it runs (nav, résumé, socials, theme) is also reachable from
 *    plain links/buttons elsewhere on the page.
 *  - `prefers-reduced-motion` skips the typewriter and shows the boot text
 *    instantly.
 *  - The boot sequence only plays once per browser session (sessionStorage)
 *    so it doesn't replay every time you scroll back to the top.
 */
import { useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { profile } from "@/data/profile";
import {
  bootSequence,
  cowsay,
  helpText,
  navCommands,
  notFoundText,
  runJs,
  whoamiText,
  type TerminalLine,
} from "@/lib/terminal-commands";

const BOOT_SESSION_KEY = "portfolio-terminal-booted";
const CHARS_PER_TICK = 2;
const TICK_MS = 10;

export function Terminal() {
  const prefersReducedMotion = useReducedMotion();
  const { resolvedTheme, setTheme } = useTheme();

  const [displayedBoot, setDisplayedBoot] = useState("");
  const [booted, setBooted] = useState(false);
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  // "js" mode routes every line to the JS REPL instead of the command list.
  const [mode, setMode] = useState<"shell" | "js">("shell");

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Type out (or instantly show) the boot sequence on mount.
  useEffect(() => {
    const fullText = bootSequence().join("\n");
    const alreadyBooted =
      typeof window !== "undefined" && sessionStorage.getItem(BOOT_SESSION_KEY);

    if (prefersReducedMotion || alreadyBooted) {
      // Reduced-motion / repeat-visit path: skip the typewriter and show
      // the finished boot text immediately rather than animating it.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayedBoot(fullText);
      setBooted(true);
      return;
    }

    let chars = 0;
    const interval = setInterval(() => {
      chars += CHARS_PER_TICK;
      setDisplayedBoot(fullText.slice(0, chars));
      if (chars >= fullText.length) {
        clearInterval(interval);
        sessionStorage.setItem(BOOT_SESSION_KEY, "1");
        setBooted(true);
      }
    }, TICK_MS);

    return () => clearInterval(interval);
    // Only run once — re-running on theme change would replay the boot text.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the panel scrolled to the newest line.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history, displayedBoot]);

  function runCommand(raw: string) {
    const trimmed = raw.trim();
    if (!trimmed) return;

    setCommandHistory((h) => [...h, raw]);
    setHistoryIndex(null);

    // Snapshot the prompt this line was actually typed under, so scrolling
    // back through history shows what was true at the time — not whatever
    // mode the terminal happens to be in when it re-renders later.
    const commandPrompt = mode === "js" ? "js>" : `${prompt}:~$`;
    const record = (output: string[]) =>
      setHistory((h) => [
        ...h,
        { type: "command", text: raw, prompt: commandPrompt },
        ...output.map((text): TerminalLine => ({ type: "output", text })),
      ]);

    if (mode === "js") {
      if (trimmed === "exit") {
        setMode("shell");
        record([`exited javascript repl.`]);
      } else {
        record(runJs(trimmed));
      }
      return;
    }

    const cmd = trimmed.toLowerCase();
    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    const scroll = (id: string) =>
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });

    let output: string[];
    if (cmd === "help") {
      output = helpText();
    } else if (cmd === "whoami") {
      output = whoamiText();
    } else if ((navCommands as string[]).includes(cmd)) {
      scroll(cmd);
      output = [`jumping to ${cmd}…`];
    } else if (cmd === "resume") {
      window.open(profile.resumeUrl, "_blank", "noopener,noreferrer");
      output = [`opening résumé in a new tab…`];
    } else if (cmd === "github") {
      window.open(profile.socials.github, "_blank", "noopener,noreferrer");
      output = [`opening github…`];
    } else if (cmd === "linkedin") {
      window.open(profile.socials.linkedin, "_blank", "noopener,noreferrer");
      output = [`opening linkedin…`];
    } else if (cmd === "email") {
      window.location.href = `mailto:${profile.email}`;
      output = [`opening your email client…`];
    } else if (cmd === "theme") {
      const next = resolvedTheme === "dark" ? "light" : "dark";
      setTheme(next);
      output = [`switched to ${next} mode.`];
    } else if (cmd === "sudo hire me") {
      scroll("contact");
      output = [`permission granted.`, `redirecting to contact…`];
    } else if (cmd === "cowsay" || cmd.startsWith("cowsay ")) {
      const message = trimmed.replace(/^cowsay\s*/i, "").trim();
      output = cowsay(message || "moo! (tip: cowsay <your message>)");
    } else if (cmd === "js") {
      setMode("js");
      output = [`javascript repl — real js, runs right here in your browser.`, `type 'exit' to return.`];
    } else {
      output = notFoundText(trimmed);
    }

    record(output);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex =
        historyIndex === null ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    }
  }

  const prompt = `guest@${profile.handle}`;

  return (
    <div
      className="w-full max-w-xl overflow-hidden rounded-md border border-line bg-canvas-raised shadow-[0_0_0_1px_var(--line),0_20px_60px_-30px_rgba(0,0,0,0.5)]"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5 font-mono text-xs text-ink-muted">
        <span
          aria-hidden
          className="size-1.5 rounded-full bg-diff-add"
          title={profile.availability.open ? "Available" : undefined}
        />
        <span>{prompt} — portfolio.sh</span>
      </div>

      {/* Screen */}
      <div
        ref={scrollRef}
        className="h-72 overflow-y-auto px-4 py-3 font-mono text-[13px] leading-relaxed sm:text-sm"
      >
        {!booted ? (
          <pre className="whitespace-pre-wrap text-ink-muted">
            {displayedBoot}
            <Cursor />
          </pre>
        ) : (
          <>
            <pre className="whitespace-pre-wrap text-ink-muted">{displayedBoot}</pre>
            <div aria-live="polite">
              {history.map((line, i) =>
                line.type === "command" ? (
                  <p key={i} className="mt-2 text-ink">
                    <span className="text-accent">{line.prompt}</span> {line.text}
                  </p>
                ) : (
                  <p key={i} className="whitespace-pre-wrap text-ink-muted">
                    {line.text}
                  </p>
                ),
              )}
            </div>

            {/* Live prompt */}
            <label className="mt-2 flex items-center gap-2 text-ink">
              <span className="sr-only">
                {mode === "js" ? "JavaScript REPL input" : "Portfolio terminal command input"}
              </span>
              <span aria-hidden className="shrink-0 text-accent">
                {mode === "js" ? "js>" : `${prompt}:~$`}
              </span>
              <span className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  aria-autocomplete="none"
                  className="w-full bg-transparent caret-accent outline-none placeholder:text-ink-muted/60"
                  placeholder={mode === "js" ? "try: 2 + 2" : "type 'help'"}
                />
              </span>
            </label>
          </>
        )}
      </div>
    </div>
  );
}

function Cursor() {
  return <span className="inline-block h-[1em] w-[0.5em] translate-y-[0.15em] animate-blink bg-accent" />;
}
