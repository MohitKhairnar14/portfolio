import { useState } from "react";
import type { Theme, Project } from "../../types";
import { projects } from "../../data";
import SectionLabel from "../shared/SectionLabel";

interface ProjectsProps {
  theme: Theme;
}

function QuickFolioIllustration({ t }: { t: Theme }) {
  return (
    <svg viewBox="0 0 520 180" width="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="180" fill={`${t.accent}06`} rx="12" />
      {([
        ["Business", 55,  "🏢", "#00ccff"],
        ["Teacher",  195, "🎓", "#a855f7"],
        ["Student",  335, "📖", "#22c55e"],
      ] as [string, number, string, string][]).map(([cat, x, em, col]) => (
        <g key={cat}>
          <rect x={x} y="16" width="138" height="150" rx="13"
            fill={t.card} stroke={col} strokeWidth="1.2" strokeOpacity="0.35" />
          <text x={x + 69} y="58" textAnchor="middle" fontSize="28">{em}</text>
          <text x={x + 69} y="78" textAnchor="middle" fontSize="11.5"
            fontFamily="Syne, sans-serif" fontWeight="700" fill={col}>{cat} Profile</text>
          <rect x={x + 10} y="88" width="54" height="36" rx="7"
            fill={col} fillOpacity="0.1" stroke={col} strokeOpacity="0.18" strokeWidth="0.9" />
          <rect x={x + 74} y="88" width="54" height="36" rx="7"
            fill={col} fillOpacity="0.1" stroke={col} strokeOpacity="0.18" strokeWidth="0.9" />
          <text x={x + 37} y="110" textAnchor="middle" fontSize="16">🖼️</text>
          <text x={x + 101} y="110" textAnchor="middle" fontSize="16">📋</text>
          <rect x={x + 10} y="136" width="118" height="14" rx="7" fill={col} fillOpacity="0.15" />
          <text x={x + 69} y="147" textAnchor="middle" fontSize="8"
            fontFamily="DM Sans, sans-serif" fill={col} opacity="0.9">Share · Hire · Connect</text>
        </g>
      ))}
      <text x="260" y="172" textAnchor="middle" fontSize="9"
        fontFamily="JetBrains Mono, monospace" fill={t.muted} opacity="0.65">
        QuickFolio · 3rd Semester · HTML + CSS + JavaScript
      </text>
    </svg>
  );
}

function StockIllustration({ t }: { t: Theme }) {
  const pts = [30, 62, 44, 78, 38, 56, 74, 33, 56, 42, 70, 28];
  const mn = Math.min(...pts), mx = Math.max(...pts);
  const Y = (v: number) => 28 + (1 - (v - mn) / (mx - mn)) * 90;
  const pathD = pts.map((v, i) => `${i === 0 ? "M" : "L"}${38 + i * 36},${Y(v)}`).join(" ");
  return (
    <svg viewBox="0 0 520 155" width="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="155" fill={`${t.accent2}06`} rx="12" />
      <path d={pathD} fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`${pathD} L${38 + 36 * 11},135 L38,135 Z`} fill="#a855f7" fillOpacity="0.06" />
      <line x1="28" y1={Y(52)} x2="452" y2={Y(52)} stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.75" />
      <rect x="454" y={Y(52) - 10} width="58" height="18" rx="5" fill="#ef444414" stroke="#ef444430" strokeWidth="0.8" />
      <text x="483" y={Y(52) + 4} textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#ef4444">THRESHOLD</text>
      <circle cx={38 + 7 * 36} cy={Y(33)} r="6" fill="#ef4444" opacity="0.9">
        <animate attributeName="r" values="6;11;6" dur="1.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="1.6s" repeatCount="indefinite" />
      </circle>
      <rect x="460" y="44" width="52" height="56" rx="11" fill="#a855f714" stroke="#a855f730" strokeWidth="1" />
      <text x="486" y="67" textAnchor="middle" fontSize="20">📧</text>
      <text x="486" y="84" textAnchor="middle" fontSize="7.5" fontFamily="JetBrains Mono, monospace" fill="#a855f7">EMAIL</text>
      <text x="486" y="94" textAnchor="middle" fontSize="7.5" fontFamily="JetBrains Mono, monospace" fill="#a855f7">ALERT!</text>
      <text x="245" y="148" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono, monospace" fill={t.muted} opacity="0.65">
        Smart Stock Alerts · 4th Semester · Python + Email Automation
      </text>
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  theme: Theme;
}

function ProjectCard({ project: p, theme: t }: ProjectCardProps) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: t.card,
        border: `1px solid ${hov ? `${p.color}50` : t.cardBorder}`,
        borderRadius: 18, padding: "24px 26px 22px",
        transition: "all 0.3s",
        transform: hov ? "translateY(-5px)" : "",
        boxShadow: hov ? `0 18px 48px ${p.color}16` : "",
        position: "relative", overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: -40, right: -40, width: 140, height: 140, borderRadius: "50%", background: `${p.color}08`, pointerEvents: "none" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
        <span style={{ fontSize: 28 }}>{p.emoji}</span>
        <div>
          <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 20, color: t.text, margin: 0 }}>{p.title}</h3>
          <p style={{ fontSize: 11, color: p.color, fontFamily: "JetBrains Mono, monospace", margin: 0 }}>{p.semester}</p>
        </div>
      </div>
      <p style={{ fontSize: 13.5, color: p.color, fontStyle: "italic", fontFamily: "DM Sans, sans-serif", marginBottom: 9, fontWeight: 500 }}>{p.tagline}</p>
      <p style={{ fontSize: 14, color: t.muted, lineHeight: 1.75, fontFamily: "DM Sans, sans-serif", marginBottom: 15 }}>{p.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
        {p.tags.map((tag) => (
          <span key={tag} style={{ fontSize: 11.5, padding: "3px 11px", borderRadius: 99, background: `${p.color}12`, color: p.color, fontFamily: "DM Sans, sans-serif", fontWeight: 500, border: `1px solid ${p.color}22` }}>{tag}</span>
        ))}
      </div>
      <div style={{ borderTop: `1px solid ${t.divider}`, paddingTop: 13 }}>
        <p style={{ fontSize: 10.5, color: t.muted, marginBottom: 8, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em" }}>KEY FEATURES</p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 12px" }}>
          {p.highlights.map((h) => (
            <li key={h} style={{ fontSize: 12.5, color: t.muted, fontFamily: "DM Sans, sans-serif", display: "flex", alignItems: "flex-start", gap: 5 }}>
              <span style={{ color: p.color, fontSize: 9, marginTop: 4 }}>▸</span>{h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Projects({ theme: t }: ProjectsProps) {
  const illustrations = [QuickFolioIllustration, StockIllustration];
  return (
    <section id="projects" style={{ padding: "90px 6%", maxWidth: 940, margin: "0 auto" }}>
      <SectionLabel label="PROJECTS" theme={t} />
      <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 30, color: t.text, marginBottom: 7, letterSpacing: "-0.02em" }}>What I've Built</h2>
      <p style={{ color: t.muted, fontSize: 14, marginBottom: 32 }}>Real-world projects crafted during my engineering semesters.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 34 }}>
        {projects.map((project, i) => {
          const Illustration = illustrations[i];
          return (
            <div key={project.title}>
              <div style={{ marginBottom: 14, borderRadius: 14, overflow: "hidden", border: `1px solid ${t.cardBorder}` }}>
                <Illustration t={t} />
              </div>
              <ProjectCard project={project} theme={t} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
