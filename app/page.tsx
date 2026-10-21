import ThemeToggle from "@/components/ThemeToggle";
import {
  profile,
  education,
  experience,
  projects,
  skills,
  leadership,
  certificates,
  achievements,
} from "@/data/cv";

/**
 * One section of the page with a classical heading:
 * a small roman numeral, the title, and a thin rule underneath.
 * `id` lets the top navigation link (#experience etc.) jump here.
 */
function Section({
  id,
  numeral,
  title,
  children,
}: {
  id: string;
  numeral: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">
        <span className="numeral">{numeral}.</span> {title}
      </h2>
      {children}
    </section>
  );
}

/**
 * A dated entry used by Experience, Education and Leadership:
 * dates in a narrow left column, details on the right (stacks on phones).
 */
function Entry({
  period,
  heading,
  sub,
  points,
}: {
  period: string;
  heading: string;
  sub: string;
  points?: string[];
}) {
  return (
    <article className="entry">
      <p className="entry-period">{period}</p>
      <div>
        <h3 className="entry-heading">{heading}</h3>
        <p className="entry-sub">{sub}</p>
        {points && (
          <ul className="entry-points">
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

// Navigation entries: [anchor id, label].
const nav = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["contact", "Contact"],
];

export default function Home() {
  return (
    <>
      {/* ---------- Top bar: navigation + theme switch ---------- */}
      <header className="topbar">
        <nav>
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </header>

      <main className="page">
        {/* ---------- Masthead: name and title, styled like a printed letterhead ---------- */}
        <div className="masthead">
          <p className="eyebrow">Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="masthead-title">{profile.title}</p>
          <p className="masthead-meta">
            {profile.location} · <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <div className="ornament" aria-hidden="true">❦</div>
        </div>

        <Section id="about" numeral="I" title="About">
          <p className="lead">{profile.summary}</p>
          <Entry
            period={education.period}
            heading={education.degree}
            sub={`${education.school} — ${education.grade}`}
          />
        </Section>

        <Section id="experience" numeral="II" title="Experience">
          {experience.map((job) => (
            <Entry
              key={job.company}
              period={job.period}
              heading={job.role}
              sub={`${job.company} · ${job.place}`}
              points={job.points}
            />
          ))}
        </Section>

        <Section id="projects" numeral="III" title="Projects">
          <div className="cards">
            {projects.map((p) => (
              <article key={p.name} className="card">
                <p className="card-tag">{p.tag}</p>
                <h3>{p.name}</h3>
                <ul className="entry-points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" numeral="IV" title="Skills">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skill-row">
                <dt>{s.group}</dt>
                <dd>
                  {s.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="leadership" numeral="V" title="Leadership">
          {leadership.map((l) => (
            <Entry key={l.org} period={l.period} heading={l.role} sub={l.org} points={l.points} />
          ))}
        </Section>

        <Section id="honours" numeral="VI" title="Certificates & Achievements">
          <div className="two-col">
            <ul className="plain-list">
              {certificates.map((c) => (
                <li key={c.name}>
                  <strong>{c.name}</strong>
                  <span className="muted">
                    {c.by} · {c.period}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="plain-list">
              {achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="contact" numeral="VII" title="Contact">
          <p className="lead">
            Open to full-stack and mobile development opportunities. The quickest way to reach me is
            by email.
          </p>
          <p className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </Section>
      </main>

      <footer className="footer">
        <div className="ornament" aria-hidden="true">❦</div>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}
