"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { experiments, experimentCategories } from "@/data/experiments";

const experimentImages: Record<string, string> = {
  "AI Workflow": "/images/ai-agents.png",
  "UI Motion": "/images/hero-bg.png",
  "Dev Tools": "/images/projects/code.jpg",
  WebGL: "/images/hero-bg.png",
};

export default function LabPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Research");

  const filteredExperiments =
    activeCategory === "All Research"
      ? experiments
      : experiments.filter((e) => e.category === activeCategory);

  return (
    <SectionContainer className="pb-24">
      {/* Hero with background */}
      <div className="relative -mx-6 mb-8 overflow-hidden">
        <div className="relative h-48">
          <Image
            src="/images/ai-agents.png"
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <h1 className="text-4xl font-bold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                Experimental Playground
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-text-secondary">
                A curation of internal prototypes, UI motion studies, and
                high-performance developer utilities pushing the boundaries of
                the digital experience.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <AnimatedSection className="mb-12">
        <div className="flex flex-wrap gap-2">
          {experimentCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                activeCategory === category
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {activeCategory === category && (
                <motion.span
                  layoutId="lab-tab"
                  className="absolute inset-0 rounded-full border border-border bg-surface"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Experiment Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filteredExperiments.map((experiment, i) => (
          <motion.div
            key={experiment.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group overflow-hidden rounded-lg border border-border bg-surface transition-all hover:border-border-hover hover:bg-surface-elevated"
          >
            {/* Card Image */}
            <div className="relative h-32 w-full overflow-hidden">
              <Image
                src={experimentImages[experiment.category] || "/images/hero-bg.png"}
                alt={experiment.title}
                fill
                className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
            </div>

            <div className="p-6">
              <span className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {experiment.category}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-text-primary">
                {experiment.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {experiment.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-text-tertiary transition-colors group-hover:text-accent">
                View Experiment
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
