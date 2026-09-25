/**
 * Copy and command metadata for the hero terminal. Kept separate from the
 * `<Terminal>` component so the *words* the terminal prints are easy to
 * find and edit without wading through rendering/animation code.
 *
 * The terminal is a real (if small) command interpreter: every command
 * listed here does something — it's the site's primary nav, not a prop.
 */
import { profile } from "@/data/profile";
import { sections } from "@/data/sections";

export type TerminalLine =
  | { type: "output"; text: string }
  | { type: "command"; text: string; prompt: string };

/** Commands that just jump to a section — generated from the section registry. */
export const navCommands = sections.map((s) => s.id);

export const commandList = [
  ...navCommands,
  "resume",
  "github",
  "linkedin",
  "email",
  "whoami",
  "theme",
  "cowsay",
  "js",
  "clear",
  "help",
] as const;

export type CommandName = (typeof commandList)[number];

/** Lines typed out on first load, before the prompt becomes interactive. */
export function bootSequence(): string[] {
  return [
    `$ whoami`,
    `${profile.name.toLowerCase().replace(/\s+/g, "-")} — ${profile.role.toLowerCase()}`,
    ``,
    `$ cat status.txt`,
    `${profile.availability.open ? profile.availability.label.toLowerCase() : "heads down, building"} · ${profile.location.toLowerCase()}`,
    ``,
    `type 'help' to see what this thing can do.`,
  ];
}

export function helpText(): string[] {
  return [
    `available commands:`,
    ...sections.map((s) => `  ${s.id.padEnd(10)} jump to ${s.label}`),
    `  resume      open my résumé`,
    `  github      open my github`,
    `  linkedin    open my linkedin`,
    `  email       compose an email to me`,
    `  whoami      about this terminal`,
    `  theme       toggle light / dark`,
    `  cowsay <msg> make the cow say something`,
    `  js          start a javascript repl (real JS, runs right here)`,
    `  clear       clear the screen`,
  ];
}

export function whoamiText(): string[] {
  return [
    `${profile.name} — ${profile.role}`,
    profile.summary,
    `this whole site is keyboard-navigable — try it.`,
  ];
}

export function notFoundText(input: string): string[] {
  return [`command not found: ${input}`, `type 'help' for a list of commands.`];
}

const COW = [
  "        \\   ^__^",
  "         \\  (oo)\\_______",
  "            (__)\\       )\\/\\",
  "                ||----w |",
  "                ||     ||",
];

const COWSAY_MAX_WIDTH = 40;

/** A tiny `cowsay`, because a portfolio should be at least a little fun. */
export function cowsay(message: string): string[] {
  const words = message.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > COWSAY_MAX_WIDTH) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  if (lines.length === 0) lines.push("moo?");

  const width = Math.max(...lines.map((line) => line.length));
  const pad = (line: string) => line + " ".repeat(width - line.length);

  const bubble =
    lines.length === 1
      ? [`< ${pad(lines[0])} >`]
      : lines.map((line, i) => {
          const padded = pad(line);
          if (i === 0) return `/ ${padded} \\`;
          if (i === lines.length - 1) return `\\ ${padded} /`;
          return `| ${padded} |`;
        });

  return [` ${"_".repeat(width + 2)}`, ...bubble, ` ${"-".repeat(width + 2)}`, ...COW];
}

function stringifyJsValue(value: unknown): string {
  if (typeof value === "undefined") return "undefined";
  if (typeof value === "function") return value.toString();
  if (value instanceof Error) return `${value.name}: ${value.message}`;
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value, null, 2) ?? String(value);
  } catch {
    return String(value);
  }
}

/**
 * Real JavaScript, evaluated in the visitor's own browser tab — no server
 * round-trip, and nothing it can do that the browser's own devtools console
 * couldn't already do.
 *
 * Uses *indirect* eval (`(0, eval)(code)`, as opposed to calling `eval`
 * directly) so the code runs in global scope rather than this function's
 * local scope — that's what lets a `var` declared in one command still be
 * readable from the next. `let`/`const` don't get the same treatment: each
 * separate eval() call gets its own throwaway lexical scope for them, so a
 * `let x` here would vanish immediately after this call returns (unlike a
 * real REPL, which fakes persistence with engine-internal support we don't
 * have). Rewriting `let`/`const` to `var` before running is what actually
 * makes variables survive from one command to the next.
 */
export function runJs(code: string): string[] {
  const logs: string[] = [];
  const originalLog = console.log;
  console.log = (...args: unknown[]) => {
    logs.push(args.map(stringifyJsValue).join(" "));
  };

  const persistentCode = code.replace(/\b(let|const)\b/g, "var");

  try {
    const result = (0, eval)(persistentCode);
    if (typeof result !== "undefined") {
      logs.push(`=> ${typeof result === "string" ? JSON.stringify(result) : stringifyJsValue(result)}`);
    }
  } catch (error) {
    logs.push(`Uncaught ${error instanceof Error ? error.message : String(error)}`);
  } finally {
    console.log = originalLog;
  }

  return logs;
}
