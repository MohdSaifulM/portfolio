/**
 * ── EDIT ME ──────────────────────────────────────────────────────────────
 * Your identity, headline, and contact details. This is the first file to
 * update — everything else (hero, nav, footer, contact section) reads from
 * here, so a change here ripples through the whole site.
 * ────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Mohammad Saiful",

  /** Short handle used in the terminal prompt, e.g. "saif@portfolio". */
  handle: "saiful",

  /** Shown in the hero, the browser tab, and search results. */
  role: "Full-Stack Developer & AI Engineer",

  /** One line. Used for <meta description> and social share cards. */
  summary:
    "Full-stack developer with an industrial automation background, now building AI-powered internal products at MSD. Based in Singapore.",

  /**
   * Longer bio, rendered as separate paragraphs in the About section.
   * Keep it to 2–4 short paragraphs — recruiters skim.
   */
  bio: [
    "I'm a full-stack developer who started out keeping factory equipment running, not writing code — and that background still shapes how I build software: I care about things working reliably in production, not just in a demo.",
    "Since 2021 I've shipped full-stack products end to end — APIs, front ends, deployments — and over the last year I've been upskilling into AI systems engineering, designing and shipping AI-powered features as part of an internal product suite at MSD.",
    "I'm most useful on teams that need someone comfortable moving across the stack: happy writing a FastAPI service, a React interface, or the Terraform that deploys both.",
  ],

  location: "Singapore",

  /**
   * Year your *software engineering* career started — used for the "uptime"
   * stat in the About section. Deliberately separate from `experience.ts`,
   * since that log also includes pre-software roles (e.g. field/systems
   * engineering) that shouldn't count toward "years as a software engineer".
   */
  softwareEngineerSince: 2021,

  /** Public contact email — shown in the Contact section and footer. */
  email: "mohd.saiful@live.com",

  socials: {
    github: "https://github.com/MohdSaifulM",
    linkedin: "https://www.linkedin.com/in/mohammad-saiful-bin-mohammad/",
  },

  /** Drop your PDF at /public/resume.pdf — this path just needs to match. */
  resumeUrl: "/resume.pdf",

  /**
   * Shown as a small status badge near the hero. Set `open` to false to
   * hide the "open to opportunities" framing without deleting the copy.
   */
  availability: {
    open: true,
    label: "Open to select opportunities",
  },
} as const;
