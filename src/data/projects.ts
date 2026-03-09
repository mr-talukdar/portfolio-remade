export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  href: string;
}

export const projects: Project[] = [
  {
    slug: "helix",
    title: "HeliX",
    description:
      "AI gym copilot that tracks workouts and adapts training programs in real-time. Built to optimize human physiology through data.",
    tags: ["AI/ML", "Computer Vision", "React Native"],
    featured: true,
    href: "/projects/helix",
  },
  {
    slug: "ihlad-website",
    title: "IHLAD Website",
    description:
      "Enterprise Next.js architecture integrated with a headless CMS for high-performance delivery.",
    tags: ["Next.js", "CMS", "Enterprise"],
    featured: false,
    href: "/projects",
  },
  {
    slug: "crypto-wallet-generator",
    title: "Crypto Wallet Generator",
    description:
      "Deterministic wallet generation engine supporting Ethereum and Solana ecosystems.",
    tags: ["Web3", "Cryptography", "TypeScript"],
    featured: false,
    href: "/projects",
  },
  {
    slug: "frontend-system-experiments",
    title: "Frontend System Experiments",
    description:
      "A collection of open-source UI primitives and design system explorations.",
    tags: ["Design Systems", "Open Source", "React"],
    featured: false,
    href: "/projects",
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const selectedProjects = projects.filter((p) => !p.featured);
