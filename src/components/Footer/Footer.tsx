import React from 'react';
import type { Theme } from "../../types";
import { profile } from "../../data";
import { scrollTo } from "../../utils";

interface FooterProps {
  theme: Theme;
}

const footerLinks = [
  { label: "About",      id: "about"      },
  { label: "Experience", id: "experience" },
  { label: "Projects",   id: "projects"   },
  { label: "Skills",     id: "skills"     },
  { label: "Contact",    id: "contact"    },
];

export default function Footer({ theme: t }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: `1px solid ${t.cardBorder}`,
      padding: "40px 6% 32px",
      background: t.surface,
    }}>
      <div style={{
        maxWidth: 940, margin: "0 auto",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 24,
      }}>
        {/* Logo */}
        <div
          onClick={() => scrollTo("home")}
          style={{
            fontFamily: "Syne, sans-serif", fontWeight: 800,
            fontSize: 22, color: t.accent,
            letterSpacing: "-0.02em", cursor: "pointer",
          }}
        >
          &lt;MK/&gt;
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", gap: 22, flexWrap: "wrap", justifyContent: "center" }}>
          {footerLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: "none", border: "none",
                cursor: "pointer", fontSize: 13,
                color: t.muted, fontFamily: "DM Sans, sans-serif",
                fontWeight: 500, transition: "color 0.2s", padding: 0,
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLButtonElement).style.color = t.accent)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLButtonElement).style.color = t.muted)
              }
            >
              {label}
            </button>
          ))}
        </div>

        {/* Social icons row */}
        <div style={{ display: "flex", gap: 14 }}>
          {[
            { href: profile.linkedin, emoji: "💼", label: "LinkedIn"  },
            { href: profile.github,   emoji: "🐙", label: "GitHub"    },
            { href: profile.codechef, emoji: "👨‍🍳", label: "CodeChef"  },
          ].map(({ href, emoji, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              style={{
                width: 38, height: 38, borderRadius: "50%",
                background: t.skillBg, border: `1px solid ${t.cardBorder}`,
                display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 17,
                textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.12)";
                e.currentTarget.style.boxShadow = `0 4px 16px ${t.accent}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {emoji}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          width: "100%", height: 1,
          background: `linear-gradient(90deg, transparent, ${t.accent}18, transparent)`,
        }} />

        {/* Copyright */}
        <div style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 4,
        }}>
          <p style={{
            fontSize: 12.5, color: t.muted,
            fontFamily: "JetBrains Mono, monospace", textAlign: "center",
          }}>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p style={{
            fontSize: 11.5, color: t.muted, opacity: 0.6,
            fontFamily: "DM Sans, sans-serif", textAlign: "center",
          }}>
            R.C. Patel Institute of Technology · {profile.branch} · Shirpur, MH
          </p>
        </div>
      </div>
    </footer>
  );
}
