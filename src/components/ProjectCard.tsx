"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  layout?: "large" | "compact" | "horizontal";
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="group w-full mb-10 last:mb-0 bg-[#141416]/80 backdrop-blur-md p-6 sm:p-8 md:p-10 border border-white/[0.06] transition-all duration-300 hover:border-white/[0.2]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Number */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#F4F4F4]/30 uppercase tracking-widest">
              {project.number}
            </span>
          </div>

          {/* Project Name */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#F4F4F4] uppercase tracking-editorial">
            {project.name}
          </h3>

          {/* Short Description */}
          <p className="text-sm sm:text-base text-[#F4F4F4]/70 font-light max-w-xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Links: Website, GitHub & Know More */}
          <div className="flex items-center gap-6 pt-3 font-mono text-xs uppercase tracking-widest flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F4F4F4] hover:text-[#F4F4F4]/60 transition-colors"
              >
                <span>Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F4F4F4]/70 hover:text-white transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-[#F4F4F4]/50 hover:text-white transition-colors"
            >
              <span>Know More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Side: Real Project Image */}
        <div className="lg:col-span-5 relative w-full aspect-[16/10] bg-[#101010] border border-white/[0.08] overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority={priority}
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#F4F4F4]/20 text-xs font-mono uppercase tracking-widest">
              {project.name}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
