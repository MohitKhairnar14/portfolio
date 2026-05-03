import React from 'react';
import type { Theme } from "../../types";
import { skills, tools } from "../../data";
import { useInView } from "../../hooks/useInView";
import SectionLabel from "../shared/SectionLabel";

interface SkillsProps {
  theme: Theme;
}

interface SkillBarProps {
  name: string;
  icon: string;
  desc: string;
  level: number;
  theme: Theme;
}

function SkillBar({ name, icon, desc, level, theme: t }: SkillBarProps) {
  const [ref, inView] = useInView(0.3);

  return (
    <div
      ref={ref}
      style={{
        background: t.skillBg,
        border: `1px solid ${t.cardBorder}`,
        borderRadius: 14, padding: "17px 19px",
        transition: "transform 0.25s, box-shadow 0.25s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = `0 8px 28px ${t.accent}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 7 }}>
        <span style={{ fontSize: 19 }}>{icon}</span>
        <span style={{
          fontFamily: "Syne, sans-serif", fontWeight: 700,
          fontSize: 14.5, color: t.text,
        }}>{name}</span>
      </div>

      <p style={{ fontSize: 12, color: t.muted, margin: "0 0 11px", fontFamily: "DM Sans, sans-serif" }}>
        {desc}
      </p>

      {/* Progress bar */}
      <div style={{ height: 4, borderRadius: 99, background: t.cardBorder, overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 99,
          background: `linear-gradient(90deg, ${t.accent}, ${t.accent2})`,
          width: inView ? `${level}%` : "0%",
          transition: "width 1.1s cubic-bezier(.4,0,.2,1)",
        }} />
      </div>

      <div style={{
        textAlign: "right", fontSize: 10.5,
        color: t.muted, marginTop: 4,
        fontFamily: "JetBrains Mono, monospace",
      }}>{level}%</div>
    </div>
  );
}

export default function Skills({ theme: t }: SkillsProps) {
  return (
    <section
      id="skills"
      style={{ padding: "90px 6%", maxWidth: 940, margin: "0 auto" }}
    >
      <SectionLabel label="SKILLS" theme={t} />
      <h2 style={{
        fontFamily: "Syne, sans-serif", fontWeight: 800,
        fontSize: 30, color: t.text, marginBottom: 7,
        letterSpacing: "-0.02em",
      }}>Tech Stack</h2>
      <p style={{ color: t.muted, fontSize: 14, marginBottom: 28 }}>
        What I work with and sharpen every semester.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(236px, 1fr))",
        gap: 14,
      }}>
        {skills.map((s) => (
          <SkillBar key={s.name} {...s} theme={t} />
        ))}
      </div>

      {/* Tools row */}
      <div style={{
        marginTop: 20, padding: "16px 20px",
        background: t.card, border: `1px solid ${t.cardBorder}`,
        borderRadius: 13,
        display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center",
      }}>
        <span style={{
          fontSize: 10.5, color: t.muted,
          fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.1em",
        }}>TOOLS</span>
        {tools.map((tool) => (
          <span key={tool} style={{
            fontSize: 12, padding: "4px 12px", borderRadius: 99,
            background: t.skillBg, color: t.muted,
            fontFamily: "DM Sans, sans-serif",
            border: `1px solid ${t.cardBorder}`,
          }}>{tool}</span>
        ))}
      </div>
    </section>
  );
}
