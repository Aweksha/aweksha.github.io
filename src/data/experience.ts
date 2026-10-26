/**
 * src/data/experience.ts
 *
 * Source of truth for the Experience Scrapbook page.
 * Each entry renders as a distinct paper artifact, but every artifact
 * carries the same placard: role, then organization, then dateLabel.
 */

export type ExperienceSize = "large" | "medium" | "small";

export type ArtifactType =
  | "folder" // manila research folder, tabbed
  | "browser" // old browser chrome window
  | "research" // notebook page with waveform fragments
  | "photo" // print with photo corners
  | "workshop" // handout or flyer, slightly creased
  | "blueprint" // graph paper with pencil marks
  | "terminal"; // marked-up code printout

export type Experience = {
  id: string;
  role: string;
  organization: string;
  location: string;

  /** Sortable. "YYYY-MM". Never rendered. */
  start: string;
  end: string | "present";
  /** Rendered on the placard. */
  dateLabel: string;
  /** False logs a warning in dev. Fix before publishing. */
  datesVerified: boolean;

  /** Category line for the small artifacts. Two or three words. */
  shortLabel: string;
  /** The one sentence someone remembers. */
  summary: string;
  /** What you did, most impressive first. Three or four is plenty. */
  bullets: string[];
  /** "Built with". */
  tags: string[];

  size: ExperienceSize;
  artifactType: ArtifactType;

  image?: { src: string; alt: string };
  /** Deeper case-study page, once written. */
  slug?: string;
};

