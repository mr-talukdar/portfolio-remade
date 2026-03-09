"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Article } from "@/data/writing";

interface ArticleRowProps {
  article: Article;
  index?: number;
}

export function ArticleRow({ article, index = 0 }: ArticleRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/writing/${article.slug}`} className="group block">
        <div className="flex items-center justify-between border-b border-border py-6 transition-colors hover:border-border-hover">
          <div className="flex items-baseline gap-6">
            <span className="hidden text-sm text-text-tertiary sm:block">
              {article.date}
            </span>
            <h4 className="text-base font-medium text-text-primary transition-colors group-hover:text-accent">
              {article.title}
            </h4>
          </div>
          <span className="text-text-tertiary transition-transform group-hover:translate-x-1 group-hover:text-accent">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
