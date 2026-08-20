import { ArrowUpRight, CircleDashed } from "lucide-react";
import { isConfiguredLink, type Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const configuredLinks =
    project.links?.filter((link) => isConfiguredLink(link.value)) ?? [];

  return (
    <article
      className={
        "project-card project-card-" +
        project.layout +
        (project.featured ? " project-card-featured" : "")
      }
      data-reveal="project-card"
    >
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <p>{project.category}</p>
        {project.status ? (
          <span className="project-status">
            <CircleDashed size={12} strokeWidth={1.7} aria-hidden="true" />
            {project.status}
          </span>
        ) : null}
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {project.metrics ? (
          <dl className="project-metrics">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {project.details ? (
          <ul className="project-details">
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="project-card-footer">
        <ul className="technology-list" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {configuredLinks.length > 0 ? (
          <div className="project-links">
            {configuredLinks.map((link) => (
              <a
                className={project.featured ? "project-source-link" : undefined}
                key={link.label}
                href={link.value}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label + ": " + project.title}
              >
                {link.label}
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
