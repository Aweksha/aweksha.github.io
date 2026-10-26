import type { ReactNode } from "react";
import { projectsIn, type ProjectCategory } from "../data/projects";

const linkLabels = { live: "Live site", code: "Code", video: "Watch demo" } as const;

/** Project cards for one tab, or `empty` when that tab has none yet. */
function ProjectGrid({ category, empty }: { category: ProjectCategory; empty: ReactNode }) {
  const items = projectsIn(category);
  if (items.length === 0) return <>{empty}</>;

  return (
    <ul className="project-grid">
      {items.map((project) => (
        <li className="project-card" key={project.id}>
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
      ))}
    </ul>
  );
}

export default ProjectGrid;
