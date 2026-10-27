import { useEffect, useRef, useState, type ReactNode } from "react";
import TopTicker from "./components/TopTicker";
import Intro from "./components/Intro";
import ExperienceScrapbook from "./components/ExperienceScrapbook";
import ExperienceDetail from "./components/ExperienceDetail";
import ContactLinks from "./components/ContactLinks";
import ContactPage from "./components/ContactPage";
import ProjectGrid from "./components/ProjectGrid";
import { profile } from "./data/profile";
import { findExperience } from "./data/experience";
import { pageNumber, pages, type PageId } from "./data/pages";

type Route = "home" | PageId;

/** "#experience/janus-henderson" → page "experience", detail "janus-henderson". */
function currentRoute(): { route: Route; detail?: string } {
  const [id, detail] = window.location.hash.slice(1).split("/");
  const page = pages.find((p) => p.id === id);
  return page ? { route: page.id, detail } : { route: "home" };
}

const pageBodies: Record<PageId, ReactNode> = {
  experience: <ExperienceScrapbook />,
  projects: (
    <ProjectGrid category="projects" empty={<div className="empty-state"><span className="section-label">In the making</span><h2>Making room for the work.</h2><p>Project write-ups are on their way.</p></div>} />
  ),
  academic: (
    <ProjectGrid category="academic" empty={<div className="empty-state"><span className="section-label">On the syllabus</span><h2>Notes from the classroom.</h2><p>Class projects, papers, and research write-ups will live here.</p></div>} />
  ),
  fun: (
    <ProjectGrid category="fun" empty={<div className="empty-state"><span className="section-label">Room to play</span><h2>Little projects belong here, too.</h2><p>The first experiments will land here soon.</p></div>} />
  ),
  about: (
    <>
      <div className="about-layout"><h2>A little context.</h2><div className="about-copy"><p>I’m studying computer science at UT Arlington, with graduation planned for December 2026. My experience spans web development, AI research, financial technology, and teaching.</p><p>Along the way, I’ve taught digital skills in Nepal, supported student teams, and worked on tools that connect data with the people who use it.</p><p>This portfolio brings those experiences together, with space for the smaller things I make out of curiosity.</p><a className="text-link" href="#experience">Explore my experience <span aria-hidden="true">→</span></a></div></div>
      <div className="about-layout"><h2>Get in touch.</h2><div className="about-copy"><p>I’m looking for full-time roles starting after December 2026. I’d love to hear from you.</p><a className="text-link" href="#contact">Say hello <span aria-hidden="true">→</span></a></div></div>
    </>
  ),
  contact: <ContactPage />,
};

function App() {
  const [{ route: active, detail }, setRoute] = useState(currentRoute);
  const mainRef = useRef<HTMLElement>(null);
  const page = pages.find((p) => p.id === active);
  const experience = active === "experience" && detail ? findExperience(detail) : undefined;

  useEffect(() => {
    const navigate = () => {
      if (window.location.hash === "#main-content") return;
      setRoute(currentRoute());
      window.scrollTo(0, 0);
      mainRef.current?.focus({ preventScroll: true });
    };
    window.addEventListener("hashchange", navigate);
    return () => window.removeEventListener("hashchange", navigate);
  }, []);

  useEffect(() => {
    const label = experience ? `${experience.role}, ${experience.organization}` : page?.label;
    document.title = label ? `${label} · ${profile.name}` : `${profile.name} · Computer Science`;
  }, [page, experience]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <TopTicker />
      <header className="site-header">
        <a className="wordmark" href="#" aria-current={active === "home" ? "page" : undefined}>{profile.name}<span aria-hidden="true">.</span></a>
        <nav aria-label="Main navigation">
          {pages.map((p) => (
            <a key={p.id} href={`#${p.id}`} aria-current={active === p.id ? "page" : undefined}>
              {p.label}
            </a>
          ))}
        </nav>
      </header>
      <main id="main-content" ref={mainRef} tabIndex={-1} className="page" key={experience?.id ?? active}>
        {experience ? (
          <ExperienceDetail experience={experience} />
        ) : page ? (
          <section aria-labelledby={`${page.id}-heading`}>
            <p className="eyebrow">{pageNumber(page.id)} / {page.eyebrow}</p>
            <h1 id={`${page.id}-heading`}>{page.label}<span>.</span></h1>
            <p className="page-intro">{page.intro}</p>
            {pageBodies[page.id]}
          </section>
        ) : (
          <Intro />
        )}
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} {profile.name} · Work, learning & a little curiosity.</span>
        <div className="footer-links">
          <ContactLinks />
          {active === "contact"
            ? <a href="#about">About me <span aria-hidden="true">→</span></a>
            : <a href="#contact">Say hello <span aria-hidden="true">→</span></a>}
        </div>
      </footer>
    </>
  );
}

export default App;
