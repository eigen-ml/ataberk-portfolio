import { tools, type Content, type ToolGroup } from "@/data/content";

const groupColor: Record<ToolGroup, string> = {
  firstPrinciples: "#8b9cff",
  computing: "#c77cff",
  systems: "#93a0c4",
};

const groupTint: Record<ToolGroup, string> = {
  firstPrinciples: "rgba(139, 156, 255, 0.10)",
  computing: "rgba(199, 124, 255, 0.10)",
  systems: "rgba(147, 160, 196, 0.10)",
};

const groupOrder: ToolGroup[] = ["firstPrinciples", "computing", "systems"];

export function Toolkit({ copy }: { copy: Content }) {
  return (
    <section className="section" id="toolkit" aria-labelledby="toolkit-title">
      <div className="shell">
        <div className="toolkit-head">
          <div>
            <span className="eyebrow">{copy.toolkit.index}</span>
            <h2 id="toolkit-title" className="toolkit-title">
              {copy.toolkit.heading}
            </h2>
          </div>

          <div className="legend">
            {groupOrder.map((group) => (
              <span key={group}>
                <i style={{ background: groupColor[group] }} aria-hidden="true" />
                {copy.toolkit.legend[group]}
              </span>
            ))}
          </div>
        </div>

        <div className="tiles" data-reveal="section">
          {tools.map((tool, index) => (
            <div
              className="tile"
              key={tool.name}
              style={{
                background:
                  "linear-gradient(160deg, " + groupTint[tool.group] + ", transparent 70%)",
              }}
            >
              <span className="tile-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="tile-symbol" style={{ color: groupColor[tool.group] }}>
                {tool.symbol}
              </span>
              <span className="tile-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
