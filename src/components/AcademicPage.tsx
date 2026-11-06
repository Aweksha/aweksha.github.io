import { coursesIn, credentials, type Course } from "../data/academics";
import { projectsIn } from "../data/projects";
import { ProjectCard } from "./ProjectGrid";

function CourseMeta({ course }: { course: Course }) {
  return (
    <p className="course-meta">
      <span className="course-code">{course.code}</span>
      <span>{course.term}</span>
      {course.school && <span>{course.school}</span>}
      {course.inProgress && <span className="course-status">In progress</span>}
    </p>
  );
}

function CourseDetails({ course }: { course: Course }) {
  return (
    <>
      {course.topics && <p className="course-topics">{course.topics}</p>}
      {course.highlight && (
        <p className="course-highlight"><span className="section-label">What I did</span>{course.highlight}</p>
      )}
      {course.related && (
        <a className="project-origin" href={course.related.href}>{course.related.label} <span aria-hidden="true">→</span></a>
      )}
    </>
  );
}

/** Credentials, then coursework from most to least relevant, then any academic projects. */
function AcademicPage() {
  const upper = coursesIn("upper");
  const current = upper.filter((c) => c.inProgress);
  const completed = upper.filter((c) => !c.inProgress);
  const genEds = coursesIn("gened");
  const projects = projectsIn("academic");

  return (
    <div className="academic">
      <section className="credentials" aria-label="Credentials">
        <div className="credential-gpa">
          <p className="credential-number">{credentials.gpa}</p>
          <p className="credential-caption">Cumulative GPA</p>
        </div>
        <div className="credential-degree">
          <p className="section-label">Degree</p>
          <h2>{credentials.degree}</h2>
          <p>{credentials.school}</p>
          <p className="credential-muted">{credentials.graduation}</p>
          <p className="credential-muted">{credentials.transfer}</p>
        </div>
        <div className="credential-honors">
          <p className="section-label">Honors</p>
          <ul>
            {credentials.honors.map((honor) => (
              <li key={honor.name}><strong>{honor.name}</strong><span>{honor.terms}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="course-section" aria-labelledby="core-heading">
        <h2 id="core-heading" className="course-section-title">Core coursework</h2>
        <ul className="core-courses">
          {coursesIn("core").map((course) => (
            <li className="core-course" key={course.code}>
              <CourseMeta course={course} />
              <h3>{course.title}</h3>
              <CourseDetails course={course} />
            </li>
          ))}
        </ul>
      </section>

      <section className="course-section" aria-labelledby="upper-heading">
        <h2 id="upper-heading" className="course-section-title">Upper-level coursework</h2>
        <p className="course-section-note">Open a course to see what it covered.</p>
        {[{ label: "Currently taking", items: current }, { label: "Completed", items: completed }].map(({ label, items }) => (
          <div className="course-group" key={label}>
            <p className="section-label">{label}</p>
            <ul className="course-rows">
              {items.map((course) => (
                <li key={course.code}>
                  <details className="course-row">
                    <summary>
                      <span className="course-code">{course.code}</span>
                      <span className="course-title">{course.title}</span>
                      <span className="course-term">{course.term}{course.school && ` · ${course.school}`}</span>
                      <span className="course-chevron" aria-hidden="true" />
                    </summary>
                    <div className="course-row-body"><CourseDetails course={course} /></div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="course-section" aria-labelledby="foundation-heading">
        <h2 id="foundation-heading" className="course-section-title">Foundations</h2>
        <p className="course-section-note">Lower-level computer science, math, and physics.</p>
        <ul className="foundation-list">
          {coursesIn("foundation").map((course) => {
            const label = (
              <>
                <span className="course-code">{course.code}</span>
                <span className="course-title">{course.title}</span>
                <span className="course-term">{course.term}{course.school && ` · ${course.school}`}</span>
              </>
            );
            return (
              <li key={course.code}>
                {course.topics ? (
                  <details className="foundation-item">
                    <summary>{label}<span className="course-chevron" aria-hidden="true" /></summary>
                    <div className="foundation-body"><CourseDetails course={course} /></div>
                  </details>
                ) : <div className="foundation-item">{label}</div>}
              </li>
            );
          })}
        </ul>
      </section>

      <details className="gened">
        <summary>
          <span>General education</span>
          <span className="gened-count">{genEds.length} courses</span>
          <span className="course-chevron" aria-hidden="true" />
        </summary>
        <ul className="foundation-list">
          {genEds.map((course) => (
            <li key={course.code}>
              <span className="course-code">{course.code}</span>
              <span className="course-title">{course.title}</span>
              <span className="course-term">{course.inProgress ? "In progress" : course.term}{course.school && ` · ${course.school}`}</span>
            </li>
          ))}
        </ul>
      </details>

      {projects.length > 0 && (
        <section className="course-section" aria-labelledby="academic-projects-heading">
          <h2 id="academic-projects-heading" className="course-section-title">Class projects</h2>
          <ul className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</ul>
        </section>
      )}
    </div>
  );
}

export default AcademicPage;
