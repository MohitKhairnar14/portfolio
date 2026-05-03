import React from 'react';
 import './styles/global.css'

// Hooks
import { useTheme } from "./hooks/useTheme";

// Components
import Navbar     from "./components/Navbar/Navbar";
import Hero       from "./components/Hero/Hero";
import About      from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects   from "./components/Projects/Projects";
import Skills     from "./components/Skills/Skills";
import Contact    from "./components/Contact/Contact";
import Footer     from "./components/Footer/Footer";
import Divider    from "./components/shared/Divider";

export default function App() {
  const { isDark, theme, toggleTheme } = useTheme();

  return (
    <div style={{
      background: theme.bg,
      color: theme.text,
      fontFamily: "DM Sans, sans-serif",
      minHeight: "100vh",
      transition: "background 0.4s, color 0.4s",
    }}>
      {/* Fixed top navigation */}
      <Navbar isDark={isDark} theme={theme} toggleTheme={toggleTheme} />

      {/* Page sections */}
      <main>
        <Hero       theme={theme} />
        <Divider    theme={theme} />
        <About      theme={theme} />
        <Divider    theme={theme} />
        <Experience theme={theme} />
        <Divider    theme={theme} />
        <Projects   theme={theme} />
        <Divider    theme={theme} />
        <Skills     theme={theme} />
        <Divider    theme={theme} />
        <Contact    theme={theme} isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}

