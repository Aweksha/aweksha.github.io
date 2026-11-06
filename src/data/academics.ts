/**
 * src/data/academics.ts
 *
 * Everything on the Academic Work tab, from the unofficial transcript.
 * `tier` decides where a course shows up:
 *   "core"       → the large cards at the top
 *   "upper"      → expandable rows
 *   "foundation" → the compact list
 *   "gened"      → the "General education" dropdown
 * `topics` is condensed from the official UTA and CU Denver catalogs; `highlight` is something I actually did in the course.
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
  /** Upper-level only: tuck this course under "more courses" instead of showing it up front. */
  secondary?: boolean;
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
    topics: "Project planning and scheduling, effort estimation, risk management, team coordination, and managing deliverables across the development lifecycle.",
  },
  {
    code: "CSE 3310",
    title: "Fundamentals of Software Engineering",
    term: "Fall 2024",
    tier: "core",
    topics: "Software development methodologies, requirements analysis, system design, collaborative development, version control, testing, and maintaining software across its lifecycle.",
    related: { label: "I went on to TA this course the next semester", href: "#experience/cse-3310-ta" },
  },
  {
    code: "CSE 4334",
    title: "Data Mining",
    term: "Spring 2026",
    tier: "core",
    topics: "Discovering patterns in large data: preprocessing, data warehousing and OLAP, association rule mining, classification and prediction, clustering, and web and text mining.",
    highlight: "Built multiple regression models in R, checked their assumptions with residual plots and Cook’s distance, removed multicollinearity using VIF, and compared models with ANOVA.",
  },
  {
    code: "CSE 4309",
    title: "Fundamentals of Machine Learning",
    term: "Fall 2025",
    tier: "core",
    topics: "Naive Bayes, linear regression and classifiers, neural networks and backpropagation, kernel methods, decision trees, feature selection, clustering, and reinforcement learning.",
    related: { label: "See PREDIXA", href: "#projects" },
    highlight: "Applied supervised learning, feature engineering, and model evaluation in PREDIXA, comparing its predictions against actual market outcomes.",
  },

  // Upper level
  {
    code: "CSE 4308",
    title: "Artificial Intelligence",
    term: "Fall 2025",
    tier: "upper",
    topics: "Heuristic search, deduction, learning, knowledge representation, and reasoning under uncertainty, with applications like intelligent agents, planning, and natural language.",
  },
  {
    code: "CSE 4321",
    title: "Software Testing & Maintenance",
    term: "Spring 2026",
    tier: "upper",
    topics: "Software quality assurance, formal reviews, verification and validation, testing techniques, regression testing, and the types of software maintenance.",
    highlight: "Found and fixed the faults in a Java tokenizer, then validated the fixes with control flow graphs, path testing, and a JUnit test suite.",
  },
  {
    code: "CSE 4316 / 4317",
    title: "Computer System Design Project I & II",
    term: "Fall 2025 – Spring 2026",
    tier: "upper",
    topics: "A two-semester, industry-style capstone with a multidisciplinary team: requirements, planning, and design, then implementation, testing, deployment, and a final demo.",
    highlight: "Built PREDIXA with my team, a full-stack stock analytics platform. I developed the web app, integrated the machine learning services, and set up CI/CD in Azure DevOps, then demoed it at Senior Design Demo Day in April 2026.",
    related: { label: "See PREDIXA", href: "#projects" },
  },
  {
    code: "CSE 3330",
    title: "Database Systems & File Structures",
    term: "Fall 2024",
    tier: "upper",
    topics: "The relational model and algebra, SQL, entity-relationship modeling, normalization, and file structures like indexing, hashing, and B+ trees.",
  },
  {
    code: "CSE 3320",
    title: "Operating Systems",
    term: "Spring 2025",
    tier: "upper",
    topics: "Process synchronization, scheduling, memory management, file systems, protection, and deadlocks, plus loaders, linkers, and assemblers.",
  },
  {
    code: "CSE 3302",
    title: "Programming Languages",
    term: "Spring 2026",
    tier: "upper",
    secondary: true,
    topics: "How to specify a language’s syntax and semantics, and how procedural, functional, logic, and object-oriented paradigms compare.",
    highlight: "Wrote a stack-based Reverse Polish Notation evaluator in Python.",
  },
  {
    code: "CSCI 3412",
    title: "Algorithms",
    term: "Spring 2024",
    tier: "upper",
    school: "CU Denver",
    topics: "Designing algorithms and proving them correct, asymptotic analysis, hash tables, heaps, search trees, and graph algorithms.",
  },
  {
    code: "CSCI 3761",
    title: "Computer Networks",
    term: "Spring 2024",
    tier: "upper",
    school: "CU Denver",
    topics: "Internet protocols, network devices, network security, and performance.",
    highlight: "Wrote client and server programs in C using sockets, applying Kurose and Ross’s Computer Networking: A Top-Down Approach.",
  },
  {
    code: "CSCI 4591",
    title: "Computer Architecture",
    term: "Spring 2024",
    tier: "upper",
    secondary: true,
    school: "CU Denver",
    topics: "How assembly language maps to hardware: arithmetic units, datapath and control, pipelining, memory systems, and I/O.",
  },
  {
    code: "CSE 3315",
    title: "Theoretical Concepts in CSE",
    term: "Spring 2025",
    tier: "upper",
    secondary: true,
    topics: "Regular and context-free languages, finite and pushdown automata, Turing machines, computability, and NP-completeness.",
  },
  {
    code: "CSE 3380",
    title: "Linear Algebra for CSE",
    term: "Spring 2025",
    tier: "upper",
    secondary: true,
    topics: "Systems of equations, matrix algebra, determinants, vector spaces, orthogonality, and least squares, applied to computer science.",
  },
  {
    code: "IE 3301",
    title: "Engineering Probability",
    term: "Spring 2025",
    tier: "upper",
    secondary: true,
    topics: "Probability, random variables, and distributions for engineering problems.",
  },
  {
    code: "CSE 3314",
    title: "Professional Practices",
    term: "Fall 2025",
    tier: "upper",
    secondary: true,
    topics: "Computing ethics and social responsibility, entrepreneurship and intellectual property, and a written and oral communication project.",
  },
  {
    code: "ENGR 3100",
    title: "Supervised Engineering Work Experience",
    term: "Summer 2025",
    tier: "upper",
    secondary: true,
    topics: "Academic credit for my Fixed Income Technology internship.",
    related: { label: "The internship", href: "#experience/janus-henderson" },
  },
  {
    code: "CSE 4360",
    title: "Autonomous Robot Design & Programming",
    term: "Fall 2026",
    tier: "upper",
    inProgress: true,
    topics: "Kinematics, dynamics, control, and sensors, with projects building and programming both simulated and real robots.",
    highlight: "Programmed a LEGO EV3 robot to navigate a mapped environment with A* pathfinding and wheel-encoder odometry.",
  },
  {
    code: "CSE 4381",
    title: "Information Security II",
    term: "Fall 2026",
    tier: "upper",
    inProgress: true,
    topics: "Symmetric and public key cryptography, cryptographic protocols, malware, network attacks and defenses, data security, privacy, and wireless security.",
  },

  // Foundations
  { code: "CSCI 2421", title: "Data Structures & Program Design", term: "Fall 2023", tier: "foundation", school: "CU Denver", topics: "Data structures, abstract data types, sorting, searching, and recursion." },
  { code: "CSCI 2511", title: "Discrete Structures", term: "Fall 2023", tier: "foundation", school: "CU Denver", topics: "Logic, sets, induction, combinatorics, discrete probability, relations, and graphs, applied to algorithm analysis." },
  { code: "CSCI 2312", title: "Object-Oriented Programming", term: "Spring 2023", tier: "foundation", school: "CU Denver", topics: "Classes, inheritance, polymorphism, exception handling, templates, and the Standard Template Library." },
  { code: "CSCI 2525", title: "Assembly Language & Computer Organization", term: "Fall 2023", tier: "foundation", school: "CU Denver", topics: "Assembly language programming and how programs run at the hardware level, including their interface to the operating system." },
  { code: "CSCI 1510", title: "Logic Design", term: "Spring 2023", tier: "foundation", school: "CU Denver", topics: "Combinational and sequential logic circuits, Boolean algebra and minimization, and state machines." },
  { code: "CSCI 1410", title: "Fundamentals of Computing (with lab)", term: "Fall 2022", tier: "foundation", school: "CU Denver", topics: "The elements of a programming language and basic techniques for solving problems with a computer." },
  {
    code: "ENGR 1200",
    title: "Fundamentals of Engineering Design Innovation",
    term: "Fall 2022",
    tier: "foundation",
    school: "CU Denver",
    topics: "Engineering design across scales and disciplines: design principles, processes, methods, modes of thinking, and its social and cultural side.",
    highlight: "Went on to TA this course for two semesters, mentoring student teams from problem definition to working prototype.",
    related: { label: "My TA role", href: "#experience/engineering-design-ta" },
  },
  { code: "CSE 1106", title: "Introduction to Computer Science & Engineering", term: "Fall 2024", tier: "foundation", topics: "Hands-on labs with circuits, digital logic, embedded controllers, networking, software design, and Linux." },
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
  { code: "ENGR 1101", title: "Engineering for Transfers", term: "Fall 2024", tier: "gened" },
  { code: "MATH 1130", title: "Precalculus", term: "Fall 2022", tier: "gened", school: "CU Denver" },
];

export const coursesIn = (tier: CourseTier) => courses.filter((course) => course.tier === tier);
