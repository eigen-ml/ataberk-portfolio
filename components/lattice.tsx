const metalSites = [
  [300, 300],
  [540, 300],
  [780, 300],
  [1020, 300],
  [1260, 300],
  [300, 430],
  [540, 430],
  [780, 430],
  [1020, 430],
  [1260, 430],
];

const topFace = [420, 660, 900, 1140];

/**
 * A Janus XSSe monolayer seen at an angle: sulphur face on top,
 * the metal plane (Sn / Ti) in the middle, selenium face underneath.
 */
export function Lattice() {
  return (
    <svg
      className="lattice"
      data-parallax="true"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="bond-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7f8fff" />
          <stop offset="100%" stopColor="#c77cff" />
        </linearGradient>
        <radialGradient id="atom-top">
          <stop offset="0%" stopColor="#e9edff" />
          <stop offset="55%" stopColor="#8fa2ff" />
          <stop offset="100%" stopColor="#4356b8" />
        </radialGradient>
        <radialGradient id="atom-bottom">
          <stop offset="0%" stopColor="#ffd9f4" />
          <stop offset="55%" stopColor="#d087f0" />
          <stop offset="100%" stopColor="#7a3fa8" />
        </radialGradient>
        <radialGradient id="atom-metal">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#9fb8c9" />
          <stop offset="100%" stopColor="#3f5566" />
        </radialGradient>
        <filter id="density-blur">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <ellipse
        className="density"
        cx="820"
        cy="470"
        rx="470"
        ry="150"
        fill="#5566cc"
        opacity="0.16"
        filter="url(#density-blur)"
      />

      <g
        className="bonds"
        stroke="url(#bond-gradient)"
        strokeWidth="2.1"
        fill="none"
      >
        <path d="M300 300 L420 240 L540 300 L660 240 L780 300 L900 240 L1020 300 L1140 240 L1260 300" />
        <path d="M300 300 L300 430 M540 300 L540 430 M780 300 L780 430 M1020 300 L1020 430 M1260 300 L1260 430" />
        <path d="M300 430 L420 490 L540 430 L660 490 L780 430 L900 490 L1020 430 L1140 490 L1260 430" />
        <path d="M420 490 L420 620 M660 490 L660 620 M900 490 L900 620 M1140 490 L1140 620" />
        <path
          d="M300 620 L420 620 L540 680 L660 620 L780 680 L900 620 L1020 680 L1140 620 L1260 680"
          opacity="0.55"
        />
      </g>

      <g className="atom-top">
        {topFace.map((x) => (
          <circle key={x} cx={x} cy={240} r={7} fill="url(#atom-top)" />
        ))}
      </g>

      <g>
        {metalSites.map(([x, y]) => (
          <circle key={x + "-" + y} cx={x} cy={y} r={10} fill="url(#atom-metal)" />
        ))}
      </g>

      <g className="atom-bottom">
        {topFace.map((x) => (
          <circle key={x} cx={x} cy={490} r={7.5} fill="url(#atom-bottom)" />
        ))}
        {topFace.map((x) => (
          <circle
            key={x + "-lower"}
            cx={x}
            cy={620}
            r={7.5}
            fill="url(#atom-bottom)"
            opacity="0.6"
          />
        ))}
      </g>
    </svg>
  );
}
