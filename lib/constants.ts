import type { ProjectMeta, SocialLink, NavItem } from "@/types";

export const SITE_CONFIG = {
  name: "Andre Basilato",
  title: "Full-Stack Engineer & Tech Lead",
  url: "https://andrebasilato.com",
  whatsapp: "https://wa.me/5531973599250",
  linkedin: "https://www.linkedin.com/in/andre-basilato/",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
];

/**
 * Locale-neutral project metadata. Titles and descriptions live in the
 * i18n dictionaries (lib/i18n), keyed by `id`.
 */
export const PROJECT_META: ProjectMeta[] = [
  {
    id: "01",
    tags: ["Fastify", "TypeScript", "Zod", "Asaas"],
    gradient: "from-emerald-900 via-green-800 to-lime-900",
  },
  {
    id: "02",
    tags: ["Node.js", "CNAB", "RabbitMQ", "Banking"],
    gradient: "from-green-900 via-emerald-800 to-teal-900",
  },
  {
    id: "03",
    tags: ["PHP", "SOAP", "MariaDB", "Gov"],
    gradient: "from-teal-900 via-emerald-900 to-green-900",
  },
  {
    id: "04",
    tags: ["Next.js", "Supabase", "RLS", "PostgreSQL"],
    gradient: "from-lime-900 via-green-900 to-emerald-900",
  },
  {
    id: "05",
    tags: ["React Native", "Expo", "EAS", "OTA"],
    gradient: "from-emerald-900 via-teal-900 to-green-900",
  },
  {
    id: "06",
    tags: ["AI Agents", "Claude Code", "Automation", "Knowledge Base"],
    gradient: "from-green-900 via-lime-900 to-emerald-900",
  },
  {
    id: "07",
    tags: ["PHP", "MariaDB", "Profiling", "N+1"],
    gradient: "from-teal-900 via-green-800 to-emerald-900",
  },
  {
    id: "08",
    tags: ["RLS", "LGPD", "AuthZ", "Pentest"],
    gradient: "from-lime-900 via-emerald-900 to-teal-900",
  },
];

export const SKILLS: string[] = [
  "TypeScript",
  "Node.js",
  "NestJS",
  "Fastify",
  "Next.js",
  "React",
  "React Native",
  "Expo",
  "PHP",
  "Laravel",
  "PostgreSQL",
  "Supabase",
  "MariaDB",
  "Redis",
  "RabbitMQ",
  "Docker",
  "CI/CD",
  "REST/OpenAPI",
  "RLS",
  "LGPD",
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andre-basilato/",
    icon: "linkedin",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5531973599250",
    icon: "whatsapp",
  },
];
