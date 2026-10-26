import { experiencesRecentFirst } from "../data/experience";

function ExperienceScrapbook() {
  return (
    <div className="experience-list">
      {experiencesRecentFirst.map((experience) => (
        <article className="experience-entry" key={experience.id}>
          <div className="entry-meta">
            <p className="entry-date">{experience.dateLabel}</p>
            <p className="entry-location">{experience.location}</p>
            <p className="section-label">{experience.shortLabel}</p>
          </div>
          <div>
            <h2>{experience.role}</h2>
            <p className="organization">{experience.organization}</p>
            <p className="entry-highlight">{experience.summary}</p>
            <ul className="entry-bullets">{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            <ul className="tags" aria-label="Built with">{experience.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ExperienceScrapbook;
