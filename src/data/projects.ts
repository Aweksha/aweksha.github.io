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
  /** What each tag was used for, keyed by tag. Tags with a note open a small popup. */
  toolNotes?: Record<string, string>;
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
  /** Set when a project from another tab was built for a class; it then also shows on Academic Work. */
  course?: string;
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
    course: "CSE 4316 / 4317",
    meta: "Senior Design · 2025 – 2026",
    summary: "Our two-semester senior design capstone: a full-stack stock analytics platform that forecasts 20 large US stocks from a date about 30 days in the past, then grades every forecast against what actually happened.",
    highlights: [
      "Built the web app end to end: a React and TypeScript frontend connected to an Express API and Python machine learning services",
      "Built the interactive stock charts, market data views, and prediction screens, plus caching and fallbacks so market data keeps loading when a source fails",
      "Worked on model integration and evaluation: four models on 53 features, chosen by walk-forward testing and scored on untouched data from Jul 2025 to Oct 2026",
      "The honest result: next-day direction only matched the baseline (51.9% vs. 51.8%), but volatility forecasting clearly beat it (R² 0.45 vs. 0.004), and the app shows users this track record",
      "Set up the team’s CI/CD pipeline in Azure DevOps on my own, and demoed the platform at Senior Design Demo Day in April 2026",
    ],
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "FastAPI", "Python", "scikit-learn", "XGBoost", "Gemini API", "Yahoo Finance", "Azure DevOps"],
    toolNotes: {
      React: "The web frontend: the landing page, the Markets page, and the stock pages with their charts and forecasts.",
      TypeScript: "Typing the frontend, including the shape of the data it gets back from the API, like the model report.",
      Express: "The API between the frontend and the AI service, with routes for price history, quotes, predictions, news, fundamentals, and backtests.",
      PostgreSQL: "The database that stores daily stock prices.",
      FastAPI: "The AI service, which exposes predictions, backtests, fundamentals, and news as endpoints.",
      Python: "Feature engineering, model training, and walk-forward evaluation.",
      "scikit-learn": "The random forests behind the 5-day direction, 10-day signal, and price range models, plus the logistic and ridge models they were tested against.",
      XGBoost: "The next-day return model, chosen for having the lowest error in walk-forward testing.",
      "Gemini API": "Labeling news headlines as bullish, bearish, or neutral.",
      "Yahoo Finance": "The source of daily prices, company fundamentals, and news headlines.",
      "Azure DevOps": "The team’s CI/CD pipeline, which I set up on my own.",
    },
    links: {
      code: "https://github.com/Aweksha/PREDIXA",
    },
  },
  {
    id: "autonomous-robot-navigation",
    title: "Autonomous Robot Navigation",
    category: "academic",
    meta: "CSE 4360 · Fall 2026",
    summary: "Programmed a LEGO EV3 robot to find and drive its own path through a mapped environment.",
    highlights: [
      "Planned routes with A* pathfinding, keeping a safe clearance around obstacles",
      "Tracked the robot’s position with wheel-encoder odometry, and calibrated its movement so it hit target coordinates",
      "Measured navigation accuracy through physical testing and a final demonstration",
    ],
    tags: ["Python", "Pybricks", "LEGO EV3", "A* Pathfinding", "Odometry", "SSH"],
    toolNotes: {
      Python: "All of the robot’s logic: path planning, navigation, and movement.",
      Pybricks: "The Python framework for controlling the EV3’s motors and reading its sensors.",
      "LEGO EV3": "The robot itself, built and programmed for the course.",
      "A* Pathfinding": "Finding the shortest route through the map that stays clear of obstacles.",
      Odometry: "Estimating where the robot is from how far each wheel has turned.",
      SSH: "Connecting to the robot to load and run code.",
    },
  },
  {
    id: "printtokens-testing",
    title: "Software Testing & Maintenance",
    category: "academic",
    meta: "CSE 4321 · Spring 2026",
    summary: "Found and fixed the faults in a Java tokenizer program, then proved the fixes with systematic testing.",
    highlights: [
      "Modeled each method with control flow graphs and designed test cases to meet edge-coverage criteria",
      "Wrote a JUnit test suite to check the program’s behavior and expose its faults",
      "Documented each fault and its correction in a written report",
    ],
    tags: ["Java", "JUnit", "Control Flow Graphs"],
    toolNotes: {
      Java: "The tokenizer program, both the faulty original and my corrected version.",
      JUnit: "The test suite that checks the corrected program’s behavior.",
      "Control Flow Graphs": "Mapping every path through each method to design tests that cover all of its edges.",
    },
  },
  {
    id: "restaurant-data-analysis",
    title: "Restaurant Data Analysis",
    category: "academic",
    meta: "CSE 4334 · Spring 2026",
    summary: "Explored a dataset of 9,343 restaurants across 3,361 US cities to find patterns in what restaurants have in common.",
    highlights: [
      "Cleaned and preprocessed the data, and engineered features for modeling",
      "Grouped similar restaurants with K-means clustering",
      "Built predictive models with random forests",
    ],
    tags: ["Python", "Pandas", "scikit-learn", "K-means", "Random Forest"],
    toolNotes: {
      Python: "The whole analysis, from loading the data to modeling.",
      Pandas: "Cleaning, preprocessing, and feature engineering.",
      "scikit-learn": "The clustering and predictive models.",
      "K-means": "Grouping restaurants with similar characteristics.",
      "Random Forest": "The predictive models.",
    },
  },
  {
    id: "client-server-networking",
    title: "Client-Server Network Programming",
    category: "academic",
    meta: "CSCI 3761 · CU Denver · Spring 2024",
    summary: "Wrote client and server programs in C to learn how networked applications talk to each other.",
    highlights: [
      "Used socket programming to build both sides of a client-server application",
      "Applied concepts from Kurose and Ross’s Computer Networking: A Top-Down Approach",
    ],
    tags: ["C", "Sockets", "Client-Server Architecture"],
    toolNotes: {
      C: "Both the client and the server programs.",
      Sockets: "The connection the client and server use to send data to each other.",
      "Client-Server Architecture": "How the two programs divide the work: the server listens, and the client connects and makes requests.",
    },
  },
  {
    id: "toxic-language-detector",
    title: "Toxic Language Detector",
    category: "fun",
    meta: "Nov 2026",
    summary: "Paste any message and an LLM decides whether it’s a compliment, a spicy compliment, a backhanded one, neutral, or plain toxic.",
    highlights: [
      "Rates how harmful a message is and flags categories like insult, harassment, or threat",
      "Translates backhanded compliments into what they really mean, and suggests a kinder way to say toxic messages",
      "Checked against 13 test messages, each run twice to measure accuracy and consistency",
    ],
    tags: ["Python", "FastAPI", "Groq", "Prompt Design", "JavaScript", "Render"],
    toolNotes: {
      Python: "The classifier logic: building the prompt, calling the model, and checking its answer so only valid labels, severities, and categories get through.",
      FastAPI: "The API behind the page, with an input length limit and a per-visitor rate limit so the free model quota can’t be used up.",
      Groq: "Runs the open-weight gpt-oss-20b model at temperature 0, so the same message gets the same verdict.",
      "Prompt Design": "A rubric for five tones and four harm levels, with examples of backhanded compliments and a rule to treat pasted text as data, never as instructions.",
      JavaScript: "The page itself: sends the message, shows the verdict, and lets you copy the suggested rewrite.",
      Render: "Hosts the API, with CORS set so only my site can call it from a browser.",
    },
    links: {
      live: "https://aweksha.github.io/toxic-language-agent/",
      code: "https://github.com/Aweksha/toxic-language-agent",
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
    links: {
      live: "https://aweksha.github.io/snek-pong/",
      code: "https://github.com/Aweksha/snek-pong",
    },
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
