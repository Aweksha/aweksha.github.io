import type { ReactNode } from "react";
import { projectsIn, type Project, type ProjectCategory } from "../data/projects";
import { experienceHref, experiences } from "../data/experience";
import { pages } from "../data/pages";

const linkLabels = { live: "Live site", code: "Code", video: "Watch demo" } as const;

/**
 * One project card. A project with `experience` set links back to that role;
 * `onExperiencePage` swaps that for a link to the project's own tab.
 */
export function ProjectCard({ project, onExperiencePage = false }: { project: Project; onExperiencePage?: boolean }) {
  const origin = project.experience ? experiences.find((e) => e.id === project.experience) : undefined;
  const tab = pages.find((p) => p.id === project.category);

  return (
    <li className="project-card">
      {project.image && <img className="project-image" src={project.image.src} alt={project.image.alt} loading="lazy" />}
      <div className="project-body">
        {(project.meta || project.status) && (
          <div className="project-meta">
            {project.meta && <p className="section-label">{project.meta}</p>}
            {project.status && <p className="project-status">{project.status}</p>}
          </div>
        )}
        <h2>{project.title}</h2>
        <p className="project-summary">{project.summary}</p>
        <ul className="tags" aria-label="Built with">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        {onExperiencePage
          ? tab && <a className="project-origin" href={`#${tab.id}`}>See it in {tab.label} <span aria-hidden="true">→</span></a>
          : origin && <a className="project-origin" href={experienceHref(origin)}>From my time at {origin.organization} <span aria-hidden="true">→</span></a>}
        {project.links && (
          <div className="project-links">
            {(Object.keys(linkLabels) as (keyof typeof linkLabels)[]).map((kind) => {
              const href = project.links?.[kind];
              return href ? (
                <a key={kind} className={kind === "live" ? "button-primary" : "button-secondary"} href={href} target="_blank" rel="noreferrer">
                  {linkLabels[kind]} <span aria-hidden="true">↗</span>
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              ) : null;
            })}
          </div>
        )}
      </div>
    </li>
  );
}

/** Project cards for one tab, or `empty` when that tab has none yet. */
function ProjectGrid({ category, empty }: { category: ProjectCategory; empty: ReactNode }) {
  const items = projectsIn(category);
  if (items.length === 0) return <>{empty}</>;

  return (
    <ul className="project-grid">
      {items.map((project) => <ProjectCard key={project.id} project={project} />)}
    </ul>
  );
}

export default ProjectGrid;
