import { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PageHeader } from "@/components/shared/PageHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { articles } from "@/data/writing";

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on technology, systems, and performance.",
};

export default function WritingPage() {
  return (
    <SectionContainer className="pb-24">
      <PageHeader
        title="Writing"
        subtitle="Thoughts on technology, systems, and performance."
      />

      <div className="space-y-1">
        {articles.map((article, i) => (
          <AnimatedSection key={article.slug} delay={i * 0.1}>
            <Link href={`/writing/${article.slug}`} className="group block">
              <div className="flex flex-col gap-2 border-b border-border py-8 transition-colors hover:border-border-hover sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary transition-colors group-hover:text-accent">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {article.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 sm:ml-8 sm:flex-shrink-0">
                  <span className="text-sm text-text-tertiary">
                    {article.date}
                  </span>
                  <span className="text-sm text-text-tertiary">
                    {article.readTime}
                  </span>
                  <span className="text-text-tertiary transition-transform group-hover:translate-x-1 group-hover:text-accent">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </SectionContainer>
  );
}
