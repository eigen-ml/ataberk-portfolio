import type { Content } from "@/data/content";

const bands = [
  "M60 232 C150 206, 200 196, 228 214 C300 258, 340 250, 396 222 C470 190, 520 214, 564 238 C640 268, 690 250, 730 236",
  "M60 262 C160 250, 210 262, 228 254 C310 226, 350 268, 396 262 C480 250, 520 268, 564 272 C650 280, 690 268, 730 262",
  "M60 96 C150 122, 200 132, 228 112 C300 66, 340 78, 396 104 C470 138, 520 114, 564 92 C640 60, 690 80, 730 92",
  "M60 62 C160 76, 210 62, 228 70 C310 100, 350 56, 396 62 C480 76, 520 56, 564 50 C650 40, 690 54, 730 60",
];

const kPoints: [number, string][] = [
  [54, "Γ"],
  [222, "M"],
  [390, "K"],
  [558, "Γ"],
];

export function BandStructure({ copy }: { copy: Content }) {
  return (
    <section className="section" id="electronic-structure" aria-labelledby="band-title">
      <div className="shell split" data-reveal="section">
        <div>
          <span className="eyebrow">{copy.band.index}</span>
          <h2 id="band-title">{copy.band.heading}</h2>
          <p className="section-body">{copy.band.body}</p>
        </div>

        <svg
          className="figure"
          viewBox="0 0 760 330"
          role="img"
          aria-label={copy.band.heading}
        >
          <line x1="60" y1="20" x2="60" y2="290" stroke="#2a3148" strokeWidth="1" />
          <line x1="60" y1="290" x2="730" y2="290" stroke="#2a3148" strokeWidth="1" />
          <line x1="228" y1="20" x2="228" y2="290" stroke="#1c2233" strokeWidth="1" />
          <line x1="396" y1="20" x2="396" y2="290" stroke="#1c2233" strokeWidth="1" />
          <line x1="564" y1="20" x2="564" y2="290" stroke="#1c2233" strokeWidth="1" />

          <line
            className="fermi"
            x1="60"
            y1="168"
            x2="730"
            y2="168"
            stroke="#c77cff"
            strokeWidth="1.4"
          />
          <text x="694" y="160" fill="#c77cff" fontSize="11" fontFamily="var(--font-mono), monospace">
            E_F
          </text>

          {bands.map((d, index) => (
            <path
              key={d}
              className="band-path"
              d={d}
              fill="none"
              stroke={index % 2 === 0 ? "#8b9cff" : "#5c6cc4"}
              strokeWidth={index % 2 === 0 ? 2.4 : 1.8}
              style={{ transitionDelay: index * 180 + "ms" }}
            />
          ))}

          {kPoints.map(([x, label]) => (
            <text
              key={label + x}
              x={x}
              y={312}
              fill="#6d768f"
              fontSize="12"
              fontFamily="var(--font-mono), monospace"
            >
              {label}
            </text>
          ))}

          <text
            x="16"
            y="160"
            fill="#6d768f"
            fontSize="11"
            fontFamily="var(--font-mono), monospace"
          >
            {copy.band.energyAxis}
          </text>
        </svg>
      </div>
    </section>
  );
}
