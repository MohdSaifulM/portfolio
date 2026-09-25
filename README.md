# Portfolio

Mohammad Saiful's personal site — Next.js 16 (App Router), React 19, Tailwind CSS v4, and Framer Motion. Dark-first "terminal" design that also has a proper light mode; the hero includes a small interactive command terminal that doubles as the site's primary navigation.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `npm run build` produces a production build; `npm run lint` runs ESLint.

## Updating content

**You should never need to touch component code to update what the site says.** Everything editable lives in `src/data/`, one file per concern, each with an `── EDIT ME ──` comment block at the top:

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | Name, role, bio, location, email, social links, résumé path, availability badge |
| `src/data/experience.ts` | Work history, rendered newest-first as a "git log" |
| `src/data/projects.ts` | Project cards |
| `src/data/skills.ts` | Skills, grouped by category |
| `src/data/education.ts` | Education, shown in the About "specs" panel |
| `src/data/sections.ts` | The nav/section registry — add or reorder sections here |

To swap the résumé PDF, replace `public/resume.pdf` (keep the filename, or update `resumeUrl` in `profile.ts`).

## Before you publish — please review

A few things were drafted from context available at build time and are worth double-checking before this goes live:

- **`src/data/experience.ts` — the MSD entry.** The bullets describe internal products, AI systems upskilling, Terraform, and FastAPI as given, but they're still a first draft — read them over and make sure they match how you'd describe the role yourself.
- **Genesiv end date** is approximated as "2025" (no exact month given). Update `end` in `experience.ts` if you know the precise month.
- **Contact email**: currently `mohd.saiful@live.com` (from your résumé). If you'd rather list a different address, change `email` in `profile.ts`.
- **Phone number** is intentionally omitted from the public site to cut down on spam — add it to `profile.ts` and render it in `Contact`/`Footer` if you want it visible.

## Design notes

- **Theme**: one accent hue (amber) used two ways — "phosphor on glass" in dark mode, "ink on paper" in light mode. Tokens live in `src/app/globals.css`.
- **Type**: IBM Plex Sans Condensed (display), IBM Plex Sans (body), IBM Plex Mono (terminal/metadata) — loaded via `next/font/google` in `src/app/layout.tsx`.
- **Motion**: scroll-reveals via `src/components/ui/reveal.tsx`, all gated on `prefers-reduced-motion`. The terminal's boot animation plays once per browser session and is skipped entirely under reduced motion.
- **The terminal is a shortcut, not a gate** — every command it runs (jump to a section, open the résumé/GitHub/LinkedIn, toggle theme) is also reachable from a plain link or button elsewhere on the page.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · next-themes · lucide-react
