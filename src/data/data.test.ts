/**
 * Checks the site's content for the mistakes that are easy to make when editing by hand:
 * duplicate ids, links to pages that don't exist, and tool notes for tags a card doesn't show.
 */
import { describe, expect, it } from "vitest";
import { courses } from "./academics";
import { experiences } from "./experience";
import { projects } from "./projects";
import { pages } from "./pages";
import { tickerItems } from "./ticker";
import { isValidRoute, parseHash } from "../routes";

const duplicates = (values: string[]) => values.filter((v, i) => values.indexOf(v) !== i);

/** Note keys that don't match any tag. */
const strayNotes = (tags: string[], notes: Record<string, string> = {}) =>
  Object.keys(notes).filter((key) => !tags.includes(key));

describe("routing", () => {
  it("parses tabs and experience detail pages", () => {
    expect(parseHash("")).toEqual({ route: "home" });
    expect(parseHash("#fun")).toEqual({ route: "fun", detail: undefined });
    expect(parseHash("#experience/janus-henderson")).toEqual({ route: "experience", detail: "janus-henderson" });
    expect(parseHash("#not-a-page")).toEqual({ route: "home" });
  });

  it("rejects links to pages that don't exist", () => {
    expect(isValidRoute("#academic")).toBe(true);
    expect(isValidRoute("#experience/janus-henderson")).toBe(true);
    expect(isValidRoute("#experience/no-such-role")).toBe(false);
    expect(isValidRoute("#nowhere")).toBe(false);
  });

  it("links to a project card only on a tab that shows it", () => {
    expect(isValidRoute("#projects/bondmind")).toBe(true);
    expect(isValidRoute("#academic/predixa")).toBe(true);
    expect(isValidRoute("#fun/bondmind")).toBe(false);
    expect(isValidRoute("#projects/no-such-project")).toBe(false);
  });
});

describe("ticker", () => {
  it("has six items or fewer, each with a unique tag", () => {
    expect(tickerItems.length).toBeLessThanOrEqual(6);
    expect(duplicates(tickerItems.map((t) => t.tag))).toEqual([]);
  });

  it.each(tickerItems.map((t) => [t.tag, t] as const))("%s links to a real page", (_, t) => {
    expect(isValidRoute(t.href)).toBe(true);
  });
});

describe("pages", () => {
  it("have unique ids", () => {
    expect(duplicates(pages.map((p) => p.id))).toEqual([]);
  });
});

describe("experience", () => {
  it("has unique ids and slugs", () => {
    expect(duplicates(experiences.map((e) => e.id))).toEqual([]);
    expect(duplicates(experiences.map((e) => e.slug))).toEqual([]);
  });

  it.each(experiences.map((e) => [e.id, e] as const))("%s has valid dates and notes", (_, e) => {
    expect(e.start).toMatch(/^\d{4}-\d{2}$/);
    if (e.end !== "present") expect(e.end >= e.start).toBe(true);
    expect(e.bullets.length).toBeGreaterThan(0);
    expect(strayNotes(e.tags, e.toolNotes)).toEqual([]);
  });
});

describe("projects", () => {
  it("have unique ids", () => {
    expect(duplicates(projects.map((p) => p.id))).toEqual([]);
  });

  it.each(projects.map((p) => [p.id, p] as const))("%s links and notes check out", (_, p) => {
    expect(strayNotes(p.tags, p.toolNotes)).toEqual([]);
    if (p.experience) expect(experiences.some((e) => e.id === p.experience)).toBe(true);
    if (p.course) expect(courses.some((c) => c.code === p.course)).toBe(true);
    for (const href of Object.values(p.links ?? {})) expect(href).toMatch(/^https:\/\//);
  });
});

describe("academics", () => {
  it("have unique course codes", () => {
    expect(duplicates(courses.map((c) => c.code))).toEqual([]);
  });

  it("feature exactly four core courses", () => {
    expect(courses.filter((c) => c.tier === "core")).toHaveLength(4);
  });

  it.each(courses.filter((c) => c.related).map((c) => [c.code, c] as const))("%s links to a real page", (_, c) => {
    expect(isValidRoute(c.related!.href)).toBe(true);
  });

  it("only mark upper-level courses as secondary", () => {
    expect(courses.filter((c) => c.secondary && c.tier !== "upper")).toEqual([]);
  });
});
