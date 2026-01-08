import { en } from "./en";
import { es } from "./es";

export type Lang = "en" | "es";
export type Dictionary = typeof en;

const DICTS: Record<Lang, Dictionary> = { en, es };

export async function getDictionary(lang: string): Promise<Dictionary> {
  const key = lang === "es" ? "es" : "en";
  return DICTS[key];
}