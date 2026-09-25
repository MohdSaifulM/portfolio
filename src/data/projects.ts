/**
 * ── EDIT ME ──────────────────────────────────────────────────────────────
 * Projects, shown newest-first in the Projects grid. Add new entries at the
 * top of the array. `links.live` is optional — omit it if there's no
 * hosted demo and only a "View repository" link will show.
 * ────────────────────────────────────────────────────────────────────────
 */

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  year: string;
  links: {
    repo: string;
    live?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "url-shortener",
    name: "URL Shortener",
    description:
      "A URL shortening and redirection service built on the MERN stack with TypeScript. Deployed to an AWS EC2 instance behind Nginx with PM2 process management, and shipped with a GitHub Actions pipeline for automated testing and deployment.",
    stack: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "AWS EC2", "Nginx", "GitHub Actions"],
    year: "2023",
    links: {
      repo: "https://github.com/MohdSaifulM/url-shortener",
    },
  },
  {
    slug: "abc-book",
    name: "ABC-Book",
    description:
      "Backend for a book borrowing and returning application, built with Node.js and Express and backed by MongoDB. Written in TypeScript for type safety and long-term readability.",
    stack: ["Node.js", "Express", "MongoDB", "TypeScript"],
    year: "2023",
    links: {
      repo: "https://github.com/MohdSaifulM/abc-book",
    },
  },
];
