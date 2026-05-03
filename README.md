# Mohit Khairnar — Portfolio

A fully typed React + TypeScript portfolio with dark/light theme, custom SVG illustrations, scroll-triggered animations, and a clean component architecture.

---

## 📁 Project Structure

```
portfolio/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── src/
    ├── main.tsx                   # React entry point
    ├── App.tsx                    # Root: composes all sections
    │
    ├── types/
    │   └── index.ts               # All TypeScript interfaces & types
    │
    ├── data/
    │   └── index.ts               # All data: profile, skills, projects, etc.
    │
    ├── hooks/
    │   ├── useTheme.ts            # Dark/light theme toggle
    │   ├── useScrolled.ts         # Navbar scroll detection
    │   └── useInView.ts           # IntersectionObserver for animations
    │
    ├── utils/
    │   └── index.ts               # scrollTo(), hexAlpha() helpers
    │
    ├── styles/
    │   └── global.css             # Fonts, keyframes, utility classes
    │
    └── components/
        ├── Navbar/
        │   └── Navbar.tsx         # Fixed top nav with theme toggle
        │
        ├── Hero/
        │   ├── Hero.tsx           # Landing section
        │   └── HeroIllustration.tsx  # Animated SVG orbit graphic
        │
        ├── About/
        │   └── About.tsx          # Bio, info cards, skills ring SVG
        │
        ├── Experience/
        │   └── Experience.tsx     # Hackathon, certs, education timeline
        │
        ├── Projects/
        │   └── Projects.tsx       # QuickFolio & Smart Stock Alerts
        │
        ├── Skills/
        │   └── Skills.tsx         # Animated progress bars + tools row
        │
        ├── Contact/
        │   └── Contact.tsx        # Email, LinkedIn, GitHub, CodeChef
        │
        ├── Footer/
        │   └── Footer.tsx         # Nav links, socials, copyright
        │
        └── shared/
            ├── SectionLabel.tsx   # Reusable section heading with lines
            └── Divider.tsx        # Gradient section separator
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ✨ Features

- **Dark / Light theme** — toggle in the navbar, persisted in state
- **Animated SVG illustrations** — hero orbit, QuickFolio cards, stock chart
- **Scroll-triggered skill bars** — progress fills on IntersectionObserver
- **Typed throughout** — every prop, data structure, and hook is typed
- **Custom hooks** — `useTheme`, `useScrolled`, `useInView`
- **Clean data layer** — all content lives in `src/data/index.ts`
- **Sections**: Hero · About · Experience · Projects · Skills · Contact · Footer

---

## 🛠 Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Inline styles** (no CSS-in-JS library needed)
- **SVG** for all illustrations (no external image dependencies)
- **Google Fonts**: Syne, DM Sans, JetBrains Mono

---

## 📬 Contact

**Mohit Shekhar Khairnar**  
mohitkhairnar14@gmail.com  
[LinkedIn](https://www.linkedin.com/in/mohit-khairnar-31847b323) · [GitHub](https://github.com/MohitKhairnar14) · [CodeChef](https://www.codechef.com/users/rcp_fy_24245)
