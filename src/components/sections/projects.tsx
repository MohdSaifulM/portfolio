/**
 * Projects — framed as a directory listing (`ls -la ~/projects`), but each
 * entry is a proper card: real project, real repo link, real stack.
 */
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";
import { GithubIcon } from "@/components/ui/brand-icons";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      <Reveal>
        <p className="font-mono text-sm text-accent">$ ls -la ~/projects</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">Projects</h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={i * 0.08}
            className="group flex flex-col rounded-md border border-line bg-canvas-raised p-6 transition-colors hover:border-accent"
          >
            <p className="font-mono text-xs text-ink-muted">
              drwxr-xr-x · {project.year}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-ink">{project.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-line px-2 py-0.5 font-mono text-xs text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 font-mono text-sm">
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
              >
                <GithubIcon className="size-4" />
                repository
              </a>
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
                >
                  <ExternalLink className="size-4" aria-hidden />
                  live
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
