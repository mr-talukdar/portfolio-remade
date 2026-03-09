"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/shared/Badge";
import type { Project } from "@/data/projects";

interface FeaturedProjectCardProps {
  project: Project;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <Link href={project.href} className="group block">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-border-hover"
      >
        {/* Accent glow on hover */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/5 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Content */}
          <div className="relative p-8 md:p-12">
            <div className="space-y-4">
              <Badge variant="accent">Featured Project</Badge>
              <h3 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                {project.title}
              </h3>
              <p className="max-w-xl text-lg leading-relaxed text-text-secondary">
                {project.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            {/* Feature highlights */}
            <div className="mt-8 flex flex-col gap-3 border-t border-border pt-8 md:flex-row md:gap-8">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="text-accent">✓</span>
                Real-time movement analysis
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="text-accent">✓</span>
                Adaptive training algorithms
              </div>
            </div>
          </div>

          {/* HeliX App Screenshots */}
          <div className="relative flex items-center justify-center gap-4 overflow-hidden p-8 md:p-12">
            <div className="relative h-[340px] w-[160px] overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-accent/5">
              <Image
                src="/images/helix/landing.png"
                alt="HeliX Landing Screen"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative mt-8 h-[340px] w-[160px] overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-accent/5">
              <Image
                src="/images/helix/dashboard.png"
                alt="HeliX Dashboard"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
