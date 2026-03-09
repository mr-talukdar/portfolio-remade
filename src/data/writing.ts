export interface Article {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
}

export const articles: Article[] = [
  {
    slug: "antigravity-future-software",
    title: "Antigravity and the Future of Software Development",
    date: "Nov 2023",
    readTime: "12 min read",
    description:
      "Exploring post-silicon computing metaphors and the elimination of traditional latency bottlenecks in distributed systems.",
  },
  {
    slug: "why-gym-apps-broken",
    title: "Why Most Gym Apps Are Broken",
    date: "Oct 2023",
    readTime: "8 min read",
    description:
      "A deep dive into why fitness applications fail to deliver real results and what needs to change.",
  },
  {
    slug: "building-ai-gym-copilot",
    title: "Building an AI Gym Copilot",
    date: "Sep 2023",
    readTime: "10 min read",
    description:
      "The technical journey of building HeliX — from concept to computer vision-powered training assistant.",
  },
];
