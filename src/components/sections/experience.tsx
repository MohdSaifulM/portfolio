/**
 * Experience — a career history read as `git log`: newest commit first,
 * one entry per role, achievements as "+" diff lines. Work history really
 * is a chronological, append-only log, so the metaphor earns its keep
 * (unlike a generic 01/02/03 numbered timeline).
 */
import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      <Reveal>
        <p className="font-mono text-sm text-accent">$ git log --stat career/</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Experience
        </h2>
      </Reveal>

      <ol className="mt-12 ml-3 border-l border-line">
        {experience.map((job, i) => (
          <Reveal as="li" delay={i * 0.08} key={job.hash} className="relative pb-12 pl-8 last:pb-0">
            <span
              aria-hidden
              className="absolute top-1.5 -left-[7px] size-3 rounded-full border-2 border-accent bg-canvas"
            />

            <div className="flex flex-wrap items-baseline gap-x-3 font-mono text-xs text-ink-muted sm:text-sm">
              <span className="text-accent">{job.hash}</span>
              <span>{job.summary}</span>
            </div>

            <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
              {job.role}
              <span className="font-sans text-base font-normal text-ink-muted"> @ {job.company}</span>
            </h3>
            <p className="mt-1 font-mono text-xs text-ink-muted">
              {job.location} · {job.start} – {job.current ? "present" : job.end}
            </p>

            <ul className="mt-4 space-y-2">
              {job.achievements.map((achievement, j) => (
                <li key={j} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                  <span aria-hidden className="font-mono text-diff-add">
                    +
                  </span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-line px-2 py-0.5 font-mono text-xs text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
