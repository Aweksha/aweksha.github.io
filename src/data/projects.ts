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
  /** Optional detail bullets for a bigger project. */
  highlights?: string[];
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
    id: "predixa",
    title: "PREDIXA",
    category: "projects",
    meta: "2026 · Research project",
    summary: "A full-stack stock research app that forecasts 20 large US stocks from a date about 30 days in the past, then grades every forecast against what actually happened.",
    highlights: [
      "Serves four models on 53 price, volume, and market features: next-day return (XGBoost), plus 5-day direction, a 10-day buy, hold, or sell signal, and a 10-day expected price range (random forests)",
      "Models were chosen with walk-forward testing against simple baselines, then scored once on untouched data from Jul 2025 to Oct 2026",
      "The honest result: next-day direction only matched the baseline (51.9% vs. 51.8%), but volatility forecasting clearly beat it (R² 0.45 vs. 0.004), and the app shows users this track record",
      "Each stock page adds candlestick charts, fundamentals, and news headlines labeled for sentiment by Gemini",
    ],
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "FastAPI", "Python", "scikit-learn", "XGBoost", "Gemini API", "Yahoo Finance"],
    links: {
      code: "https://github.com/Aweksha/PREDIXA",
    },
  },
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
