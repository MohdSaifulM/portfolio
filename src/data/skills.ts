/**
 * ── EDIT ME ──────────────────────────────────────────────────────────────
 * Skills grouped by category, rendered as a `package.json`-style
 * dependency list in the About section. Order of categories = render order.
 * ────────────────────────────────────────────────────────────────────────
 */

export const skills: { category: string; items: string[] }[] = [
  {
    category: "languages",
    items: ["JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    category: "frontend",
    items: ["React", "Angular", "React Native", "Tailwind CSS", "jQuery"],
  },
  {
    category: "backend",
    items: ["Node.js", "Express", "FastAPI", "Django", "Laravel", "Socket.io"],
  },
  {
    category: "data",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "infra",
    items: ["AWS", "Terraform", "Git", "GitHub Actions"],
  },
  {
    category: "ai-systems",
    items: ["LLM Integration", "Prompt Engineering", "AI Product Design"],
  },
];
