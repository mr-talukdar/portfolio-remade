export interface Experiment {
  title: string;
  description: string;
  category: string;
  href: string;
}

export const experiments: Experiment[] = [
  {
    title: "AI dev workflow experiments",
    description:
      "Exploring next-generation LLM integration within the IDE. Researching autonomous refactoring patterns and contextual code generation models.",
    category: "AI Workflow",
    href: "#",
  },
  {
    title: "Agent orchestration prototypes",
    description:
      "Multi-agent systems designed for complex task decomposition and execution. Benchmarking latency in distributed reasoning loops.",
    category: "AI Workflow",
    href: "#",
  },
  {
    title: "UI motion experiments",
    description:
      "Pushing Framer Motion and WebGL to create physics-based interface responses. High-fidelity prototypes for sensory feedback loops.",
    category: "UI Motion",
    href: "#",
  },
  {
    title: "Developer tooling utilities",
    description:
      "Streamlining local development cycles and CI/CD orchestration. Performance-first CLI utilities built with Rust and Go.",
    category: "Dev Tools",
    href: "#",
  },
];

export const experimentCategories = [
  "All Research",
  "AI Workflow",
  "UI Motion",
  "Dev Tools",
  "WebGL",
] as const;
