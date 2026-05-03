import React from 'react';
import type { Theme } from "../../types";
import { navLinks } from "../../data";
import { useScrolled } from "../../hooks/useScrolled";
import { scrollTo } from "../../utils";

interface NavbarProps {
  isDark: boolean;
  theme: Theme;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, theme: t, toggleTheme }: NavbarProps) {
  const scrolled = useScrolled(40);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "12px 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? t.nav : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? `1px solid ${t.cardBorder}` : "none",
        transition: "all 0.4s",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: "Syne, sans-serif",
          fontWeight: 800,
          fontSize: 19,
          color: t.accent,
          letterSpacing: "-0.02em",
          cursor: "pointer",
        }}
        onClick={() => scrollTo("home")}
      >
        &lt;MK/&gt;
      </div>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {navLinks.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              color: t.muted,
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 500,
              transition: "color 0.2s",
              padding: 0,
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

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          style={{
            background: t.skillBg,
            border: `1px solid ${t.cardBorder}`,
            borderRadius: 99,
            padding: "5px 13px",
            cursor: "pointer",
            fontSize: 14,
            color: t.text,
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontFamily: "DM Sans, sans-serif",
            transition: "all 0.3s",
          }}
        >
          {isDark ? "☀️" : "🌙"}
          <span style={{ fontSize: 11, color: t.muted }}>
            {isDark ? "Light" : "Dark"}
          </span>
        </button>
      </div>
    </nav>
  );
}
