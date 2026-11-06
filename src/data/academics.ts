/**
 * src/data/academics.ts
 *
 * Everything on the Academic Work tab, from the unofficial transcript.
 * `tier` decides where a course shows up:
 *   "core"       → the large cards at the top
 *   "upper"      → expandable rows
 *   "foundation" → the compact list
 *   "gened"      → the "General education" dropdown
 * `topics` describes the course; `highlight` is something I actually did in it.
 */

export type CourseTier = "core" | "upper" | "foundation" | "gened";

export type Course = {
  code: string;
  title: string;
  term: string;
  tier: CourseTier;
  /** Set for courses taken at CU Denver before transferring. */
  school?: "CU Denver";
  inProgress?: boolean;
  topics?: string;
  highlight?: string;
  /** An internal link, e.g. to an experience page or a project tab. */
  related?: { label: string; href: string };
};

export const credentials = {
  degree: "B.S. in Computer Science",
  school: "The University of Texas at Arlington",
  graduation: "Expected December 2026",
  gpa: "4.0",
  transfer: "Transferred from the University of Colorado Denver (2022 – 2024)",
  honors: [
    { name: "President’s List", terms: "Fall 2025 · Spring 2026" },
    { name: "Honor Roll", terms: "Spring 2025" },
    { name: "Freshman Distinction Roll", terms: "Fall 2024" },
  ],
};

