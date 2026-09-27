"use client";

import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { VisualArtifact } from "./VisualArtifact";

interface ProjectCardProps {
  project: Project;
  layout?: "large" | "compact" | "horizontal";
  priority?: boolean;
}

export function ProjectCard({ project, layout = "large" }: ProjectCardProps) {
  if (layout === "horizontal") {
    return (
      <Link
        href={`/work/${project.slug}`}
        data-cursor="view"
        className="group block w-full border-b border-white/[0.08] py-8 sm:py-10 transition-colors duration-300 hover:border-white/[0.25]"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
          {/* Number & Year */}
          <div className="md:col-span-2 flex items-center justify-between md:block text-xs font-mono text-[#F4F4F4]/40">
            <span className="block text-sm text-[#F4F4F4]/70">{project.number}</span>
            <span className="block mt-1">{project.year}</span>
          </div>

          {/* Title & Tagline */}
          <div className="md:col-span-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-[#F4F4F4] transition-transform duration-300 group-hover:translate-x-1.5 flex items-center gap-3">
              {project.name}
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#F4F4F4]" />
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#F4F4F4]/60 font-light max-w-lg">
              {project.tagline}
            </p>
          </div>

          {/* Category */}
          <div className="md:col-span-4 text-xs font-mono text-[#F4F4F4]/50 md:text-right">
            {project.category}
          </div>
        </div>
      </Link>
    );
  }

  // Large Editorial Card
  return (
    <article className="group w-full mb-16 sm:mb-24 last:mb-0">
      <Link
        href={`/work/${project.slug}`}
        data-cursor="view"
        className="block focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#F4F4F4]"
      >
        {/* Project Visual Container */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] overflow-hidden rounded-xs bg-[#141414] border border-white/[0.08] transition-colors duration-300 group-hover:border-white/[0.2]">
          <div className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
            <VisualArtifact
              theme={project.visualTheme}
              badgeText={`${project.number} // ${project.year}`}
            />
          </div>
        </div>

        {/* Project Metadata & Headline */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-[#F4F4F4]/50 mb-2">
              <span>{project.number}</span>
              <span>—</span>
              <span>{project.category}</span>
              <span>—</span>
              <span>{project.year}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-editorial text-[#F4F4F4] transition-transform duration-300 group-hover:translate-x-1 flex items-center gap-3">
              <span>{project.name}</span>
              <ArrowUpRight className="w-5 h-5 text-[#F4F4F4]/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#F4F4F4]" />
            </h3>

            <p className="mt-2.5 text-xs sm:text-sm text-[#F4F4F4]/65 font-light leading-relaxed max-w-2xl">
              {project.tagline}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
