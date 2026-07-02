import { pt } from "./pt";
import { en } from "./en";

export type Dictionary = typeof pt;
export type Locale = "pt-BR" | "en";
export type NavKey = keyof Dictionary["nav"];
export type ProjectId = keyof Dictionary["projects"]["items"];

export const DEFAULT_LOCALE: Locale = "pt-BR";

export const DICTIONARIES: Record<Locale, Dictionary> = {
  "pt-BR": pt,
  en,
};

export function isLocale(value: string | null): value is Locale {
  return value === "pt-BR" || value === "en";
}

export { pt, en };
