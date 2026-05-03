import React from 'react';
import type { Theme } from "../../types";
import { profile } from "../../data";
import { scrollTo } from "../../utils";
import HeroIllustration from "./HeroIllustration";

interface HeroProps {
  theme: Theme;
}

export default function Hero({ theme: t }: HeroProps) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "130px 6% 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: 360, height: 360, borderRadius: "50%",
        background: `radial-gradient(circle,${t.accent}0b 0%,transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "12%", right: "4%",
        width: 290, height: 290, borderRadius: "50%",
        background: `radial-gradient(circle,${t.accent2}0b 0%,transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* Animated illustration */}
      <div className="fu" style={{ marginBottom: 20, animation: "float 4s ease-in-out infinite" }}>
        <HeroIllustration theme={t} />
      </div>

      {/* Status badge */}
      <div className="fu" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: t.tag, border: `1px solid ${t.accent}24`,
        borderRadius: 99, padding: "5px 16px", marginBottom: 16,
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: "50%",
          background: "#22c55e", display: "inline-block",
          animation: "pulse 2s infinite",
        }} />
        <span style={{ fontSize: 12, color: t.tagText, fontFamily: "JetBrains Mono, monospace" }}>
          Computer Engineering · 2nd Year · R.C. Patel I.T.
        </span>
      </div>

      {/* Name */}
      <h1 className="fu2" style={{
        fontFamily: "Syne, sans-serif", fontWeight: 800,
        fontSize: "clamp(38px, 6vw, 70px)",
        lineHeight: 1.08, letterSpacing: "-0.03em",
        color: t.text, marginBottom: 8,
      }}>
        {profile.firstName}
        <br />
        <span style={{
          background: `linear-gradient(90deg, ${t.accent}, ${t.accent2})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          {profile.lastName}
        </span>
      </h1>

      {/* Role */}
      <p className="fu2" style={{
        fontSize: "clamp(14px, 2.2vw, 18px)",
        color: t.muted, marginBottom: 16,
        fontFamily: "DM Sans, sans-serif", fontWeight: 300,
      }}>
        Builder &nbsp;·&nbsp; Problem Solver &nbsp;·&nbsp; CE Student &nbsp;·&nbsp; Dhule, MH
      </p>

      {/* Bio */}
      <p className="fu3" style={{
        maxWidth: 540, fontSize: 15,
        color: t.muted, lineHeight: 1.85, marginBottom: 30,
      }}>
        Passionate CE student at{" "}
        <strong style={{ color: t.text, fontWeight: 500 }}>
          R.C. Patel Institute of Technology
        </strong>
        . I love exploring technologies, building real projects, and growing through collaborative challenges.
      </p>

      {/* Stat chips */}
      <div className="fu3" style={{
        display: "flex", gap: 13, marginBottom: 30,
        flexWrap: "wrap", justifyContent: "center",
      }}>
        {([
          [profile.cgpa, "CGPA"],
          ["2", "Projects"],
          [profile.year.split(" ")[0], "Year"],
          ["5+", "Certifications"],
        ] as [string, string][]).map(([val, lbl]) => (
          <div key={lbl} style={{
            textAlign: "center",
            background: t.skillBg,
            border: `1px solid ${t.cardBorder}`,
            borderRadius: 12, padding: "12px 20px",
          }}>
            <div style={{
              fontFamily: "Syne, sans-serif", fontWeight: 800,
              fontSize: 20, color: t.accent,
            }}>{val}</div>
            <div style={{
              fontSize: 10, color: t.muted,
              fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.07em",
            }}>{lbl}</div>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="fu4" style={{ display: "flex", gap: 12 }}>
        <button
          onClick={() => scrollTo("projects")}
          style={{
            padding: "12px 26px", borderRadius: 99,
            background: t.accent, color: "#001122",
            border: "none", cursor: "pointer",
            fontSize: 14, fontWeight: 700,
            fontFamily: "Syne, sans-serif",
            transition: "opacity 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "1";
            (e.currentTarget as HTMLButtonElement).style.transform = "";
          }}
        >
          View Projects
        </button>
        <button
          onClick={() => scrollTo("contact")}
          style={{
            padding: "12px 26px", borderRadius: 99,
            background: "transparent", color: t.text,
            border: `1.5px solid ${t.cardBorder}`,
            cursor: "pointer", fontSize: 14,
            fontFamily: "Syne, sans-serif",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.borderColor = t.accent)
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.borderColor = t.cardBorder)
          }
        >
          Get in Touch
        </button>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: 26, left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 5, opacity: 0.33,
      }}>
        <div style={{
          width: 1, height: 34, background: t.accent,
          animation: "pulse 2s infinite",
        }} />
        <span style={{
          fontSize: 9, fontFamily: "JetBrains Mono, monospace",
          color: t.muted, letterSpacing: "0.14em",
        }}>SCROLL</span>
      </div>
    </section>
  );
}
