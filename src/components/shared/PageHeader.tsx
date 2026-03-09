import { AnimatedSection } from "@/components/shared/AnimatedSection";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <AnimatedSection className="pb-16 pt-32">
      <h1 className="text-4xl font-bold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
