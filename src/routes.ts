import { findExperience } from "./data/experience";
import { pages, type PageId } from "./data/pages";

export type Route = "home" | PageId;

/** "#experience/janus-henderson" → page "experience", detail "janus-henderson". */
export function parseHash(hash: string): { route: Route; detail?: string } {
  const [id, detail] = hash.replace(/^#/, "").split("/");
  const page = pages.find((p) => p.id === id);
  return page ? { route: page.id, detail } : { route: "home" };
}

/** True when an in-site link like "#experience/janus-henderson" leads to a real page. */
export function isValidRoute(href: string): boolean {
  const { route, detail } = parseHash(href);
  if (route === "home") return href === "#" || href === "";
  if (!detail) return true;
  return route === "experience" && findExperience(detail) !== undefined;
}
