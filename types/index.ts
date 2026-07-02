import type { NavKey, ProjectId } from "@/lib/i18n";

/** Locale-neutral project data; title/description live in the i18n dictionaries. */
export interface ProjectMeta {
  id: ProjectId;
  tags: string[];
  gradient: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "whatsapp";
}

/** Nav labels live in the i18n dictionaries, keyed by `key`. */
export interface NavItem {
  key: NavKey;
  href: string;
}
