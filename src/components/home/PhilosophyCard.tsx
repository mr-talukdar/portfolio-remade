"use client";

import { motion } from "framer-motion";

interface PhilosophyCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

export function PhilosophyCard({
  icon,
  title,
  description,
  index = 0,
}: PhilosophyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-lg border border-border bg-surface p-6 transition-all hover:border-border-hover hover:bg-surface-elevated"
    >
      <span className="mb-4 block text-2xl">{icon}</span>
      <h4 className="text-base font-semibold text-text-primary">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
    </motion.div>
  );
}
