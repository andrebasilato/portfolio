export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  href: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "twitter";
}

export interface NavItem {
  label: string;
  href: string;
}
