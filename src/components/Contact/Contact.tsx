import { useState } from "react";
import type { Theme } from "../../types";
import { profile } from "../../data";
import SectionLabel from "../shared/SectionLabel";

interface ContactProps {
  theme: Theme;
  isDark: boolean;
}

interface SocialCardProps {
  href: string;
  iconEl: JSX.Element;
  label: string;
  sub: string;
  color: string;
  t: Theme;
}

function SocialCard({ href, iconEl, label, sub, color, t }: SocialCardProps) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: 13,
        background: t.card, border: `1.5px solid ${hov ? `${color}55` : t.cardBorder}`,
        borderRadius: 14, padding: "15px 21px", textDecoration: "none",
        transition: "all 0.3s", transform: hov ? "translateY(-3px)" : "",
        boxShadow: hov ? `0 12px 28px ${color}18` : "", flex: "1 1 160px",
      }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}16`, border: `1px solid ${color}26`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {iconEl}
      </div>
      <div>
        <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 13.5, color: t.text }}>{label}</div>
        <div style={{ fontSize: 11.5, color: t.muted, fontFamily: "DM Sans, sans-serif" }}>{sub}</div>
      </div>
    </a>
  );
}

export default function Contact({ theme: t, isDark }: ContactProps) {
  const ghColor = isDark ? "#c9d8e8" : "#1a1a2e";
  return (
    <section id="contact" style={{ padding: "90px 6% 80px", maxWidth: 940, margin: "0 auto", textAlign: "center" }}>
      <SectionLabel label="FIND ME" theme={t} align="center" />
      <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 32, color: t.text, marginBottom: 10, letterSpacing: "-0.02em" }}>Let's Connect</h2>
      <p style={{ color: t.muted, fontSize: 14.5, maxWidth: 440, margin: "0 auto 28px", lineHeight: 1.85 }}>
        Open to opportunities, collaborations, and tech conversations.
      </p>
      <a href={`mailto:${profile.email}`}
        style={{ display: "inline-flex", alignItems: "center", gap: 10, background: t.card, border: `1px solid ${t.cardBorder}`, borderRadius: 13, padding: "13px 24px", marginBottom: 26, textDecoration: "none", transition: "box-shadow 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 8px 24px ${t.accent}18`)}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}>
        <span style={{ fontSize: 18 }}>✉️</span>
        <span style={{ color: t.accent, fontFamily: "JetBrains Mono, monospace", fontSize: 13.5, fontWeight: 500 }}>{profile.email}</span>
      </a>
      <div style={{ display: "flex", gap: 13, justifyContent: "center", flexWrap: "wrap", marginBottom: 18 }}>
        <SocialCard href={profile.linkedin} label="LinkedIn" sub="Connect professionally" color="#0077b5" t={t}
          iconEl={<svg width="19" height="19" viewBox="0 0 24 24" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>} />
        <SocialCard href={profile.github} label="GitHub" sub="My repositories" color={ghColor} t={t}
          iconEl={<svg width="19" height="19" viewBox="0 0 24 24" fill={ghColor}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>} />
        <SocialCard href={profile.codechef} label="CodeChef" sub="Competitive coding" color="#5B4638" t={t}
          iconEl={<span style={{ fontSize: 18 }}>👨‍🍳</span>} />
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: t.skillBg, border: `1px solid ${t.cardBorder}`, borderRadius: 12, padding: "10px 20px" }}>
        <span style={{ fontSize: 14 }}>📞</span>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, color: t.muted }}>{profile.phone}</span>
      </div>
    </section>
  );
}
