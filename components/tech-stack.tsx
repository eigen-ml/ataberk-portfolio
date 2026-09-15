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
          eyebrow="Tools"
          title="Tools & Technologies"
          description="Software I use for materials modelling, scientific computing and HPC work."
        />
        <div className="stack-table">
          {portfolioData.technologies.map((group) => (
            <div
              className="stack-row"
              key={group.category}
              data-reveal="item"
            >
              <div className="stack-category">
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
