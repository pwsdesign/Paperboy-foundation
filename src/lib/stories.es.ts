import type { Story } from "./stories.en";

export const STORIES_ES: Story[] = [
  {
    slug: "il-maestro-pizzaiolo",
    title: "Il Maestro Pizzaiolo",
    subtitle: "Sin menú. Una mesa. Una noche que se siente como Italia.",
    tag: "Comida / Experiencia",
    location: "Little Haiti, Miami",
    issue: "Edición 001",
    date: "Enero 2026",
    minutes: 6,
    coverQuote: "No hay menú. Solo memoria.",
    sections: [
      {
        heading: "La dinámica",
        body: [
          "En el corazón de Little Haiti, Il Maestro Pizzaiolo no es un restaurante típico. Es una mesa, una cocina y un chef cocinando como recuerda su hogar.",
          "Tú no pides. Tú llegas. Tú confías. Y la noche se despliega al ritmo de la conversación.",
        ],
      },
      {
        heading: "Por qué importa",
        body: [
          "Paperboy existe para bajarle el ritmo a la vida. Il Maestro lo logra sin decirlo.",
          "La comida es un ritual. El silencio entre bocados se siente como el punto central.",
        ],
      },
    ],
  },
  {
    slug: "peek-a-treat",
    title: "Peek-a-Treat",
    subtitle: "Un camión de helados que convierte desconocidos en clientes fieles.",
    tag: "Negocio local / Comunidad",
    location: "Upper Buena Vista, Miami",
    issue: "Edición 001",
    date: "Enero 2026",
    minutes: 5,
    coverQuote: "La alegría es un modelo de negocio.",
    sections: [
      {
        heading: "Un porche con ruedas",
        body: [
          "Lo escuchas antes de verlo. Luego ves el camión, y todo el lugar cambia.",
          "Algunos vienen por helado. La mayoría se queda por la sensación.",
        ],
      },
    ],
  },
  {
    slug: "daniella-rincon",
    title: "Daniella Rincon",
    subtitle: "Cantante, compositora. Una voz que dice la verdad en voz baja.",
    tag: "Artista / Música",
    location: "Miami",
    issue: "Edición 001",
    date: "Enero 2026",
    minutes: 7,
    coverQuote: "Algunas canciones son privadas… hasta que dejan de serlo.",
    sections: [
      {
        heading: "Escribir en público",
        body: [
          "Hay una diferencia entre actuar y revelar. Daniella sabe dónde está esa línea y cuándo cruzarla.",
          "Su trabajo se siente como un diario que aprendió a cantar.",
        ],
      },
    ],
  },
];

export function getStoryES(slug: string) {
  return STORIES_ES.find((s) => s.slug === slug);
}