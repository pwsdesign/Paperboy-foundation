import { en } from "./en";
import { es } from "./es";

export type Lang = "en" | "es";

export function getDictionary(lang: Lang) {
  return lang === "es" ? es : en;
}