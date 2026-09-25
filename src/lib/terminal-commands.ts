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
  | { type: "command"; text: string };

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
