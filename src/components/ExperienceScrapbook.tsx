import { experienceHref, experiencesRecentFirst } from "../data/experience";

/** The overview list. Each entry opens its own detail page. */
function ExperienceScrapbook() {
  return (
    <div className="experience-list">
      {experiencesRecentFirst.map((experience) => (
        <article className="experience-entry is-link" key={experience.id}>
          <div className="entry-meta">
            <p className="entry-date">{experience.dateLabel}</p>
            <p className="entry-location">{experience.location}</p>
            <p className="section-label">{experience.shortLabel}</p>
          </div>
          <div>
            <h2><a className="entry-link" href={experienceHref(experience)}>{experience.role}</a></h2>
            <p className="organization">{experience.organization}</p>
            <p className="entry-highlight">{experience.summary}</p>
            <ul className="tags" aria-label="Built with">{experience.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <p className="entry-more" aria-hidden="true">Read more <span>→</span></p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ExperienceScrapbook;
