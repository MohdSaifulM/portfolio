/**
 * ── EDIT ME ──────────────────────────────────────────────────────────────
 * Work history, newest first. Rendered as a git-log — each role is a
 * "commit", each achievement is a "+" line, like a diff.
 *
 * `hash` is just flavor text (a stable-looking short hash), not a real
 * commit — pick any 7 lowercase hex characters when you add a role.
 * `current: true` marks the job still in progress (renders "Present").
 * ────────────────────────────────────────────────────────────────────────
 */

export type ExperienceEntry = {
  hash: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  /** Commit-message-style one-liner summarizing the role. */
  summary: string;
  /** Rendered as "+" diff lines. */
  achievements: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    hash: "f81c9e2",
    company: "MSD",
    role: "Specialist, AI Engineer",
    location: "Singapore",
    start: "2025",
    end: "Present",
    current: true,
    summary: "feat(internal-products): upskill into AI systems engineering",
    achievements: [
      "Design, build, and maintain internal products used across the business, working across the full stack from FastAPI services to the interfaces on top of them.",
      "Upskilled into AI systems engineering, now designing and shipping AI-powered features as part of the internal product suite.",
      "Manage cloud infrastructure as code with Terraform, keeping environments consistent and repeatable across releases.",
      "Partner with cross-functional stakeholders to translate business needs into reliable, well-tested internal tooling.",
    ],
    stack: ["Python", "FastAPI", "Terraform", "AWS", "AI Systems"],
  },
  {
    hash: "3b6a04d",
    company: "Genesiv Pte Ltd",
    role: "Full Stack Developer",
    location: "Singapore",
    start: "Feb 2021",
    end: "2025",
    summary: "feat(platform): ship and optimize customer-facing applications",
    achievements: [
      "Developed and maintained high-performing applications, prioritizing mobile responsiveness and user-centered design.",
      "Wrote and tested APIs for both front-end and back-end, covering troubleshooting and debugging end to end.",
      "Led an optimization initiative that cut initial data load time by 3 seconds, improving overall application performance.",
      "Collaborated with UI/UX and product management to shape feature design and keep communication tight across projects.",
      "Owned deployment processes to ensure efficient, low-friction releases.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "AWS"],
  },
  {
    hash: "9e21f7a",
    company: "ALS Logistic Solutions",
    role: "Asst. Manager, Field & Service · System Engineer · Technical Executive",
    location: "Singapore",
    start: "2012",
    end: "2020",
    summary: "fix(equipment): keep critical systems running, on budget",
    achievements: [
      "Led equipment maintenance programs, minimizing downtime and improving system reliability.",
      "Managed spare-parts inventory for cost-effective, timely procurement.",
      "Built strong customer relationships through proactive feedback gathering and service improvements.",
      "Ran cost analyses to guide replacement versus ad-hoc maintenance decisions.",
      "Oversaw end-to-end equipment installation projects, from planning through troubleshooting.",
    ],
    stack: ["Systems Engineering", "Maintenance Ops", "Vendor Management"],
  },
];
