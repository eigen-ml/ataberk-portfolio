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

          <p className="eyebrow">{person.title}</p>
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

        <div className="science-panel" aria-label="Current work">
          <div className="panel-header">
            <span>Current work</span>
            <span>Since 2024</span>
          </div>
          <div className="panel-body">
            <ol className="workflow-list">
              <li>
                <span>Thesis</span>
                <small>2D magnetic materials</small>
              </li>
              <li>
                <span>Method</span>
                <small>DFT · VASP / QE</small>
              </li>
              <li>
                <span>Data</span>
                <small>316K records processed</small>
              </li>
              <li>
                <span>Compute</span>
                <small>Linux · Slurm</small>
              </li>
            </ol>
          </div>
          <div className="panel-footer">
            <span>Ankara University</span>
            <span>Physics Engineering</span>
          </div>
        </div>
      </div>

      <div className="shell hero-footer">
        <span>{person.location}</span>
      </div>
    </section>
  );
}
