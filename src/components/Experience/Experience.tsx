import { useState } from "react";
import type { Theme } from "../../types";
import { experiences, education, certificates } from "../../data";
import SectionLabel from "../shared/SectionLabel";

interface ExperienceProps {
  theme: Theme;
}

export default function Experience({ theme: t }: ExperienceProps) {
  return (
    <section
      id="experience"
      style={{ padding: "90px 6%", maxWidth: 940, margin: "0 auto" }}
    >
      <SectionLabel label="EXPERIENCE" theme={t} />
      <h2 style={{
        fontFamily: "Syne, sans-serif", fontWeight: 800,
        fontSize: 30, color: t.text, marginBottom: 8,
        letterSpacing: "-0.02em",
      }}>
        Journey So Far
      </h2>
      <p style={{ color: t.muted, fontSize: 14, marginBottom: 32 }}>
        Certifications, hackathons, and milestones that shaped my skills.
      </p>

      {/* Experience timeline */}
      <div style={{ position: "relative" }}>
        {/* Spine */}
        <div style={{
          position: "absolute", left: 19, top: 10, bottom: 10,
          width: 2,
          background: `linear-gradient(180deg, ${t.accent}, ${t.accent2})`,
          borderRadius: 99, opacity: 0.22,
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.role} exp={exp} t={t} />
          ))}
        </div>
      </div>

      {/* Education sub-section */}
      <div style={{ marginTop: 52 }}>
        <SectionLabel label="EDUCATION" theme={t} />
        <h3 style={{
          fontFamily: "Syne, sans-serif", fontWeight: 700,
          fontSize: 22, color: t.text, marginBottom: 22,
        }}>
          Academic Background
        </h3>

        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", left: 19, top: 10, bottom: 10,
            width: 2,
            background: `linear-gradient(180deg, ${t.accent}, ${t.accent2})`,
            borderRadius: 99, opacity: 0.2,
          }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {education.map(({ label, school, score, icon, color }) => (
              <div key={label} style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <div style={{
                  width: 38, height: 38, flexShrink: 0,
                  background: `${color}16`,
                  border: `1.5px solid ${color}38`,
                  borderRadius: "50%",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 17, zIndex: 1,
                }}>
                  {icon}
                </div>
                <div style={{
                  background: t.card, border: `1px solid ${t.cardBorder}`,
                  borderRadius: 13, padding: "13px 18px",
                  flex: 1, display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center", flexWrap: "wrap", gap: 8,
                }}>
                  <div>
                    <div style={{
                      fontFamily: "Syne, sans-serif", fontWeight: 700,
                      fontSize: 15, color: t.text,
                    }}>{label}</div>
                    <div style={{ fontSize: 12.5, color: t.muted, marginTop: 2 }}>
                      {school}
                    </div>
                  </div>
                  <span style={{
                    fontSize: 12.5, fontFamily: "JetBrains Mono, monospace",
                    fontWeight: 600, color,
                    background: `${color}12`, border: `1px solid ${color}26`,
                    padding: "3px 13px", borderRadius: 99,
                  }}>{score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div style={{ marginTop: 44 }}>
        <SectionLabel label="CERTIFICATIONS & ACHIEVEMENTS" theme={t} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 12 }}>
          {certificates.map(({ title, icon, color }) => (
            <CertBadge key={title} title={title} icon={icon} color={color} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ── */

interface ExperienceCardProps {
  exp: typeof experiences[0];
  t: Theme;
}

function ExperienceCard({ exp, t }: ExperienceCardProps) {
  const [hov, setHov] = useState(false);

  return (
    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
      {/* Icon node */}
      <div style={{
        width: 40, height: 40, flexShrink: 0,
        background: `${exp.color}16`,
        border: `1.5px solid ${exp.color}38`,
        borderRadius: "50%",
        display: "flex", alignItems: "center",
        justifyContent: "center", fontSize: 18, zIndex: 1,
      }}>
        {exp.icon}
      </div>

      {/* Card */}
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          flex: 1,
          background: t.card,
          border: `1px solid ${hov ? `${exp.color}44` : t.cardBorder}`,
          borderRadius: 14, padding: "18px 20px",
          transition: "all 0.3s",
          transform: hov ? "translateX(4px)" : "",
          boxShadow: hov ? `0 8px 28px ${exp.color}12` : "",
        }}
      >
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", flexWrap: "wrap", gap: 6,
          marginBottom: 8,
        }}>
          <div>
            <h3 style={{
              fontFamily: "Syne, sans-serif", fontWeight: 700,
              fontSize: 16, color: t.text, margin: 0,
            }}>{exp.role}</h3>
            <p style={{ fontSize: 12.5, color: exp.color, marginTop: 2, margin: 0 }}>
              {exp.org}
            </p>
          </div>
          <span style={{
            fontSize: 11.5, fontFamily: "JetBrains Mono, monospace",
            color: t.muted, background: t.skillBg,
            border: `1px solid ${t.cardBorder}`,
            padding: "3px 11px", borderRadius: 99, flexShrink: 0,
          }}>{exp.period}</span>
        </div>

        <p style={{ fontSize: 13.5, color: t.muted, lineHeight: 1.75, marginBottom: 14 }}>
          {exp.desc}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {exp.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: 11, padding: "3px 10px", borderRadius: 99,
              background: `${exp.color}12`, color: exp.color,
              fontFamily: "DM Sans, sans-serif", fontWeight: 500,
              border: `1px solid ${exp.color}22`,
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface CertBadgeProps {
  title: string;
  icon: string;
  color: string;
  t: Theme;
}

function CertBadge({ title, icon, color, t }: CertBadgeProps) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: 9,
        background: t.card, border: `1px solid ${hov ? `${color}44` : `${color}22`}`,
        borderRadius: 12, padding: "10px 17px",
        flex: "1 1 190px", transition: "transform 0.2s, box-shadow 0.2s",
        transform: hov ? "translateY(-2px)" : "",
        boxShadow: hov ? `0 6px 18px ${color}14` : "",
        cursor: "default",
      }}
    >
      <span style={{ fontSize: 19 }}>{icon}</span>
      <span style={{
        fontSize: 13, color: t.text,
        fontFamily: "DM Sans, sans-serif", fontWeight: 500,
      }}>{title}</span>
    </div>
  );
}
