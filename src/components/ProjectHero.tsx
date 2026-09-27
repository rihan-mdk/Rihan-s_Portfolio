"use client";

import React from "react";
import { Project } from "@/data/projects";
import { Button } from "./Button";
import { VisualArtifact } from "./VisualArtifact";
import { RevealText } from "./RevealText";
import { RevealElement } from "./RevealElement";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="w-full pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-white/[0.08]">
      {/* Metadata Pill */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#F4F4F4]/50 mb-6 uppercase tracking-widest">
        <span>{project.number}</span>
        <span>/</span>
        <span>{project.category}</span>
        <span>/</span>
        <span>{project.year}</span>
      </div>

      {/* Main Title & Statement */}
      <div className="max-w-5xl">
        <RevealText
          lines={[project.name]}
          as="h1"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-editorial text-[#F4F4F4] leading-[1.02]"
        />

        <RevealElement delay={0.2}>
          <p className="mt-6 sm:mt-8 text-lg sm:text-2xl text-[#F4F4F4]/75 font-light leading-relaxed max-w-3xl">
            {project.statement}
          </p>
        </RevealElement>
      </div>

      {/* External Action Buttons */}
      <RevealElement delay={0.3} className="mt-8 flex flex-wrap gap-4">
        {project.liveUrl && (
          <Button href={project.liveUrl} external arrow="up-right" variant="primary">
            Live Project
          </Button>
        )}
        {project.githubUrl && (
          <Button href={project.githubUrl} external arrow="up-right" variant="outline">
            Source Code
          </Button>
        )}
      </RevealElement>

      {/* Large Hero Visual */}
      <RevealElement delay={0.4} className="mt-12 sm:mt-16">
        <div className="w-full aspect-[16/10] sm:aspect-[21/10] overflow-hidden rounded-xs border border-white/[0.1] bg-[#121212]">
          <VisualArtifact
            theme={project.visualTheme}
            badgeText={`${project.number} ARCHITECTURAL SPEC // ${project.year}`}
          />
        </div>
      </RevealElement>
    </div>
  );
}
