/**
 * Hero — the thesis of the page: this portfolio is a terminal you can
 * actually use. Name/role/CTAs sit beside the interactive terminal itself,
 * so the signature element is the first thing anyone sees.
 */
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Terminal } from "@/components/terminal/terminal";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-4xl flex-col gap-12 px-6 pb-20 pt-16 lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10 lg:pt-24"
    >
      <div>
        {profile.availability.open && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-muted">
            <span className="size-1.5 rounded-full bg-diff-add" aria-hidden />
            {profile.availability.label}
          </div>
        )}

        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 font-display text-xl text-accent sm:text-2xl">{profile.role}</p>

        <p className="mt-6 max-w-md text-balance text-ink-muted">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2.5 font-mono text-sm text-canvas transition-opacity hover:opacity-85"
          >
            view work
            <ArrowRight className="size-4" aria-hidden />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm border border-line px-4 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Mail className="size-4" aria-hidden />
            get in touch
          </a>
        </div>
      </div>

      <Terminal />
    </section>
  );
}
