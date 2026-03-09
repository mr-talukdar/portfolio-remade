import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProjectCard } from "@/components/home/FeaturedProjectCard";
import { ProjectCard } from "@/components/home/ProjectCard";
import { PhilosophyCard } from "@/components/home/PhilosophyCard";
import { ArticleRow } from "@/components/home/ArticleRow";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { featuredProject, selectedProjects } from "@/data/projects";
import { articles } from "@/data/writing";

const philosophyItems = [
  {
    icon: "🤖",
    title: "AI Agent Orchestration",
    description:
      "Designing multi-agent systems that solve complex, non-deterministic tasks.",
  },
  {
    icon: "🧠",
    title: "AI-Native Software Design",
    description:
      "Moving beyond chatbots to interfaces that understand intent and context.",
  },
  {
    icon: "💪",
    title: "Fitness & Human Performance",
    description:
      "Leveraging data to optimize the most important machine we own.",
  },
  {
    icon: "⚙️",
    title: "Developer Tooling",
    description:
      "Building the abstractions that make building faster and more reliable.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Featured Project */}
      <SectionContainer className="py-16">
        <AnimatedSection>
          <FeaturedProjectCard project={featuredProject} />
        </AnimatedSection>
      </SectionContainer>

      {/* Selected Projects */}
      <SectionContainer className="py-16">
        <AnimatedSection>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-text-primary">
            Selected Projects
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {selectedProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </SectionContainer>

      {/* Builder Philosophy */}
      <SectionContainer className="py-16">
        <AnimatedSection>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-text-primary">
            Builder Philosophy
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {philosophyItems.map((item, i) => (
            <PhilosophyCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </SectionContainer>

      {/* Writing */}
      <SectionContainer className="py-16">
        <AnimatedSection>
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary">
              Writing
            </h2>
            <Link
              href="/writing"
              className="text-sm text-text-secondary transition-colors hover:text-accent"
            >
              View all posts →
            </Link>
          </div>
        </AnimatedSection>
        <p className="mb-6 text-text-secondary">
          Thoughts on technology, systems, and performance.
        </p>
        <div>
          {articles.map((article, i) => (
            <ArticleRow key={article.slug} article={article} index={i} />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
