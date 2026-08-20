import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/data/portfolio";

export function TechStack() {
  return (
    <section
      id="technologies"
      className="content-section"
      aria-labelledby="technologies-title"
    >
      <div className="shell">
        <SectionHeading
          id="technologies-title"
          index="04"
          eyebrow="Technical Toolkit"
          title="Tools & Technologies"
          description="A compact working toolkit for materials modelling, scientific computing, HPC and engineering simulation."
        />
        <div className="stack-table">
          {portfolioData.technologies.map((group) => (
            <div
              className="stack-row"
              key={group.category}
              data-reveal="item"
            >
              <div className="stack-category">
                <span>{group.code}</span>
                <h3>{group.category}</h3>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
