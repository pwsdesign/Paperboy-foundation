import en from "./en";
import es from "./es";

export type Lang = "en" | "es";
export type Dictionary = typeof en;

export async function getDictionary(lang: Lang): Promise<Dictionary> {
  return lang === "es" ? (es as Dictionary) : (en as Dictionary);
}

export { en, es };