export const courses: Course[] = [
  // Core: the four most relevant, in this order
  {
    code: "CSE 4322",
    title: "Software Project Management",
    term: "Fall 2025",
    tier: "core",
    topics: "Planning and running software projects: estimation, scheduling, risk management, and agile and plan-driven processes.",
  },
  {
    code: "CSE 3310",
    title: "Fundamentals of Software Engineering",
    term: "Fall 2024",
    tier: "core",
    topics: "Requirements, design, modeling, testing, and version control, applied in a semester-long team project.",
    highlight: "Went on to TA this course the next semester, running the Git workflow for every student team.",
    related: { label: "My TA role", href: "#experience/cse-3310-ta" },
  },
  {
    code: "CSE 4334",
    title: "Data Mining",
    term: "Spring 2026",
    tier: "core",
    topics: "Finding patterns in data: regression, classification, clustering, and judging how well a model holds up.",
    highlight: "Built multiple regression models in R, checked their assumptions with residual plots and Cook’s distance, removed multicollinearity using VIF, and compared models with ANOVA.",
  },
  {
    code: "CSE 4309",
    title: "Fundamentals of Machine Learning",
    term: "Fall 2025",
    tier: "core",
    topics: "How models learn from data: regression, classification, neural networks, overfitting, and evaluation.",
    related: { label: "A related project: PREDIXA", href: "#projects" },
  },

  // Upper level
  {
    code: "CSE 4308",
    title: "Artificial Intelligence",
    term: "Fall 2025",
    tier: "upper",
    topics: "Search, logic, probabilistic reasoning, and the foundations of intelligent agents.",
  },
  {
    code: "CSE 4321",
    title: "Software Testing & Maintenance",
    term: "Spring 2026",
    tier: "upper",
    topics: "Test design, control flow graphs, path coverage, debugging, and maintaining existing code.",
    highlight: "Found and fixed the faults in a Java tokenizer, then validated the fixes with control flow graphs, path testing, and a JUnit test suite.",
  },
  {
    code: "CSE 4316 / 4317",
    title: "Computer System Design Project I & II",
    term: "Fall 2025 – Spring 2026",
    tier: "upper",
    topics: "The two-semester senior capstone: designing, building, and delivering a system with a team.",
  },
  {
    code: "CSE 3330",
    title: "Database Systems & File Structures",
    term: "Fall 2024",
    tier: "upper",
    topics: "Relational modeling, SQL, normalization, indexing, and how data is stored on disk.",
  },
  {
    code: "CSE 3320",
    title: "Operating Systems",
    term: "Spring 2025",
    tier: "upper",
    topics: "Processes, threads, scheduling, memory management, and file systems.",
  },
  {
    code: "CSE 3302",
    title: "Programming Languages",
    term: "Spring 2026",
    tier: "upper",
    topics: "How languages are designed and run: syntax, semantics, and programming paradigms.",
    highlight: "Wrote a stack-based Reverse Polish Notation evaluator in Python.",
  },
  {
    code: "CSCI 3412",
    title: "Algorithms",
    term: "Spring 2024",
    tier: "upper",
    school: "CU Denver",
    topics: "Designing and analyzing algorithms: sorting, graphs, dynamic programming, and complexity.",
  },
  {
    code: "CSCI 3761",
    title: "Computer Networks",
    term: "Spring 2024",
    tier: "upper",
    school: "CU Denver",
    topics: "How the internet works, layer by layer: protocols, routing, and TCP/IP.",
  },
  {
    code: "CSCI 4591",
    title: "Computer Architecture",
    term: "Spring 2024",
    tier: "upper",
    school: "CU Denver",
    topics: "How processors work: instruction sets, pipelining, and the memory hierarchy.",
  },
  {
    code: "CSE 3315",
    title: "Theoretical Concepts in CSE",
    term: "Spring 2025",
    tier: "upper",
    topics: "Automata, formal languages, and the limits of what can be computed.",
  },
  {
    code: "CSE 3380",
    title: "Linear Algebra for CSE",
    term: "Spring 2025",
    tier: "upper",
    topics: "Vectors, matrices, and linear transformations, the math underneath graphics and machine learning.",
  },
  {
    code: "IE 3301",
    title: "Engineering Probability",
    term: "Spring 2025",
    tier: "upper",
    topics: "Probability, random variables, and distributions for engineering problems.",
  },
  {
    code: "CSE 3314",
    title: "Professional Practices",
    term: "Fall 2025",
    tier: "upper",
    topics: "Ethics, professional responsibility, and communication in computing.",
  },
  {
    code: "ENGR 3100",
    title: "Supervised Engineering Work Experience",
    term: "Summer 2025",
    tier: "upper",
    topics: "Academic credit for my Fixed Income Technology internship.",
    related: { label: "The internship", href: "#experience/janus-henderson" },
  },
  {
    code: "CSE 4360",
    title: "Autonomous Robot Design & Programming",
    term: "Fall 2026",
    tier: "upper",
    inProgress: true,
    topics: "Building and programming robots that sense their surroundings, plan, and act on their own.",
  },
  {
    code: "CSE 4381",
    title: "Information Security II",
    term: "Fall 2026",
    tier: "upper",
    inProgress: true,
    topics: "Advanced topics in protecting systems: attacks and defenses, applied cryptography, and secure system design.",
  },

  // Foundations
  { code: "CSCI 2421", title: "Data Structures & Program Design", term: "Fall 2023", tier: "foundation", school: "CU Denver" },
  { code: "CSCI 2511", title: "Discrete Structures", term: "Fall 2023", tier: "foundation", school: "CU Denver" },
  { code: "CSCI 2312", title: "Object-Oriented Programming", term: "Spring 2023", tier: "foundation", school: "CU Denver" },
  { code: "CSCI 2525", title: "Assembly Language & Computer Organization", term: "Fall 2023", tier: "foundation", school: "CU Denver" },
  { code: "CSCI 1510", title: "Logic Design", term: "Spring 2023", tier: "foundation", school: "CU Denver" },
  { code: "CSCI 1410", title: "Fundamentals of Computing (with lab)", term: "Fall 2022", tier: "foundation", school: "CU Denver" },
  { code: "CSE 1106", title: "Introduction to Computer Science & Engineering", term: "Fall 2024", tier: "foundation" },
  { code: "MATH 2326", title: "Calculus III", term: "Spring 2026", tier: "foundation" },
  { code: "MATH 2411", title: "Calculus II", term: "Spring 2024", tier: "foundation", school: "CU Denver" },
  { code: "MATH 1401", title: "Calculus I", term: "Spring 2023", tier: "foundation", school: "CU Denver" },
  { code: "PHYS 1444", title: "General Technical Physics II", term: "Spring 2025", tier: "foundation" },
  { code: "PHYS 2311", title: "Calculus-Based Physics I (with lab)", term: "Fall 2023", tier: "foundation", school: "CU Denver" },

  // General education
  { code: "COMS 2302", title: "Professional & Technical Communication", term: "Spring 2025", tier: "gened" },
  { code: "ENGL 2030", title: "Core Composition II", term: "Spring 2023", tier: "gened", school: "CU Denver" },
  { code: "ENGL 1020", title: "Core Composition I", term: "Fall 2022", tier: "gened", school: "CU Denver" },
  { code: "IE 2308", title: "Economics for Engineers", term: "Fall 2024", tier: "gened" },
  { code: "POLS 2311", title: "Government of the United States", term: "Fall 2024", tier: "gened" },
  { code: "POLS 2312", title: "State & Local Government", term: "Fall 2026", tier: "gened", inProgress: true },
  { code: "HIST 1302", title: "U.S. History Since 1865", term: "Fall 2026", tier: "gened", inProgress: true },
  { code: "HIST 1331", title: "American Technology & Science I", term: "Fall 2026", tier: "gened", inProgress: true },
  { code: "DIVR 2315", title: "Introduction to LGBTQ+ Studies", term: "Fall 2024", tier: "gened" },
  { code: "ART 1301", title: "Art Appreciation", term: "Spring 2026", tier: "gened" },
  { code: "ENGR 1200", title: "Fundamentals of Engineering Design Innovation", term: "Fall 2022", tier: "gened", school: "CU Denver" },
  { code: "ENGR 1101", title: "Engineering for Transfers", term: "Fall 2024", tier: "gened" },
  { code: "MATH 1130", title: "Precalculus", term: "Fall 2022", tier: "gened", school: "CU Denver" },
];

export const coursesIn = (tier: CourseTier) => courses.filter((course) => course.tier === tier);
