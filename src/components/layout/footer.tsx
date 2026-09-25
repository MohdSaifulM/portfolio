/**
 * Footer: a compact directory listing of ways to reach out, plus an
 * honest build credit. Engineers reading a portfolio's source appreciate
 * knowing what it's built with — this is signal, not filler.
 */
import { Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

const links = [
  { label: "github", href: profile.socials.github, icon: GithubIcon },
  { label: "linkedin", href: profile.socials.linkedin, icon: LinkedinIcon },
  { label: "email", href: `mailto:${profile.email}`, icon: Mail },
  // Repeated from the (desktop-only) nav bar, so mobile visitors — often
  // recruiters on a phone — always have one-tap access to the résumé.
  { label: "résumé", href: profile.resumeUrl, icon: Download },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-10 font-mono text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") || href.endsWith(".pdf")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                <Icon className="size-3.5" aria-hidden />
                {label}
              </a>
            </li>
          ))}
        </ul>

        <p>
          <span className="text-ink-muted">{"// built with"}</span> Next.js, Tailwind CSS &amp;
          Framer Motion —{" "}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            view source
          </a>
        </p>
      </div>
    </footer>
  );
}
