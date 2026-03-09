import { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProjectCard } from "@/components/home/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects by Rahul Talukdar.",
};

export default function ProjectsPage() {
  return (
    <SectionContainer className="pb-24">
      <PageHeader
        title="Projects"
        subtitle="Things I've built, designed, and shipped."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </SectionContainer>
  );
}
