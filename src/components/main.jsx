import React from 'react';
import './Main.css';

const CauseCard = ({ title, goal, raised }) => (
  <article className="cause-card" role="article" aria-label={title}>
    <div className="cause-card__image" aria-hidden="true">{/* placeholder image */}</div>
    <div className="cause-card__content">
      <h3>{title}</h3>
      <p className="cause-card__meta">Raised ${raised.toLocaleString()} of ${goal.toLocaleString()}</p>
      <div className="cause-card__progress">
        <div className="cause-card__bar" style={{ width: `${Math.min(100, (raised / goal) * 100)}%` }} />
      </div>
      <button className="btn btn--primary">Donate</button>
    </div>
  </article>
);

const ProjectCard = ({ title, summary, location, impact }) => (
  <article className="project-card" role="article" aria-label={title}>
    <div className="project-card__image" aria-hidden="true">{/* placeholder image */}</div>
    <div className="project-card__content">
      <h3>{title}</h3>
      <p className="project-card__meta">{location} • {impact}</p>
      <p className="project-card__summary">{summary}</p>
      <div className="project-card__actions">
        <a className="btn btn--ghost" href="#projects">View details</a>
      </div>
    </div>
  </article>
);

export default function Main() {

  const projects = [
    {
      title: 'Village Water Wells',
      summary: 'Drilling and installing two community wells with training for maintenance and water committees.',
      location: 'Village A, Region X',
      impact: 'Clean water for 2,500 people'
    },
    {
      title: 'Community Learning Center',
      summary: 'Build and equip a learning center for after-school programs and adult literacy classes.',
      location: 'Town B, Region Y',
      impact: 'Education for 400 children'
    },
    {
      title: 'Emergency Relief Kits',
      summary: 'Distribute medical and hygiene kits to families affected by recent floods.',
      location: 'Region Z',
      impact: 'Support for 1,200 households'
    }
  ];

  return (
    <main className="site-main" id="main">
      <section className="hero" role="region" aria-label="Hero">
        <div className="hero__inner">
          <h1>Give hope. Change lives.</h1>
          <p>We partner with local communities to provide lasting solutions — clean water, education, and emergency aid.</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#donate">Donate Now</a>
            <a className="btn btn--ghost" href="#about">Learn More</a>
          </div>
        </div>
      </section>

      

      <section className="projects" id="projects" role="region" aria-label="Projects">
        <div className="container">
          <h2>Ongoing Projects</h2>
          <p className="muted">Real projects delivering measurable impact in communities we serve.</p>

          <div className="projects__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1rem', marginTop: '1rem' }}>
            {projects.map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                summary={p.summary}
                location={p.location}
                impact={p.impact}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="about" role="region" aria-label="About us">
        <div className="container">
          <h2>About Our Work</h2>
          <p>We focus on sustainable, community-driven projects. Every donation supports vetted initiatives and transparent reporting.</p>
        </div>
      </section>

      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <p>© {new Date().getFullYear()} Shining Lives — Committed to Transforming Lives</p>
        </div>
      </footer>
    </main>
  );
}