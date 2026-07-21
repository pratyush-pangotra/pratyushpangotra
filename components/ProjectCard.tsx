"use client";

import { motion } from "framer-motion";
import { Lock, Github } from "lucide-react";
import type { Project } from "@/lib/data";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="glass group flex flex-col overflow-hidden rounded-2xl transition-colors hover:border-signal/30"
    >
      <div className="relative flex h-40 items-center justify-center border-b border-copper/10 bg-bg-elevated/60 pcb-grid">
        <ProjectVisual type={project.visual} />
        <span className="absolute left-4 top-4 font-mono text-[10px] tracking-widest text-copper/70">
          {project.index}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between gap-2">
          <h3 className="font-mono text-lg text-silk">{project.name}</h3>
          <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-copper/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
            {project.status === "Private Product" ? (
              <Lock size={10} />
            ) : (
              <Github size={10} />
            )}
            {project.status}
          </span>
        </div>

        <p className="text-sm font-medium text-copper-bright">
          {project.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-copper/20 bg-copper/5 px-2 py-1 font-mono text-[10px] text-signal/90"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
