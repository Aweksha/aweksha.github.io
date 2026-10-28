/**
 * src/data/projects.ts
 *
 * Every project card on the site. `category` picks the tab it shows up on:
 *   "projects" → Selected Projects
 *   "academic" → Academic Work
 *   "fun"      → Fun Corner
 * A tab with no projects shows its "coming soon" note instead.
 * Links are optional; only the ones you fill in become buttons.
 */

export type ProjectCategory = "projects" | "academic" | "fun";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  /** One or two sentences: what it is and what you did. */
  summary: string;
  tags: string[];
  /** Shown above the title, e.g. "2025" or "CSE 3318 · Spring 2025". */
  meta?: string;
  /** Optional badge, e.g. "In development". */
  status?: string;
  links?: {
    /** Where it runs: aweksha.github.io/…, …vercel.app, …onrender.com */
    live?: string;
    /** The GitHub repo. */
    code?: string;
    /** A demo video (YouTube, Loom, Google Drive) for projects that can't run online. */
    video?: string;
  };
  /** The id of the role in experience.ts this came out of, if any. Links both ways. */
  experience?: string;
  /** Put the image in /public/projects/ and use "/projects/name.png". */
  image?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    id: "ai-literary-word-finder",
    title: "AI Literary Word Finder",
    category: "fun",
    meta: "2026",
    status: "In development",
    summary: "Describe a situation in your own words, and an AI with the mind of a literature genius suggests the perfect literary word for it.",
    tags: ["AI", "LLM API", "Prompt Design"],
  },
  {
    id: "pink-calculator",
    title: "Pink Calculator",
    category: "fun",
    meta: "Jun 2025 · Internship day one",
    experience: "janus",
    summary: "Built on my first day interning at Janus Henderson, to get comfortable with Angular, TypeScript, and the Node toolchain before diving into the team’s codebase.",
    tags: ["Angular", "TypeScript", "Node.js", "CSS"],
    links: {
      live: "https://aweksha.github.io/pink-calculator/",
      code: "https://github.com/Aweksha/pink-calculator",
    },
  },
  {
    id: "pong",
    title: "Pong",
    category: "fun",
    meta: "High school",
    summary: "A Pong game I built with Pygame back when it was brand new to me, to figure out how game loops, collisions, and keyboard input really work.",
    tags: ["Python", "Pygame"],
  },

  // Copy this block for each project and fill it in:
  // {
  //   id: "swag-overflow",
  //   title: "SwagOverflow",
  //   category: "projects",
  //   summary: "What it is, and the part you built.",
  //   tags: ["React", "Node.js"],
  //   meta: "2025",
  //   links: {
  //     live: "https://aweksha.github.io/SwagOverflow",
  //     code: "https://github.com/Aweksha/SwagOverflow",
  //   },
  // },
];

export function projectsIn(category: ProjectCategory) {
  return projects.filter((project) => project.category === category);
}

export function projectsFrom(experienceId: string) {
  return projects.filter((project) => project.experience === experienceId);
}
