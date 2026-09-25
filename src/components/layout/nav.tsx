"use client";

/**
 * Sticky nav. Section links double as the terminal's `--flag` vocabulary
 * (see src/data/sections.ts) so the same words show up whether you scroll
 * or type. The underline tracks scroll position via `useActiveSection`.
 */
import { Download } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { sections } from "@/data/sections";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Computed once at module load — `sections` is static, and useActiveSection
// needs a stable array reference (see its docstring) to avoid rebuilding
// its observer on every render.
const sectionIds = sections.map((s) => s.id);

export function Nav() {
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-3"
      >
        <Link
          href="#top"
          className="font-mono text-sm text-ink transition-colors hover:text-accent"
        >
          {profile.handle}@portfolio
          <span className="animate-blink text-accent">_</span>
        </Link>

        <ul className="hidden items-center gap-6 font-mono text-sm sm:flex">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={activeId === section.id ? "true" : undefined}
                className={`border-b-2 pb-0.5 transition-colors ${
                  activeId === section.id
                    ? "border-accent text-ink"
                    : "border-transparent text-ink-muted hover:text-ink"
                }`}
              >
                {section.flag}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-sm border border-line px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent sm:flex"
          >
            <Download className="size-3.5" aria-hidden />
            résumé
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
