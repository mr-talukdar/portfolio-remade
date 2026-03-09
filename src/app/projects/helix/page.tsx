import { Metadata } from "next";
import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Badge } from "@/components/shared/Badge";

export const metadata: Metadata = {
  title: "HeliX — AI Gym Copilot",
  description:
    "An intelligent training copilot designed to optimize every rep, set, and recovery phase through real-time AI analysis.",
};

const tocItems = [
  { id: "problem", label: "Problem" },
  { id: "idea", label: "The Idea" },
  { id: "architecture", label: "Architecture" },
  { id: "future", label: "Future" },
];

const solutionFeatures = [
  {
    icon: "👁️",
    title: "Computer Vision Form Check",
    description:
      "Proprietary pose estimation tracks joint angles in real-time to prevent injury and ensure maximum activation.",
  },
  {
    icon: "📊",
    title: "Autoregulatory Training",
    description:
      "HeliX detects 'velocity loss' during your sets to suggest when to stop or push for a PR based on neural drive.",
  },
  {
    icon: "❤️",
    title: "Biometric Integration",
    description:
      "Syncs with wearables to factor in HRV, Resting Heart Rate, and glucose spikes for total recovery management.",
  },
];

const futureAgents = [
  {
    icon: "🏋️",
    title: "Workout Agent",
    description:
      "Autonomous set-by-set programming based on intra-workout recovery speeds.",
  },
  {
    icon: "🍎",
    title: "Nutrition Agent",
    description:
      "Dynamic macro adjustments synced to your exact caloric burn and muscle micro-tears.",
  },
  {
    icon: "😴",
    title: "Recovery Agent",
    description:
      "Managing sleep environments and therapy cycles for peak supercompensation.",
  },
  {
    icon: "📈",
    title: "Progress Analysis",
    description:
      "Predictive modeling of body composition 3-6 months into the future.",
  },
];

const helixScreens = [
  { src: "/images/helix/landing.png", label: "Landing" },
  { src: "/images/helix/dashboard.png", label: "Dashboard" },
  { src: "/images/helix/workout.png", label: "Workout" },
  { src: "/images/helix/summary.png", label: "Summary" },
];

export default function HelixPage() {
  return (
    <>
      {/* Hero with gym background */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 pt-24">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/gym-training.png"
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <AnimatedSection className="relative mx-auto max-w-4xl text-center">
          <Badge variant="accent">Case Study</Badge>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-text-primary md:text-7xl">
            HeliX
          </h1>
          <p className="mt-2 text-xl text-accent">AI Gym Copilot</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            An intelligent training copilot designed to optimize every rep, set,
            and recovery phase through real-time AI analysis. Experience the
            future of human performance.
          </p>
        </AnimatedSection>
      </section>

      {/* App Screenshots Showcase */}
      <SectionContainer className="py-16">
        <AnimatedSection>
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-text-primary">
            App Interface
          </h2>
          <div className="flex items-end justify-center gap-4 md:gap-6">
            {helixScreens.map((screen, i) => (
              <div
                key={screen.label}
                className={`relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-accent/10 transition-transform hover:-translate-y-2 ${
                  i === 0 || i === 3 ? "h-[280px] w-[130px] md:h-[380px] md:w-[170px]" : "h-[320px] w-[140px] md:h-[420px] md:w-[190px]"
                }`}
              >
                <Image
                  src={screen.src}
                  alt={`HeliX ${screen.label}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-8">
            {helixScreens.map((screen) => (
              <p key={screen.label} className="text-xs text-text-tertiary">
                {screen.label}
              </p>
            ))}
          </div>
        </AnimatedSection>
      </SectionContainer>

      {/* Content with TOC */}
      <SectionContainer className="pb-24 pt-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[200px_1fr]">
          {/* Sidebar TOC */}
          <nav className="hidden lg:block">
            <div className="sticky top-28 space-y-4">
              <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
                On this page
              </p>
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Main Content */}
          <div className="space-y-24">
            {/* The Problem */}
            <AnimatedSection>
              <section id="problem">
                <h2 className="text-3xl font-bold tracking-tight text-text-primary">
                  The Problem
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                  Traditional fitness apps lack real-time adaptability and deep
                  physiological insights, leaving athletes to guess their
                  optimal training volume and recovery needs. The
                  &ldquo;one-size-fits-all&rdquo; plan fails to account for
                  biological variance, daily stress, and micro-progression
                  markers.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-border bg-surface p-6">
                    <h4 className="font-semibold text-text-primary">
                      Static Planning
                    </h4>
                    <p className="mt-2 text-sm text-text-secondary">
                      Rigid routines that don&apos;t adjust for sleep quality or
                      muscle readiness.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-surface p-6">
                    <h4 className="font-semibold text-text-primary">
                      Data Overload
                    </h4>
                    <p className="mt-2 text-sm text-text-secondary">
                      Trackers provide numbers but rarely actionable, real-time
                      coaching cues.
                    </p>
                  </div>
                </div>
              </section>
            </AnimatedSection>

            {/* The Idea */}
            <AnimatedSection>
              <section id="idea">
                <h2 className="text-3xl font-bold tracking-tight text-text-primary">
                  A Digital Twin for Your Fitness
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                  HeliX builds a dynamic model of your physiology, adapting your
                  training intensity second-by-second based on bio-feedback
                  loops and computer vision.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {solutionFeatures.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-border-hover"
                    >
                      <span className="text-2xl">{feature.icon}</span>
                      <h4 className="mt-4 font-semibold text-text-primary">
                        {feature.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            {/* Architecture */}
            <AnimatedSection>
              <section id="architecture">
                <h2 className="text-3xl font-bold tracking-tight text-text-primary">
                  System Architecture
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                  The HeliX engine utilizes a distributed edge-computing model
                  to ensure zero-latency feedback during explosive movements.
                </p>

                {/* Architecture visual */}
                <div className="relative mt-8 overflow-hidden rounded-lg border border-border bg-surface">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/ai-agents.png"
                      alt="HeliX System Architecture"
                      fill
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                  </div>
                  <div className="relative -mt-16 space-y-2 p-8 text-center">
                    <div className="flex items-center justify-center gap-4">
                      <div className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent">
                        Edge Device
                      </div>
                      <span className="text-text-tertiary">→</span>
                      <div className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent">
                        AI Engine
                      </div>
                      <span className="text-text-tertiary">→</span>
                      <div className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent">
                        Feedback Loop
                      </div>
                    </div>
                    <p className="text-xs text-text-tertiary">
                      Distributed edge-computing pipeline
                    </p>
                  </div>
                </div>
              </section>
            </AnimatedSection>

            {/* Future Vision */}
            <AnimatedSection>
              <section id="future">
                <h2 className="text-3xl font-bold tracking-tight text-text-primary">
                  Future Vision: The Agent Era
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                  Expanding beyond tracking into autonomous performance agents.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {futureAgents.map((agent) => (
                    <div
                      key={agent.title}
                      className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-border-hover"
                    >
                      <span className="text-2xl">{agent.icon}</span>
                      <h4 className="mt-3 font-semibold text-text-primary">
                        {agent.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {agent.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
