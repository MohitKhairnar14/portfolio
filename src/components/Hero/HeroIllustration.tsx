import React from 'react';
import type { Theme } from "../../types";

interface HeroIllustrationProps {
  theme: Theme;
}

export default function HeroIllustration({ theme: t }: HeroIllustrationProps) {
  return (
    <svg
      viewBox="0 0 220 220"
      width="190"
      height="190"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: `drop-shadow(0 0 28px ${t.accent}22)` }}
    >
      {/* Outer spinning dashed ring */}
      <circle
        cx="110" cy="110" r="100"
        fill="none" stroke={t.accent} strokeWidth="1"
        strokeDasharray="8 6" opacity="0.3"
      >
        <animateTransform
          attributeName="transform" type="rotate"
          from="0 110 110" to="360 110 110"
          dur="22s" repeatCount="indefinite"
        />
      </circle>

      {/* Inner counter-spinning ring */}
      <circle
        cx="110" cy="110" r="76"
        fill="none" stroke={t.accent2} strokeWidth="1"
        strokeDasharray="4 9" opacity="0.22"
      >
        <animateTransform
          attributeName="transform" type="rotate"
          from="360 110 110" to="0 110 110"
          dur="15s" repeatCount="indefinite"
        />
      </circle>

      {/* Centre glow circle */}
      <circle
        cx="110" cy="110" r="56"
        fill={`${t.accent}12`} stroke={t.accent}
        strokeWidth="1.5" opacity="0.7"
      />

      {/* Laptop emoji */}
      <text x="110" y="127" textAnchor="middle" fontSize="50" fontFamily="system-ui">
        💻
      </text>

      {/* Pulsing orbit dots */}
      {([
        [40, 40], [180, 40], [40, 180], [180, 180],
        [110, 16], [110, 204], [16, 110], [204, 110],
      ] as [number, number][]).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4"
          fill={i % 2 === 0 ? t.accent : t.accent2} opacity="0.55"
        >
          <animate
            attributeName="opacity"
            values="0.55;1;0.55"
            dur={`${2.2 + i * 0.28}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Code brackets */}
      <text x="62" y="120" fontSize="22" fill={t.accent}
        fontFamily="monospace" opacity="0.65">{"<"}</text>
      <text x="144" y="120" fontSize="22" fill={t.accent}
        fontFamily="monospace" opacity="0.65">{"/>"}</text>
    </svg>
  );
}
