"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const projectImages: Record<string, string> = {
  "ihlad-website": "/images/projects/enterprise.jpg",
  "crypto-wallet-generator": "/images/projects/crypto.jpg",
  "frontend-system-experiments": "/images/projects/design-system.png",
  helix: "/images/projects/fitness.jpg",
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const imageSrc = projectImages[project.slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={project.href} className="group block">
        <div className="h-full overflow-hidden rounded-lg border border-border bg-surface transition-all hover:border-border-hover hover:bg-surface-elevated">
          {/* Image */}
          {imageSrc && (
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={imageSrc}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            <h4 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-accent">
              {project.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {project.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-text-tertiary transition-colors group-hover:text-accent">
              View project
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
