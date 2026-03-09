import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { articles } from "@/data/writing";

// Article content stored as a simple map for now
const articleContent: Record<string, { body: string }> = {
  "antigravity-future-software": {
    body: `As we venture further into the realm of post-silicon computing, the metaphors we use to describe software architecture are beginning to shift. Antigravity, in this context, refers to the elimination of traditional latency bottlenecks that have weighted down distributed systems for decades. We are moving toward a state where the "weight" of data and the "distance" of processing become negligible.

## The Core Concepts of Computational Gravity

Traditional cloud architecture treats the data center as a massive gravitational well. Data must be hauled into these wells for processing, creating significant egress costs and latency. Antigravity systems flip this model, distributing processing logic as a weightless overlay that migrates to where the data naturally resides.

\`\`\`typescript
import { AntigravityKernel } from '@ag-core/v2';

// Initialize the zero-latency transport layer
const mesh = new AntigravityKernel({
  zeroPoint: true,
  distributeMode: 'quantum-entanglement'
});

await mesh.deploy(async (node) => {
  // Logic here executes with local-first priority
  const state = await node.captureLocalState();
  return state.optimize();
});
\`\`\`

### Redefining Data Locality

Traditional cloud architecture treats the data center as a massive gravitational well. Data must be hauled into these wells for processing, creating significant egress costs and latency. Antigravity systems flip this model, distributing processing logic as a weightless overlay that migrates to where the data naturally resides.

## Future Implications

When we remove the gravity of traditional infrastructure, we unlock new paradigms like Ephemeral Compute Clusters and Persistent Global Memory. The software developer of 2030 will not think in terms of servers or regions, but in terms of intent and availability.

#### Zero-Latency Sync

Synchronization happens at the edge of the network, before the user even realizes an action occurred.

#### Decentralized Mesh

A global network of peer-nodes that eliminates single points of failure and reduces hop counts.`,
  },
  "why-gym-apps-broken": {
    body: `Most gym applications fall into the same trap: they treat exercise as a simple input-output system. Track your reps, log your sets, and somehow you'll magically progress. But human physiology doesn't work that way.

## The Fundamental Problem

The fitness app market is worth billions, yet the vast majority of users abandon their apps within the first month. Why? Because these apps fail to account for the complexity of the human body.

### One-Size-Fits-All Programming

Every body is different. Your recovery capacity, hormonal profile, sleep quality, and stress levels all impact how you should train on any given day. Yet most apps give everyone the same cookie-cutter program.

### Data Without Insight

Modern wearables can track everything from heart rate variability to blood oxygen levels. But data without context is just noise. Users are drowning in numbers without understanding what they mean for their training.

## What Needs to Change

The future of fitness technology lies in adaptive, AI-driven systems that understand the individual. Systems that can adjust training volume in real-time based on recovery markers. Systems that know when to push and when to pull back.

This is exactly what we're building with HeliX.`,
  },
  "building-ai-gym-copilot": {
    body: `Building HeliX started with a simple observation: the best personal trainers don't follow rigid programs. They adapt in real-time based on how their athlete is performing, feeling, and recovering.

## From Concept to MVP

The initial prototype was built over a weekend hackathon. A simple React Native app with a camera feed that attempted to track barbell path using MediaPipe. It was rough, but the core idea clicked.

### Computer Vision Pipeline

The first technical challenge was real-time pose estimation on mobile devices. We needed sub-100ms inference to provide meaningful feedback during fast, explosive movements like clean & jerks.

### The Training Model

Rather than prescribing fixed rep schemes, HeliX uses an autoregulatory model based on velocity-based training principles. By tracking bar speed, we can detect fatigue before the user even feels it.

## Lessons Learned

Building an AI-powered fitness app taught us that the hardest problems aren't technical — they're about understanding human behavior and building trust. Users need to believe the AI knows what it's doing before they'll hand over control of their training.

The journey continues. HeliX is currently in beta with a small group of dedicated lifters, and the results have been remarkable.`,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.description,
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  const content = articleContent[slug];

  if (!article || !content) {
    notFound();
  }

  // Find next article
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const nextArticle = articles[(currentIndex + 1) % articles.length];

  return (
    <SectionContainer className="pb-24 pt-32">
      <AnimatedSection>
        <article className="mx-auto max-w-3xl">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
              {article.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-text-tertiary">
              <span>Rahul Talukdar</span>
              <span>·</span>
              <span>{article.readTime}</span>
              <span>·</span>
              <span>{article.date}</span>
            </div>
          </header>

          {/* Body */}
          <div className="prose max-w-none">
            {content.body.split("\n\n").map((block, i) => {
              if (block.startsWith("```")) {
                const lines = block.split("\n");
                const code = lines.slice(1, -1).join("\n");
                return (
                  <pre key={i}>
                    <code>{code}</code>
                  </pre>
                );
              }
              if (block.startsWith("#### ")) {
                return (
                  <h4 key={i}>{block.replace("#### ", "")}</h4>
                );
              }
              if (block.startsWith("### ")) {
                return (
                  <h3 key={i}>{block.replace("### ", "")}</h3>
                );
              }
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i}>{block.replace("## ", "")}</h2>
                );
              }
              return <p key={i}>{block}</p>;
            })}
          </div>

          {/* Next Article CTA */}
          <div className="mt-16 border-t border-border pt-8">
            <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
              Up Next
            </p>
            <Link
              href={`/writing/${nextArticle.slug}`}
              className="group mt-4 block rounded-lg border border-border bg-surface p-6 transition-all hover:border-border-hover hover:bg-surface-elevated"
            >
              <h3 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-accent">
                {nextArticle.title}
              </h3>
              <span className="mt-2 inline-flex items-center gap-1 text-sm text-text-tertiary group-hover:text-accent">
                Read the next article in the series
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </div>
        </article>
      </AnimatedSection>
    </SectionContainer>
  );
}
