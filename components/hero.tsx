import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Download,
  Mail,
  SquareUserRound,
} from "lucide-react";
import {
  getProfileHref,
  isConfiguredLink,
  portfolioData,
} from "@/data/portfolio";

export function Hero() {
  const { person } = portfolioData;
  const githubHref = getProfileHref(person.links.github);
  const linkedinHref = getProfileHref(person.links.linkedin);
  const emailHref = getProfileHref(person.links.email, "email");

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="shell hero-layout">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" aria-hidden="true" />
            {person.availability}
          </div>

          <p className="eyebrow">{person.title} · Computational Scientist</p>
          <h1 id="hero-title">{person.name}</h1>
          <p className="hero-specialism">
            Computational Materials <span>·</span> DFT <span>·</span> HPC{" "}
            <span>·</span> Scientific Computing
          </p>
          <p className="hero-description">{person.summary}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View Selected Work
              <ArrowDownRight size={17} strokeWidth={1.7} aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href={githubHref}
              target={
                isConfiguredLink(person.links.github) ? "_blank" : undefined
              }
              rel={
                isConfiguredLink(person.links.github)
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              View GitHub
              <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />
            </a>
            <a className="text-action" href={person.links.cv} download>
              <Download size={16} strokeWidth={1.7} aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div className="hero-socials" aria-label="Professional profiles">
            <a
              href={githubHref}
              aria-label="GitHub profile"
              title="GitHub"
              target={
                isConfiguredLink(person.links.github) ? "_blank" : undefined
              }
              rel={
                isConfiguredLink(person.links.github)
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              <Code2 size={18} strokeWidth={1.6} aria-hidden="true" />
            </a>
            <a
              href={linkedinHref}
              aria-label="LinkedIn profile"
              title="LinkedIn"
              target={
                isConfiguredLink(person.links.linkedin) ? "_blank" : undefined
              }
              rel={
                isConfiguredLink(person.links.linkedin)
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              <SquareUserRound
                size={18}
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </a>
            <a href={emailHref} aria-label="Email Ata Berk Öztürk" title="Email">
              <Mail size={18} strokeWidth={1.6} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="science-panel" aria-label="Scientific workflow diagram">
          <div className="panel-header">
            <span>ABÖ / COMPUTE</span>
            <span>WORKFLOW 01</span>
          </div>
          <div className="panel-body">
            <div className="workflow-axis" aria-hidden="true">
              <span>01</span>
              <span>02</span>
              <span>03</span>
              <span>04</span>
            </div>
            <ol className="workflow-list">
              <li>
                <span>Structure</span>
                <small>INPUT</small>
              </li>
              <li>
                <span>First-principles model</span>
                <small>SOLVER</small>
              </li>
              <li>
                <span>Parallel calculation</span>
                <small>HPC</small>
              </li>
              <li>
                <span>Electronic properties</span>
                <small>OUTPUT</small>
              </li>
            </ol>
          </div>
          <div className="panel-footer">
            <span>VASP / QE</span>
            <span>PYTHON / SLURM</span>
          </div>
        </div>
      </div>

      <div className="shell hero-footer">
        <span>{person.location}</span>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
