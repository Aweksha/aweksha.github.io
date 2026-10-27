import { experienceHref, experiencesRecentFirst, type Experience } from "../data/experience";
import { pageNumber } from "../data/pages";
import { projectsFrom } from "../data/projects";
import { ProjectCard } from "./ProjectGrid";
import ToolTags from "./ToolTags";

/** The page at #experience/<slug>: everything about one role. */
function ExperienceDetail({ experience }: { experience: Experience }) {
  const index = experiencesRecentFirst.indexOf(experience);
  const newer = experiencesRecentFirst[index - 1];
  const older = experiencesRecentFirst[index + 1];
  const related = projectsFrom(experience.id);

  return (
    <article aria-labelledby="experience-detail-heading">
      <a className="back-link" href="#experience"><span aria-hidden="true">←</span> All experience</a>
      <p className="eyebrow">{pageNumber("experience")} / {experience.shortLabel}</p>
      <h1 id="experience-detail-heading" className="detail-title">{experience.role}<span>.</span></h1>
      <p className="detail-org">{experience.organization}</p>

      <div className="detail-layout">
        <dl className="detail-facts">
          <div><dt>When</dt><dd>{experience.dateLabel}</dd></div>
          <div><dt>Where</dt><dd>{experience.location}</dd></div>
          <div><dt>Focus</dt><dd>{experience.shortLabel}</dd></div>
          <div>
            <dt>Built with <span className="tool-hint">Tap one to see how I used it</span></dt>
            <dd><ToolTags tags={experience.tags} notes={experience.toolNotes} /></dd>
          </div>
        </dl>

        <div className="detail-body">
          <p className="detail-lead">{experience.summary}</p>

          <section aria-labelledby="did-heading">
            <h2 id="did-heading" className="section-label">What I did</h2>
            <ul className="entry-bullets">{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </section>

          {experience.story?.map((section) => (
            <section key={section.title}>
              <h2 className="section-label">{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p className="detail-paragraph" key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <section className="detail-projects" aria-labelledby="related-heading">
          <h2 id="related-heading">Projects from this role</h2>
          <ul className="project-grid">
            {related.map((project) => <ProjectCard key={project.id} project={project} onExperiencePage />)}
          </ul>
        </section>
      )}

      <nav className="detail-pager" aria-label="More experience">
        {newer ? (
          <a href={experienceHref(newer)}>
            <span className="section-label"><span aria-hidden="true">←</span> More recent</span>
            <span className="pager-title">{newer.role}</span>
          </a>
        ) : <span />}
        {older && (
          <a className="pager-older" href={experienceHref(older)}>
            <span className="section-label">Earlier <span aria-hidden="true">→</span></span>
            <span className="pager-title">{older.role}</span>
          </a>
        )}
      </nav>
    </article>
  );
}

export default ExperienceDetail;
