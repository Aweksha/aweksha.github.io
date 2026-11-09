/**
 * src/data/pages.ts
 *
 * The tabs in the main navigation, in order. The home page lists these too,
 * and each page's header (number, eyebrow, title, intro) comes from here.
 */

export const pages = [
  {
    id: "experience",
    label: "Experience Scrapbook",
    eyebrow: "Where I’ve been",
    intro: "An internship, research, and teaching roles, and what each one taught me about building software and leading teams.",
  },
  {
    id: "projects",
    label: "Selected Projects",
    eyebrow: "Things I build",
    intro: "Full-stack, data, and fintech builds, with the problems, decisions, and tradeoffs behind each one.",
  },
  {
    id: "academic",
    label: "Academic Work",
    eyebrow: "From the classroom",
    intro: "A 4.0 GPA, class projects, and the coursework behind them, from machine learning to project management.",
  },
  {
    id: "fun",
    label: "Fun Corner",
    eyebrow: "A little curiosity",
    intro: "Small experiments, hobby projects, and ideas followed just to see where they go.",
  },
  {
    id: "about",
    label: "About Me",
    eyebrow: "The person behind the work",
    intro: "Who I am, how I work, and what I’m looking for next.",
  },
  {
    id: "contact",
    label: "Contact",
    eyebrow: "Say hello",
    intro: "Have a role, a project, or just a question? My inbox is always open.",
  },
] as const;

export type Page = (typeof pages)[number];
export type PageId = Page["id"];

/** "01", "02", … in nav order. */
export function pageNumber(id: PageId) {
  return String(pages.findIndex((page) => page.id === id) + 1).padStart(2, "0");
}
