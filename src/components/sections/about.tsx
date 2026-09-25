/**
 * About — bio prose next to two small "engineer-native" artifacts:
 *  - a neofetch-style specs panel (who/where/how long)
 *  - skills rendered as a package.json dependency list
 * Both are real data (src/data/*.ts), just framed in a vocabulary this
 * audience already reads fluently.
 */
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { Reveal } from "@/components/ui/reveal";

function careerLengthYears(): number {
  const earliestStart = Number(experience.at(-1)?.start);
  if (Number.isNaN(earliestStart)) return 0;
  return new Date().getFullYear() - earliestStart;
}

export function About() {
  const specs: [string, string][] = [
    ["os", profile.role],
    ["shell", skills[0]?.items.slice(0, 2).join(" / ") ?? ""],
    ["location", profile.location],
    ["uptime", `${careerLengthYears()}+ years in tech`],
    ["education", education.map((e) => e.school).join(" · ")],
  ];

  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      <Reveal>
        <p className="font-mono text-sm text-accent">$ cat about.md</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">About</h2>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal delay={0.05} className="min-w-0">
          <div className="space-y-5 text-balance leading-relaxed text-ink-muted">
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 space-y-6">
          {/* neofetch-style specs */}
          <div className="rounded-md border border-line bg-canvas-raised p-5 font-mono text-sm">
            <p className="text-ink">{profile.handle}@portfolio</p>
            <p className="text-ink-muted">{"-".repeat(20)}</p>
            <dl className="mt-1 space-y-1">
              {specs.map(([key, value]) => (
                <div key={key} className="flex gap-3">
                  <dt className="w-24 shrink-0 text-accent">{key}</dt>
                  <dd className="text-ink-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* skills as package.json */}
          <div className="overflow-x-auto rounded-md border border-line bg-canvas-raised p-5 font-mono text-sm">
            <pre className="text-ink-muted">
              <span className="text-ink">{"{"}</span>
              {"\n  "}
              <span className="text-accent">&quot;skills&quot;</span>: {"{"}
              {skills.map(({ category, items }, i) => (
                <span key={category}>
                  {"\n    "}
                  <span className="text-accent">&quot;{category}&quot;</span>: [
                  {items.map((item, j) => (
                    <span key={item}>
                      <span className="text-ink">&quot;{item}&quot;</span>
                      {j < items.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  ]{i < skills.length - 1 ? "," : ""}
                </span>
              ))}
              {"\n  }"}
              {"\n"}
              <span className="text-ink">{"}"}</span>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
