export const RESUME_URL =
  "https://docs.google.com/document/d/1EKdgG1-veJDP33cNjuTbzTGiUEOIyppvmqFRBxR87EE/edit?usp=sharing";

export const nav = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "MongoDB", "Apache Kafka"],
  },
  {
    title: "Tooling & Infra",
    items: ["AWS", "Grafana", "Sentry", "Playwright"],
  },
];

export const experience = [
  {
    company: "Maximor AI",
    role: "Founding Fullstack Engineer",
    dates: "Aug 2025 — Present",
    blurb:
      "Building from the ground up for financial controls monitoring and period close automation, across the frontend in Next.js and TypeScript and the systems behind it.",
  },
  {
    company: "BitGo",
    role: "Fullstack Engineer",
    dates: "Sep 2024 — Jun 2025",
    blurb:
      "Built and maintained BitGo's frontend architecture for seamless integration and scalability, using Next.js and TypeScript.",
  },
  {
    company: "Bureau.id",
    role: "Frontend Engineer",
    dates: "Sep 2023 — Aug 2024",
    blurb:
      "Built fraud prevention SDKs and developer-facing tooling for identity and risk products.",
  },
  {
    company: "Mutual Mobile",
    role: "Frontend Developer",
    dates: "Jun 2021 — Aug 2023",
    blurb:
      "Built front-end interfaces for complex web applications and worked closely with designers and backend engineers to ship them.",
  },
  {
    company: "AdUnit Media Network",
    role: "Junior Web Developer",
    dates: "May 2020 — May 2021",
    blurb:
      "Created and deployed scalable websites, handled technical SEO, and kept things running with general maintenance.",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/PranavKastury828", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pranavkastury", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com/PranavKastury", icon: "twitter" },
  { label: "YouTube", href: "https://www.youtube.com/@Grimmr57", icon: "youtube" },
] as const;
