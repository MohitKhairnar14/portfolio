import React from 'react';
import type { Theme } from "../../types";

interface SectionLabelProps {
  label: string;
  theme: Theme;
  align?: "left" | "center";
}

export default function SectionLabel({ label, theme: t, align = "left" }: SectionLabelProps) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14,
      justifyContent: align === "center" ? "center" : "flex-start",
    }}>
      <div style={{
        height: 1.5, width: 28,
        background: `linear-gradient(90deg, ${t.accent}, transparent)`,
      }} />
      <span style={{
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 11, letterSpacing: "0.18em",
        color: t.accent,
      }}>{label}</span>
      <div style={{
        height: 1.5, width: 28,
        background: `linear-gradient(90deg, transparent, ${t.accent})`,
      }} />
    </div>
  );
}
