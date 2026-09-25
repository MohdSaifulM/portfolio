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
