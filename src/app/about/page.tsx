import { Metadata } from "next";
import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Rahul Talukdar.",
};

const interests = [
  {
    icon: "💪",
    title: "Performance",
    description:
      "Treating the body as the ultimate hardware. Currently focused on strength-to-weight ratio.",
    image: "/images/gym-training.png",
  },
  {
    icon: "🏍️",
    title: "Motorcycles",
    description:
      "The purest form of engineering meeting freedom. Mechanical empathy at high speeds.",
    image: "/images/motorcycle.png",
  },
];

export default function AboutPage() {
  return (
    <SectionContainer className="pb-24">
      <AnimatedSection className="pb-16 pt-32">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Story
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
          About
        </h1>
      </AnimatedSection>

      {/* Story */}
      <AnimatedSection delay={0.1}>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-text-secondary">
          <p>
            I am a builder at heart. My journey in technology started with a
            fascination for how things work under the hood, leading me to
            specialize in Frontend Engineering and AI Systems.
          </p>
          <p>
            Currently, I am obsessed with the intersection of human performance
            and machine intelligence. Whether it&apos;s architecting multi-agent
            AI systems for HeliX or fine-tuning my own physiological metrics, I
            believe in the power of continuous iteration.
          </p>
          <p>
            When I&apos;m not pushing code, you&apos;ll find me at the gym
            chasing strength milestones, researching the latest in
            bio-optimization, or finding the perfect line on a winding road with
            my motorcycle.
          </p>
        </div>
      </AnimatedSection>

      {/* Location */}
      <AnimatedSection delay={0.15} className="mt-12">
        <div className="relative overflow-hidden rounded-lg border border-border">
          <div className="relative h-48 w-full">
            <Image
              src="/images/kolkata.png"
              alt="Kolkata, India"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
          </div>
          <div className="relative -mt-12 p-6">
            <p className="flex items-center gap-2 text-lg font-medium text-text-primary">
              <span>📍</span> Kolkata, India
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Interests */}
      <AnimatedSection delay={0.2} className="mt-20">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-text-primary">
          Beyond Code
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="group overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-border-hover"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={interest.image}
                  alt={interest.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text-primary">
                  {interest.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
