/**
 * Contact — no form to nowhere. Just a direct, working email link and the
 * two social profiles, presented plainly.
 */
import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      <Reveal className="rounded-md border border-line bg-canvas-raised px-8 py-14 text-center sm:px-16">
        <p className="font-mono text-sm text-accent">$ open contact</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Let&apos;s talk
        </h2>
        <p className="mx-auto mt-4 max-w-md text-balance text-ink-muted">
          {profile.availability.open
            ? "Open to select opportunities — reach out and I'll get back to you."
            : "Not actively looking right now, but always happy to talk shop."}
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 font-mono text-sm text-canvas transition-opacity hover:opacity-85"
        >
          <Mail className="size-4" aria-hidden />
          {profile.email}
        </a>

        <div className="mt-8 flex items-center justify-center gap-6 font-mono text-sm text-ink-muted">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <GithubIcon className="size-4" />
            github
            <ArrowUpRight className="size-3" aria-hidden />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <LinkedinIcon className="size-4" />
            linkedin
            <ArrowUpRight className="size-3" aria-hidden />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
