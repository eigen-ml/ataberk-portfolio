import type { Content } from "@/data/content";

const columns = [80, 215, 350, 485, 620];
const rows = [70, 150, 230];

type Arrow = { x: number; y: number; up: boolean; delay: number };

const arrows: Arrow[] = rows.flatMap((y, rowIndex) =>
  columns.map((x, columnIndex) => ({
    x,
    y,
    up: (rowIndex + columnIndex) % 2 === 0,
    delay: (rowIndex * columns.length + columnIndex) * 0.22,
  })),
);

export function SpinOrder({ copy }: { copy: Content }) {
  return (
    <section
      className="section spin-section"
      id="magnetic-order"
      aria-labelledby="spin-title"
    >
      <div className="shell split split-reverse" data-reveal="section">
        <svg
          className="figure"
          viewBox="0 0 700 300"
          role="img"
          aria-label={copy.spins.heading}
        >
          <g stroke="#232b42" strokeWidth="1">
            {rows.map((y) => (
              <line key={"r" + y} x1="80" y1={y} x2="620" y2={y} />
            ))}
            {columns.map((x) => (
              <line key={"c" + x} x1={x} y1="70" x2={x} y2="230" />
            ))}
          </g>

          <g strokeWidth="2.6" strokeLinecap="round" fill="none">
            {arrows.map((arrow) => {
              const color = arrow.up ? "#9fb2ff" : "#c77cff";
              const head = arrow.up
                ? "M" + (arrow.x - 8) + " " + (arrow.y - 10) +
                  " L" + arrow.x + " " + (arrow.y - 20) +
                  " L" + (arrow.x + 8) + " " + (arrow.y - 10)
                : "M" + (arrow.x - 8) + " " + (arrow.y + 10) +
                  " L" + arrow.x + " " + (arrow.y + 20) +
                  " L" + (arrow.x + 8) + " " + (arrow.y + 10);

              return (
                <g
                  key={arrow.x + "-" + arrow.y}
                  className="spin-arrow"
                  style={{ animationDelay: arrow.delay + "s" }}
                >
                  <line
                    x1={arrow.x}
                    y1={arrow.y - 18}
                    x2={arrow.x}
                    y2={arrow.y + 18}
                    stroke={color}
                  />
                  <path d={head} stroke={color} />
                </g>
              );
            })}
          </g>
        </svg>

        <div>
          <span className="eyebrow">{copy.spins.index}</span>
          <h2 id="spin-title">{copy.spins.heading}</h2>
          <p className="section-body">{copy.spins.body}</p>

          <div className="metrics">
            {copy.spins.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="metric-value" data-accent={metric.accent ? "true" : undefined}>
                  {metric.value}
                </div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
