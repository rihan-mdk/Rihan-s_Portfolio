"use client";

import React from "react";
import { Milestone } from "@/data/journey";
import { RevealElement } from "./RevealElement";

interface TimelineProps {
  milestones: Milestone[];
}

export function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative w-full border-l border-white/[0.1] pl-6 sm:pl-10 md:pl-16 space-y-12 sm:space-y-16">
      {milestones.map((item, index) => (
        <RevealElement key={index} delay={index * 0.08} className="relative">
          {/* Subtle Indicator Node */}
          <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[71px] top-1.5 flex items-center justify-center">
            <div className="h-2.5 w-2.5 rounded-full bg-[#F4F4F4] ring-4 ring-[#101010]" />
          </div>

          {/* Timeline Content Block */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-light text-[#F4F4F4]">
                {item.year}
              </span>
              {item.period && (
                <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 border border-white/[0.1] bg-white/[0.03] text-[#F4F4F4]/60">
                  {item.period}
                </span>
              )}
            </div>

            {item.tag && (
              <span className="text-[10px] font-mono tracking-widest text-[#F4F4F4]/40 uppercase">
                {item.tag}
              </span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-[#F4F4F4] mt-1">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm font-mono text-[#F4F4F4]/60 mt-1">
            {item.institution}
          </p>

          <p className="text-sm sm:text-base text-[#F4F4F4]/70 font-light leading-relaxed mt-3 max-w-2xl">
            {item.description}
          </p>
        </RevealElement>
      ))}
    </div>
  );
}
