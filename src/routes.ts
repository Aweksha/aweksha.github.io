import { findExperience } from "./data/experience";
import { pages, type PageId } from "./data/pages";
import { projects } from "./data/projects";

export type Route = "home" | PageId;

/** "#experience/janus-henderson" → page "experience", detail "janus-henderson". */
export function parseHash(hash: string): { route: Route; detail?: string } {
  const [id, detail] = hash.replace(/^#/, "").split("/");
  const page = pages.find((p) => p.id === id);
  return page ? { route: page.id, detail } : { route: "home" };
}

/** True when a project's card appears on that tab. Class projects from other tabs also show on Academic Work. */
export function projectShownOn(route: Route, projectId: string): boolean {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return false;
  return project.category === route || (route === "academic" && project.course !== undefined);
}

/** True when an in-site link like "#experience/janus-henderson" or "#projects/bondmind" leads to something real. */
export function isValidRoute(href: string): boolean {
  const { route, detail } = parseHash(href);
  if (route === "home") return href === "#" || href === "";
  if (!detail) return true;
  if (route === "experience") return findExperience(detail) !== undefined;
  return projectShownOn(route, detail);
}