export const experiences: Experience[] = [
  {
    id: "acm-creating-creepers",
    role: "Backend Developer",
    organization: "ACM at UT Arlington · Creating Creepers",
    location: "Arlington, TX",
    start: "2026-01",
    end: "present",
    dateLabel: "2026 – Present",
    datesVerified: true,

    shortLabel: "Backend Engineering",
    summary: "Building the backend for a Kahoot-style trivia and social challenge app with a student team.",
    bullets: [
      "Designed the database schema and data models for game sessions, questions, players, answers, challenges, and awards",
      "Wrote database migrations and seed data, and set up foreign key enforcement in SQLite",
      "Building and connecting FastAPI services with the team in a shared GitHub repo",
    ],
    tags: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "SQLite"],

    size: "medium",
    artifactType: "terminal",
    slug: "acm-creating-creepers",
  },

  {
    id: "bug-house",
    role: "Instructional Assistant",
    organization: "UTA CSE Bug House",
    location: "Arlington, TX",
    start: "2025-09",
    end: "present",
    dateLabel: "Sep 2025 – Present",
    datesVerified: true,

    shortLabel: "Tutoring + Mentoring",
    summary: "Tutor computer science students through programming, debugging, and core CS topics.",
    bullets: [
      "Guide students to solve problems themselves, rather than handing over answers, across programming, data structures, and algorithms",
      "Co-created and run Workshop Wednesdays, a biweekly career series on resumes, interviews, GitHub, LeetCode, and AI in the workforce",
      "Coordinate fellow tutors so each one gets to lead part of a session",
    ],
    tags: ["Python", "C", "Java", "Git"],

    size: "small",
    artifactType: "workshop",
    slug: "bug-house",
  },

  {
    id: "janus",
    role: "Fixed Income Technology Intern",
    organization: "Janus Henderson Investors",
    location: "Denver, CO",
    start: "2025-06",
    end: "2025-08",
    dateLabel: "Jun – Aug 2025",
    datesVerified: true,

    shortLabel: "Technology + Finance",
    summary: "Built software for the Fixed Income Technology team across three projects: research data migration, a fixed income analytics app, and quant reporting automation.",
    bullets: [
      "Designed and built a C# migration tool that turned an acquired firm’s research into structured records in the research database, with an automated, owner-approved email workflow for data intake",
      "Built frontend and backend features for a Company Tear Sheet app in Angular and ASP.NET, including API endpoints, SQL and Snowflake queries, and charts for fixed income metrics like option-adjusted spread (OAS) and duration (OAD)",
      "Refactored the Fixed Income Quant team’s Python code and automated the path from raw financial data to finished charts and reports in Excel and Google Docs",
      "Presented the migration tool design and data warehouse security questions to the full technology org at the Q3 all-hands",
    ],
    tags: ["C#", "ASP.NET", "Angular", "Python", "SQL Server", "Snowflake"],

    size: "large",
    artifactType: "folder",
    slug: "janus-henderson",
  },

  {
    id: "cse-3310-ta",
    role: "Teaching Assistant, Fundamentals of Software Engineering (CSE 3310)",
    organization: "UT Arlington",
    location: "Arlington, TX",
    start: "2025-01",
    end: "2025-05",
    dateLabel: "Jan – May 2025",
    datesVerified: true,

    shortLabel: "Teaching + DevOps",
    summary: "Ran the technical side of team software projects for the whole class.",
    bullets: [
      "Set up and managed repositories for every student team",
      "Reviewed pushes and merges to keep teams from breaking working code or overwriting each other’s work",
      "Applied patches and supported teams from first commit through testing",
    ],
    tags: ["Git", "GitHub", "Code Review", "Testing Workflows"],

    size: "small",
    artifactType: "terminal",
    slug: "cse-3310-ta",
  },

  {
    id: "acl2",
    role: "Undergraduate Research Assistant",
    organization: "ACL² Lab (formerly ADAPT-Lab), directed by Dr. Kenny Zhu",
    location: "Arlington, TX",
    start: "2024-08",
    end: "2024-12",
    dateLabel: "Aug – Dec 2024",
    datesVerified: true,

    shortLabel: "AI Research",
    summary: "Supported research in computational animal linguistics, using AI to understand dog and cat vocalizations.",
    bullets: [
      "Collected, stored, and organized data for one of the largest multimedia animal vocalization datasets",
      "Converted frequency and language data into numeric formats the lab’s models could use",
      "Used LLMs to interpret and structure research data for the lab’s phonetic transcription pipeline",
    ],
    tags: ["Python", "LLMs", "Data Preprocessing"],

    size: "medium",
    artifactType: "research",
    slug: "acl2-lab",
  },

  {
    id: "anschutz",
    role: "STEM Design Workshop Lead",
    organization: "CU Anschutz Medical Campus",
    location: "Aurora, CO",
    start: "2024-07",
    end: "2024-07",
    dateLabel: "Jul 2024",
    datesVerified: true,

    shortLabel: "STEM Workshop",
    summary: "Taught high school students heading into bioengineering and biology their first technical skills.",
    bullets: [
      "Taught Python basics, design principles, and 3D modeling in Rhino",
      "Took students from a digital model to a finished 3D print",
      "Introduced 3D visualization using neural networks",
    ],
    tags: ["Python", "Rhino", "3D Printing"],

    size: "small",
    artifactType: "workshop",
    slug: "anschutz-workshop",
  },

  {
    id: "engineering-ta",
    role: "Engineering Design Teaching Assistant & Makerspace Mentor",
    organization: "CU Denver College of Engineering",
    location: "Denver, CO",
    start: "2023-08",
    end: "2024-05",
    dateLabel: "Aug 2023 – May 2024",
    datesVerified: true,

    shortLabel: "Design + Makerspace",
    summary: "Mentored engineering teams from problem definition to working prototype.",
    bullets: [
      "Formed project teams using personality assessments so students landed in groups that worked well together",
      "Taught the 4 Ds of engineering design and supported teams through each stage",
      "Ran the makerspace and trained students on 3D printers, laser cutters, and Python and C for their builds",
    ],
    tags: ["Python", "C", "3D Printing", "Laser Cutting"],

    size: "small",
    artifactType: "blueprint",
    slug: "engineering-design-ta",
  },

  {
    id: "cu-denver-isss",
    role: "IT Administrative Support & Web Developer",
    organization: "CU Denver International Admissions & ISSS",
    location: "Denver, CO",
    start: "2022-09",
    end: "2024-06",
    dateLabel: "Sep 2022 – Jun 2024",
    datesVerified: true,

    shortLabel: "Systems + Web",
    summary: "Grew from front desk and IT support into building the office’s web forms and integrations.",
    bullets: [
      "Promoted from Front Desk and IT Support Assistant to IT Administrative Support and Web Developer",
      "Built e-forms and connected them to the office’s main student software through third-party integrations",
      "Added encryption to protect sensitive international student data",
    ],
    tags: ["Web Forms", "Third-party Integrations", "Encryption"],

    size: "medium",
    artifactType: "browser",
    slug: "cu-denver-isss",
  },

  {
    id: "nepal",
    role: "Digital Skills & Employment Access Volunteer",
    organization: "Self-organized",
    location: "Nepal",
    start: "2017-01",
    end: "2022-12",
    dateLabel: "2017 – 2022",
    datesVerified: true,

    shortLabel: "Digital Skills",
    summary: "Taught women in remote communities the digital skills to get hired.",
    bullets: [
      "Taught Excel, Python, data entry, and e-forms to women preparing for their first jobs",
      "Partnered with companies across Nepali industries to hire trained women or send them outsourced work",
    ],
    tags: ["Excel", "Python", "E-forms"],

    size: "medium",
    artifactType: "photo",
    slug: "nepal",
  },
];

/** Chronological. The stitched thread follows this order. */
export const experiencesByDate = [...experiences].sort((a, b) =>
  a.start.localeCompare(b.start)
);

/** Newest first, for a resume-style list on the deeper page. */
export const experiencesRecentFirst = [...experiencesByDate].reverse();

export const unverified = experiences.filter((e) => !e.datesVerified);

if (import.meta.env.DEV && unverified.length > 0) {
  console.warn(
    `[experience] ${unverified.length} entries have unverified dates: ` +
      unverified.map((e) => e.id).join(", ")
  );
}
