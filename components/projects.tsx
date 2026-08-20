import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="work" className="content-section" aria-labelledby="work-title">
      <div className="shell">
        <SectionHeading
          id="work-title"
          index="01"
          eyebrow="Selected Work"
          title="Scientific problems, structured as reproducible systems."
          description="Selected work across materials informatics, first-principles modelling and scientific infrastructure."
        />
        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
