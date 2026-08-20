import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  return (
    <section
      id="experience"
      className="content-section experience-section"
      aria-labelledby="experience-title"
    >
      <div className="shell">
        <SectionHeading
          id="experience-title"
          index="02"
          eyebrow="Research & Engineering"
          title="Experience"
          description="Research and engineering work across computational materials, HPC environments and scientific simulation tooling."
        />

        <div className="experience-list">
          {portfolioData.experience.map((item, index) => (
            <article
              className="experience-item"
              key={item.organization}
              data-reveal="item"
            >
              <span className="experience-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="experience-position">
                <p>{item.organization}</p>
                <h3>{item.role}</h3>
              </div>

              <div className="experience-period">
                <span>{item.period}</span>
                {item.current ? <small>Current</small> : null}
              </div>

              <div className="experience-detail">
                <p>{item.description}</p>
                <ul className="technology-list" aria-label="Technologies and areas">
                  {item.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
