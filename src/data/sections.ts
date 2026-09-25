/**
 * Section registry — drives the sticky nav, the terminal's `go` command,
 * and scroll-spy highlighting. Add/remove/reorder sections here; every
 * consumer follows automatically. Each `id` must match the section's `id`
 * attribute in its component.
 */

export const sections = [
  { id: "about", label: "about", flag: "--about" },
  { id: "experience", label: "experience", flag: "--experience" },
  { id: "projects", label: "projects", flag: "--projects" },
  { id: "contact", label: "contact", flag: "--contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
