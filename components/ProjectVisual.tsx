import type { Project } from "@/lib/data";

export default function ProjectVisual({ type }: { type: Project["visual"] }) {
  const stroke = "#C97A3D";
  const signal = "#5ED3C7";

  if (type === "architecture") {
    return (
      <svg viewBox="0 0 280 140" className="h-full w-full">
        {[
          [16, 20, "Repo"],
          [16, 90, "Errors"],
          [200, 55, "Docs"],
        ].map(([x, y, label], i) => (
          <g key={i}>
            <rect
              x={x as number}
              y={y as number}
              width="64"
              height="34"
              rx="6"
              fill="none"
              stroke={stroke}
              strokeOpacity="0.6"
            />
            <text
              x={(x as number) + 32}
              y={(y as number) + 21}
              textAnchor="middle"
              fontSize="9"
              fontFamily="monospace"
              fill="#8FA396"
            >
              {label}
            </text>
          </g>
        ))}
        <rect x={112} y={53} width="56" height="34" rx="6" fill="none" stroke={signal} />
        <text x={140} y={74} textAnchor="middle" fontSize="9" fontFamily="monospace" fill={signal}>
          Engine
        </text>
        <path d="M80,37 L112,62" stroke={stroke} strokeOpacity="0.5" fill="none" />
        <path d="M80,107 L112,78" stroke={stroke} strokeOpacity="0.5" fill="none" />
        <path d="M168,70 L200,72" stroke={signal} strokeOpacity="0.6" fill="none" />
      </svg>
    );
  }

  if (type === "hardware") {
    return (
      <svg viewBox="0 0 280 140" className="h-full w-full">
        <rect x={90} y={40} width="100" height="60" rx="4" fill="none" stroke={stroke} />
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1={90} y1={54 + i * 12} x2={70} y2={54 + i * 12} stroke={stroke} strokeOpacity="0.6" />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1={190} y1={54 + i * 12} x2={210} y2={54 + i * 12} stroke={stroke} strokeOpacity="0.6" />
        ))}
        <circle cx={140} cy={70} r={14} fill="none" stroke={signal} />
        <text x={140} y={73} textAnchor="middle" fontSize="8" fontFamily="monospace" fill={signal}>
          ESP32
        </text>
        <rect x={30} y={60} width="24" height="20" rx="2" fill="none" stroke={stroke} strokeOpacity="0.7" />
        <text x={42} y={95} textAnchor="middle" fontSize="7" fontFamily="monospace" fill="#8FA396">
          IR
        </text>
      </svg>
    );
  }

  if (type === "cad") {
    return (
      <svg viewBox="0 0 280 140" className="h-full w-full">
        <g stroke={stroke} strokeOpacity="0.7" fill="none">
          <path d="M90,100 L90,50 L150,30 L210,50 L210,100 L150,120 Z" />
          <path d="M90,50 L150,70 L210,50" />
          <path d="M150,70 L150,120" />
        </g>
        <circle cx={150} cy={70} r={4} fill={signal} />
        <text x={150} y={135} textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#8FA396">
          enclosure.f3d
        </text>
      </svg>
    );
  }

  if (type === "network") {
    return (
      <svg viewBox="0 0 280 140" className="h-full w-full">
        <rect x={110} y={45} width="60" height="42" rx="3" fill="none" stroke={stroke} />
        <line x1={118} y1={58} x2={162} y2={58} stroke={signal} strokeOpacity="0.8" />
        <line x1={118} y1={66} x2={148} y2={66} stroke="#8FA396" strokeOpacity="0.6" />
        <line x1={118} y1={74} x2={155} y2={74} stroke="#8FA396" strokeOpacity="0.6" />
        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            cx={140}
            cy={20}
            r={4 + i * 10}
            fill="none"
            stroke={signal}
            strokeOpacity={0.5 - i * 0.12}
          />
        ))}
      </svg>
    );
  }

  if (type === "game") {
    return (
      <svg viewBox="0 0 280 140" className="h-full w-full">
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 12 }).map((_, c) => (
            <rect
              key={`${r}-${c}`}
              x={40 + c * 17}
              y={30 + r * 15}
              width="14"
              height="12"
              fill={
                (r === 2 && c > 3 && c < 8) || (r === 3 && c > 3 && c < 8)
                  ? signal
                  : "none"
              }
              stroke={stroke}
              strokeOpacity="0.25"
            />
          ))
        )}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 280 140" className="h-full w-full">
      {[40, 70, 55, 90, 65, 100].map((h, i) => (
        <rect
          key={i}
          x={40 + i * 32}
          y={110 - h}
          width="18"
          height={h}
          fill="none"
          stroke={i % 2 === 0 ? stroke : signal}
          strokeOpacity="0.7"
        />
      ))}
      <line x1={30} y1={110} x2={260} y2={110} stroke="#8FA396" strokeOpacity="0.4" />
    </svg>
  );
}
