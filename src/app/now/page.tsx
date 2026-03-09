import { Metadata } from "next";
import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Now",
  description: "What Rahul Talukdar is currently focused on.",
};

const stats = [
  {
    label: "Body Fat",
    value: "12.5%",
    trend: "down",
    change: "-1.2%",
  },
  {
    label: "Volume",
    value: "5 Days/Wk",
    trend: "up",
    change: "+1",
  },
  {
    label: "Phase",
    value: "Cutting",
    subtext: "Week 6 of 12",
    trend: "neutral",
    change: "",
  },
];

export default function NowPage() {
  return (
    <SectionContainer className="pb-24">
      {/* Hero with gym background */}
      <div className="relative -mx-6 mb-12 overflow-hidden">
        <div className="relative h-64">
          <Image
            src="/images/gym-training.png"
            alt=""
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Currently
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              Now
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">
              Focused on scaling intelligence, optimizing performance, and building
              the future of dev tools.
            </p>
          </div>
        </div>
      </div>

      {/* Training Stats */}
      <AnimatedSection delay={0.1}>
        <h2 className="mb-6 text-xl font-semibold text-text-primary">
          Monitoring Training Stats
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
                {stat.label}
              </p>
              <p className="mt-2 text-3xl font-bold text-text-primary">
                {stat.value}
              </p>
              <div className="mt-2 flex items-center gap-2">
                {stat.trend === "down" && (
                  <span className="text-sm text-green-400">↓ {stat.change}</span>
                )}
                {stat.trend === "up" && (
                  <span className="text-sm text-green-400">↑ {stat.change}</span>
                )}
                {stat.subtext && (
                  <span className="text-sm text-text-tertiary">
                    {stat.subtext}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Current Focus */}
      <AnimatedSection delay={0.2} className="mt-16">
        <h2 className="mb-6 text-xl font-semibold text-text-primary">
          Current Focus
        </h2>
        <div className="space-y-6 text-text-secondary">
          <div className="group overflow-hidden rounded-lg border border-border bg-surface">
            <div className="relative h-32 w-full overflow-hidden">
              <Image
                src="/images/ai-agents.png"
                alt="AI Systems"
                fill
                className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-text-primary">
                Building HeliX
              </h3>
              <p className="mt-2 text-sm leading-relaxed">
                Developing the AI gym copilot — focused on the computer vision
                pipeline and autoregulatory training algorithms.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="font-semibold text-text-primary">
              Exploring Agent Architectures
            </h3>
            <p className="mt-2 text-sm leading-relaxed">
              Researching multi-agent orchestration patterns for complex task
              decomposition and autonomous workflows.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="font-semibold text-text-primary">
              Strength Training
            </h3>
            <p className="mt-2 text-sm leading-relaxed">
              Currently in a cutting phase, optimizing strength-to-weight
              ratio while maintaining performance markers.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
