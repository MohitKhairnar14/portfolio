import type {
  Theme, Skill, Project, Education,
  Certificate, Hobby, Experience, NavLink,
} from "../types";

/* ── THEMES ─────────────────────────────────── */
export const darkTheme: Theme = {
  bg: "#05101f",
  surface: "#0a1828",
  card: "#0e2038",
  cardBorder: "rgba(0,200,255,0.12)",
  text: "#ddeeff",
  muted: "#6a9dbf",
  accent: "#00ccff",
  accent2: "#a855f7",
  nav: "rgba(5,16,31,0.93)",
  tag: "rgba(0,200,255,0.1)",
  tagText: "#00ccff",
  skillBg: "#0c1e33",
  divider: "rgba(0,200,255,0.08)",
};

export const lightTheme: Theme = {
  bg: "#f0f6fc",
  surface: "#ffffff",
  card: "#ffffff",
  cardBorder: "rgba(0,90,180,0.13)",
  text: "#112233",
  muted: "#4a6e8a",
  accent: "#005fcc",
  accent2: "#7c3aed",
  nav: "rgba(240,246,252,0.93)",
  tag: "rgba(0,95,204,0.09)",
  tagText: "#005fcc",
  skillBg: "#eaf2fa",
  divider: "rgba(0,90,180,0.08)",
};

/* ── NAV LINKS ───────────────────────────────── */
export const navLinks: NavLink[] = [
  { label: "About",      id: "about"      },
  { label: "Experience", id: "experience" },
  { label: "Projects",   id: "projects"   },
  { label: "Skills",     id: "skills"     },
  { label: "Contact",    id: "contact"    },
];

/* ── SKILLS ──────────────────────────────────── */
export const skills: Skill[] = [
  { name: "DBMS / MySQL",       icon: "🗄️", desc: "Schema design, queries, normalization",  level: 80 },
  { name: "Computer Networks",  icon: "🌐", desc: "TCP/IP, OSI model, protocols",            level: 75 },
  { name: "C Programming",      icon: "⚙️", desc: "Data structures, memory management",     level: 78 },
  { name: "Java / OOP",         icon: "☕", desc: "Object-oriented design & patterns",      level: 72 },
  { name: "Python",             icon: "🐍", desc: "Scripting & automation",                 level: 70 },
  { name: "HTML / CSS",         icon: "🎨", desc: "Responsive web design",                  level: 80 },
];

export const tools: string[] = ["VS Code", "GitHub", "Git", "MySQL Workbench"];

/* ── PROJECTS ────────────────────────────────── */
export const projects: Project[] = [
  {
    title: "QuickFolio",
    semester: "3rd Semester · 2023",
    emoji: "🗂️",
    tagline: "Multi-category digital portfolio builder",
    desc: "A dynamic portfolio platform for three user categories — Business professionals, Teachers, and Students. Each can showcase their profile, share relevant photos, post hiring requirements, and create a personalized digital presence in minutes.",
    tags: ["HTML", "CSS", "JavaScript", "Portfolio Builder", "Multi-Category"],
    color: "#00ccff",
    highlights: [
      "Business, Teacher & Student profiles",
      "Photo gallery per category",
      "Hiring / opportunity listings",
      "Clean UI with smooth animations",
    ],
  },
  {
    title: "Smart Stock Alerts",
    semester: "4th Semester · 2024",
    emoji: "📈",
    tagline: "Real-time stock threshold email alerting",
    desc: "An intelligent stock monitoring system that tracks user-defined price thresholds. When a stock crosses the limit — up or down — an automated email alert fires instantly, so investors never miss a critical price movement.",
    tags: ["Python", "Email Automation", "Stock Market", "Threshold Monitoring"],
    color: "#a855f7",
    highlights: [
      "Custom price threshold setting",
      "Instant email notification",
      "Multi-stock monitoring",
      "Alert history log",
    ],
  },
];

