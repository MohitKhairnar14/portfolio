import React from 'react';
import type { Theme } from "../../types";
import { profile } from "../../data";
import SectionLabel from "../shared/SectionLabel";

interface AboutProps {
  theme: Theme;
}

const softSkills = ["Problem Solving", "Communication", "Presentation", "Teamwork", "Aptitude"];

const infoCards = [
  { icon: "🏫", label: "Institution", value: "R.C. Patel I.T." },
  { icon: "📍", label: "Location",    value: "Dhule, MH"       },
  { icon: "🎓", label: "Year / Branch",value: "2nd · CE"       },
  { icon: "⭐", label: "CGPA",        value: "8.29 / 10"       },
];

const skillIcons: [string, string, string][] = [
  ["C",      "⚙️", "#00ccff"],
  ["Java",   "☕", "#f59e0b"],
  ["Python", "🐍", "#22c55e"],
  ["MySQL",  "🗄️", "#a855f7"],
  ["HTML",   "🎨", "#ef4444"],
  ["CSS",    "✦",  "#0ea5e9"],
];

function SkillsRing(_: { theme: Theme }) {
  return (
    <svg viewBox="0 0 520 76" width="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="76" fill="none" />
      {skillIcons.map(([lang, em, col], i) => {
        const x = 44 + i * 72;
        return (
          <g key={lang}>
            <circle cx={x} cy="36" r="28" fill={col} fillOpacity="0.1"
              stroke={col} strokeWidth="1.2" strokeOpacity="0.35" />
            <text x={x} y="33" textAnchor="middle" fontSize="15">{em}</text>
            <text x={x} y="48" textAnchor="middle" fontSize="9.5"
              fontFamily="Syne, sans-serif" fontWeight="700" fill={col}>{lang}</text>
          </g>
        );
      })}
    </svg>
  );
}

export default function About({ theme: t }: AboutProps) {
  return (
    <section
      id="about"
      style={{ padding: "90px 6%", maxWidth: 940, margin: "0 auto" }}
    >
      <SectionLabel label="ABOUT ME" theme={t} />

      <div style={{
        display: "grid",
        gridTemplateColumns: "1.1fr 0.9fr",
        gap: 36,
        alignItems: "center",
      }}>
        {/* Left — text */}
        <div>
          <h2 style={{
            fontFamily: "Syne, sans-serif", fontWeight: 800,
            fontSize: 32, letterSpacing: "-0.02em",
            color: t.text, marginBottom: 14, lineHeight: 1.2,
          }}>
            Curious mind,<br />
            <span style={{ color: t.accent }}>code by day</span>
          </h2>

          <p style={{ fontSize: 14.5, color: t.muted, lineHeight: 1.85, marginBottom: 13 }}>
            I'm{" "}
            <strong style={{ color: t.text, fontWeight: 500 }}>{profile.name}</strong>
            , a 2nd-year CE student at{" "}
            <strong style={{ color: t.text, fontWeight: 500 }}>
              R.C. Patel Institute of Technology, Shirpur
            </strong>{" "}
            with a CGPA of{" "}
            <strong style={{ color: t.accent, fontWeight: 700 }}>8.29</strong>.
          </p>

          <p style={{ fontSize: 14.5, color: t.muted, lineHeight: 1.85, marginBottom: 16 }}>
            I enjoy working in collaborative teams, exploring new technologies, and
            turning ideas into real projects. From responsive portfolio builders to
            real-time stock alert systems — I build things that matter.
          </p>

          {/* Soft skills pills */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {softSkills.map((s) => (
              <span key={s} style={{
                fontSize: 12, padding: "4px 12px", borderRadius: 99,
                background: t.tag, color: t.tagText,
                fontFamily: "DM Sans, sans-serif", fontWeight: 500,
                border: `1px solid ${t.accent}18`,
              }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Right — info cards + skills ring */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11 }}>
          {infoCards.map(({ icon, label, value }) => (
            <div key={label} style={{
              background: t.card, border: `1px solid ${t.cardBorder}`,
              borderRadius: 13, padding: "16px 13px", textAlign: "center",
            }}>
              <div style={{ fontSize: 22, marginBottom: 7 }}>{icon}</div>
              <div style={{
                fontSize: 9.5, color: t.muted,
                fontFamily: "JetBrains Mono, monospace",
                letterSpacing: "0.06em", marginBottom: 3,
              }}>{label}</div>
              <div style={{
                fontSize: 13, fontWeight: 600,
                color: t.text, fontFamily: "Syne, sans-serif",
              }}>{value}</div>
            </div>
          ))}

          {/* Skills ring spans both columns */}
          <div style={{
            gridColumn: "1 / -1",
            background: t.card, border: `1px solid ${t.cardBorder}`,
            borderRadius: 13, padding: "13px 10px",
          }}>
            <SkillsRing theme={t} />
          </div>
        </div>
      </div>
    </section>
  );
}
