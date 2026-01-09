export type Story = {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  location?: string;
  issue: string;
  date?: string;
  minutes?: number;
  coverQuote?: string;
  sections: Array<{ heading?: string; body: string[] }>;
};

export const STORIES_EN: Story[] = [
  {
    slug: "il-maestro-pizzaiolo",
    title: "Il Maestro Pizzaiolo",
    subtitle: "No menu. One table. A night that feels like Italy.",
    tag: "Food / Experience",
    location: "Little Haiti, Miami",
    issue: "Issue 001",
    date: "January 2026",
    minutes: 6,
    coverQuote: "There is no menu. Only memory.",
    sections: [
      {
        heading: "The setup",
        body: [
          "In the heart of Little Haiti, Il Maestro Pizzaiolo isn’t your typical restaurant. It’s one table, one kitchen, and one chef cooking the way he remembers home.",
          "You don’t order. You arrive. You trust. And the night unfolds at the pace of conversation.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "Paperboy exists to slow us down. Il Maestro does that without ever saying the words.",
          "The food is a ritual. The silence between bites feels like the point.",
        ],
      },
    ],
  },
  {
    slug: "peek-a-treat",
    title: "Peek-a-Treat",
    subtitle: "An ice cream truck that turns strangers into regulars.",
    tag: "Small Business / Community",
    location: "Upper Buena Vista, Miami",
    issue: "Issue 001",
    date: "January 2026",
    minutes: 5,
    coverQuote: "Joy is a business model.",
    sections: [
      {
        heading: "A moving front porch",
        body: [
          "You hear it before you see it. Then you see the truck, and the whole place shifts.",
          "Some people come for ice cream. Most people stay for the feeling.",
        ],
      },
    ],
  },
  {
    slug: "daniella-rincon",
    title: "Daniella Rincon",
    subtitle: "Singer, songwriter. A voice that tells the truth softly.",
    tag: "Artist / Music",
    location: "Miami",
    issue: "Issue 001",
    date: "January 2026",
    minutes: 7,
    coverQuote: "Some songs are private until they aren’t.",
    sections: [
      {
        heading: "Writing in public",
        body: [
          "There’s a difference between performing and revealing. Daniella knows where that line is, and when to cross it.",
          "Her work feels like a diary that learned how to sing.",
        ],
      },
    ],
  },
];

export function getStoryEN(slug: string) {
  return STORIES_EN.find((s) => s.slug === slug);
}