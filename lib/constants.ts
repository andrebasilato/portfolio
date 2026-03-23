import type { Project, Experience, SocialLink, NavItem } from "@/types";

export const SITE_CONFIG = {
  name: "Andre Basilato",
  title: "Full Stack Developer",
  description:
    "Full Stack Developer crafting performant, elegant digital experiences with modern web technologies.",
  url: "https://andrebasilato.com",
  email: "hello@andrebasilato.com",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Apex Platform",
    description:
      "A full-stack SaaS platform built with Next.js, featuring real-time collaboration, advanced analytics dashboards, and seamless third-party integrations.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    gradient: "from-emerald-900 via-green-800 to-lime-900",
    href: "#",
  },
  {
    id: "02",
    title: "Pulse Analytics",
    description:
      "Real-time data visualization engine processing millions of events per second with interactive charts and customizable reporting.",
    tags: ["React", "D3.js", "Node.js", "WebSocket"],
    gradient: "from-green-900 via-emerald-800 to-teal-900",
    href: "#",
  },
  {
    id: "03",
    title: "Synthwave UI",
    description:
      "An open-source component library with 50+ accessible, animated components designed for modern React applications.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Storybook"],
    gradient: "from-lime-900 via-green-900 to-emerald-900",
    href: "#",
  },
  {
    id: "04",
    title: "FlowState",
    description:
      "Developer productivity tool featuring AI-powered code reviews, automated workflow orchestration, and team performance insights.",
    tags: ["TypeScript", "Python", "OpenAI", "Docker"],
    gradient: "from-teal-900 via-emerald-900 to-green-900",
    href: "#",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "01",
    company: "TechCorp Inc.",
    role: "Senior Full Stack Developer",
    period: "2023 - Present",
    description:
      "Leading development of microservices architecture serving 2M+ users. Driving frontend modernization from legacy systems to Next.js, improving performance by 60%.",
  },
  {
    id: "02",
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description:
      "Built and scaled the core product from MVP to production, implementing CI/CD pipelines, database optimization, and real-time features.",
  },
  {
    id: "03",
    company: "Digital Agency Co.",
    role: "Frontend Developer",
    period: "2019 - 2021",
    description:
      "Developed high-performance web applications for enterprise clients, focusing on accessibility, animation, and responsive design.",
  },
  {
    id: "04",
    company: "Freelance",
    role: "Web Developer",
    period: "2017 - 2019",
    description:
      "Delivered 20+ projects for startups and small businesses, specializing in React-based SPAs and headless CMS implementations.",
  },
];

export const SKILLS: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "GraphQL",
  "REST APIs",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "CI/CD",
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/andrebasilato",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/andrebasilato",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:hello@andrebasilato.com",
    icon: "email",
  },
];