/* ── EXPERIENCE ──────────────────────────────── */
export const experiences: Experience[] = [
  {
    role: "24-Hour Hackathon Participant",
    org: "R.C. Patel Institute of Technology (Intra-College)",
    period: "2023",
    desc: "Competed in an intense 24-hour intra-college hackathon, collaborating with a team to ideate, design, and build a functional prototype under time pressure. Honed rapid prototyping, teamwork, and problem-solving skills.",
    icon: "🏆",
    color: "#a855f7",
    tags: ["Hackathon", "Teamwork", "Rapid Prototyping", "Problem Solving"],
  },
  {
    role: "AWS Cloud Practitioner — Self Learning",
    org: "Amazon Web Services (Online)",
    period: "2024",
    desc: "Completed AWS Certificate Courses covering cloud fundamentals, core services (EC2, S3, Lambda), IAM, and pricing models. Gained practical understanding of cloud infrastructure and deployment concepts.",
    icon: "☁️",
    color: "#ff9900",
    tags: ["AWS", "Cloud", "EC2", "S3", "IAM"],
  },
  {
    role: "Python & Java Certification",
    org: "Online Platforms",
    period: "2023 – 2024",
    desc: "Earned certifications in Python scripting and Java OOP concepts through structured online courses. Applied learnings in course projects and personal coding practice.",
    icon: "🎓",
    color: "#22c55e",
    tags: ["Python", "Java", "OOP", "Certification"],
  },
];

/* ── EDUCATION ───────────────────────────────── */
export const education: Education[] = [
  { label: "SSC",            school: "Jaihind Highschool, Dhule",   score: "90.60%",    icon: "🏫", color: "#22c55e" },
  { label: "HSC",            school: "Mayur College, Dhule",        score: "72.89%",    icon: "📚", color: "#f59e0b" },
  { label: "B.E. (Pursuing)",school: "R.C. Patel I.T., Shirpur",   score: "8.29 CGPA", icon: "🎓", color: "#00ccff" },
];

/* ── CERTIFICATES ────────────────────────────── */
export const certificates: Certificate[] = [
  { title: "C Programming Fundamentals", icon: "⚙️", color: "#00ccff" },
  { title: "OOP Concepts in Java",       icon: "☕", color: "#f59e0b" },
  { title: "Python Certification",       icon: "🐍", color: "#22c55e" },
  { title: "AWS Certificate Courses",    icon: "☁️", color: "#ff9900" },
  { title: "24-Hour Hackathon (Intra)",  icon: "🏆", color: "#a855f7" },
];

/* ── HOBBIES ─────────────────────────────────── */
export const hobbies: Hobby[] = [
  { icon: "🏏", label: "Cricket"  },
  { icon: "⚽", label: "Football" },
  { icon: "🏸", label: "Badminton"},
  { icon: "📖", label: "Reading"  },
  { icon: "♟️", label: "Chess"    },
  { icon: "🎵", label: "Music"    },
  { icon: "🎬", label: "Movies"   },
];

/* ── PROFILE ─────────────────────────────────── */
export const profile = {
  name:       "Mohit Shekhar Khairnar",
  firstName:  "Mohit Shekhar",
  lastName:   "Khairnar",
  role:       "Builder · Problem Solver · CE Student",
  location:   "Dhule, Maharashtra",
  email:      "mohitkhairnar14@gmail.com",
  phone:      "+91 9975281329",
  cgpa:       "8.29",
  year:       "2nd Year",
  branch:     "Computer Engineering",
  college:    "R.C. Patel I.T., Shirpur",
  linkedin:   "https://www.linkedin.com/in/mohit-khairnar-31847b323",
  github:     "https://github.com/MohitKhairnar14",
  codechef:   "https://www.codechef.com/users/rcp_fy_24245",
  bio:        "Passionate CE student at R.C. Patel Institute of Technology, Shirpur. I love exploring technologies, building real-world projects, and growing through collaborative challenges. Open to learning, open to opportunities.",
};
