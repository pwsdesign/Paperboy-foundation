import { en } from "./en";
import { es } from "./es";

export type Lang = "en" | "es";

// The shape of one dictionary (based on your en.ts / es.ts objects)
export type Dictionary = typeof en;

const dictionaries = { en, es } as const;

export async function getDictionary(lang: Lang): Promise<Dictionary> {
  return dictionaries[lang];
}