import ContactLinks from "./ContactLinks";
import { profile } from "../data/profile";
import { pageNumber, pages } from "../data/pages";

function Intro() {
  return (
    <>
      <section className="intro" aria-labelledby="intro-heading">
        <p className="status"><span className="status-dot" aria-hidden="true" />{profile.status}<span className="status-detail"> · {profile.statusDetail}</span></p>
        <h1 id="intro-heading">Hey! I’m {profile.firstName}<span>.</span> I’m a software engineer finishing my CS degree at <em>UTA.</em></h1>
        <p className="page-intro">
          I’m dependable and hardworking, and I work well on a team, whether I’m leading it or pitching in.
          You can see what I worked on during my degree in <a href="#academic">Academic Work</a>, and read about my internship and other roles in the <a href="#experience">Experience Scrapbook</a>.
          If you’d like to work together, <a href={`mailto:${profile.email}`}>send me an email</a>.
        </p>
        <div className="intro-actions">
          <a className="button-primary" href="#experience">Explore my experience <span aria-hidden="true">→</span></a>
          <a className="button-secondary" href="#contact">Say hello</a>
          <ContactLinks className="link-row link-row--buttons" skipEmail />
        </div>
      </section>

      <section className="page-index" aria-labelledby="index-heading">
        <p className="eyebrow" id="index-heading">Find your way around</p>
        <ul>
          {pages.map((page) => (
            <li key={page.id}>
              <a href={`#${page.id}`}>
                <span className="page-index-number">{pageNumber(page.id)}</span>
                <span className="page-index-title">{page.label}</span>
                <span className="page-index-intro">{page.intro}</span>
                <span className="page-index-arrow" aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Intro;
