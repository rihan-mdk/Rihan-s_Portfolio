"use client";

import React, { useState } from "react";
import { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { LayoutGrid, List } from "lucide-react";

interface ProjectListProps {
  projects: Project[];
  enableToggle?: boolean;
}

export function ProjectList({ projects, enableToggle = true }: ProjectListProps) {
  const [layout, setLayout] = useState<"large" | "horizontal">("large");

  return (
    <div className="w-full">
      {enableToggle && (
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-10 text-xs font-mono text-[#F4F4F4]/50">
          <span>{projects.length} PROJECTS CATALOGUED</span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLayout("large")}
              aria-label="Grid layout"
              className={`p-1.5 transition-colors ${
                layout === "large"
                  ? "text-[#F4F4F4] bg-white/[0.08]"
                  : "text-[#F4F4F4]/40 hover:text-[#F4F4F4]"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLayout("horizontal")}
              aria-label="List layout"
              className={`p-1.5 transition-colors ${
                layout === "horizontal"
                  ? "text-[#F4F4F4] bg-white/[0.08]"
                  : "text-[#F4F4F4]/40 hover:text-[#F4F4F4]"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {layout === "large" ? (
        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} layout="large" />
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} layout="horizontal" />
          ))}
        </div>
      )}
    </div>
  );
}
