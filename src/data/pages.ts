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
    intro: "A collection of roles, lessons, and work along the way.",
  },
  {
    id: "projects",
    label: "Selected Projects",
    eyebrow: "Things I build",
    intro: "A closer look at the problems, decisions, and details behind the work.",
  },
  {
    id: "academic",
    label: "Academic Work",
    eyebrow: "From the classroom",
    intro: "Coursework, research, and school projects worth a closer look.",
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
    intro: "Computer science, teaching, and learning by building.",
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
