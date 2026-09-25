/**
 * ── EDIT ME ──────────────────────────────────────────────────────────────
 * Education history, newest first. Rendered as compact "specs" in the About
 * section's system-info panel.
 * ────────────────────────────────────────────────────────────────────────
 */

export type EducationEntry = {
  school: string;
  credential: string;
  years: string;
};

export const education: EducationEntry[] = [
  {
    school: "General Assembly",
    credential: "Software Engineering Immersive",
    years: "2020",
  },
  {
    school: "University of South Australia",
    credential: "B.Eng, Electrical (Part-time)",
    years: "2014–2017",
  },
  {
    school: "Ngee Ann Polytechnic",
    credential: "Diploma, Electronics & Computer Engineering",
    years: "2006–2009",
  },
];
