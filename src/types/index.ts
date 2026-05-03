export interface Theme {
  bg: string;
  surface: string;
  card: string;
  cardBorder: string;
  text: string;
  muted: string;
  accent: string;
  accent2: string;
  nav: string;
  tag: string;
  tagText: string;
  skillBg: string;
  divider: string;
}

export interface Skill {
  name: string;
  icon: string;
  desc: string;
  level: number;
}

export interface Project {
  title: string;
  semester: string;
  emoji: string;
  tagline: string;
  desc: string;
  tags: string[];
  color: string;
  highlights: string[];
}

export interface Education {
  label: string;
  school: string;
  score: string;
  icon: string;
  color: string;
}

export interface Certificate {
  title: string;
  icon: string;
  color: string;
}

export interface Hobby {
  icon: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  sub: string;
  color: string;
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  desc: string;
  icon: string;
  color: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  id: string;
}
