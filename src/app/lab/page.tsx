"use client";

import React, { useState } from "react";
import { labItems, LabItem } from "@/data/lab";
import { RevealText } from "@/components/RevealText";
import { RevealElement } from "@/components/RevealElement";
import { Sparkles, Terminal } from "lucide-react";

type CategoryFilter = "ALL" | "AI" | "WEB" | "UI" | "PROTOTYPES" | "IDEAS";

export default function LabPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("ALL");
  const [selectedItem, setSelectedItem] = useState<LabItem | null>(null);

  const categories: CategoryFilter[] = ["ALL", "AI", "WEB", "UI", "PROTOTYPES", "IDEAS"];

  const filteredItems =
    activeCategory === "ALL"
      ? labItems
      : labItems.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-24">
      {/* Header */}
      <div className="mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/50 mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>RESEARCH &amp; PROTOTYPES</span>
        </div>

        <RevealText
          lines={["THE", "LAB."]}
          as="h1"
          className="text-5xl sm:text-7xl md:text-8xl font-light tracking-editorial text-[#F4F4F4] leading-[0.95]"
        />

        <RevealElement delay={0.2}>
          <p className="mt-6 text-base sm:text-xl text-[#F4F4F4]/65 font-light max-w-2xl">
            Experiments, prototypes and ideas. An exploratory index of conceptual interfaces, emerging algorithms, and unfinished curiosities.
          </p>
        </RevealElement>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 pb-8 border-b border-white/[0.08] mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-[#F4F4F4] text-[#101010] font-medium"
                : "bg-white/[0.04] text-[#F4F4F4]/60 hover:text-[#F4F4F4] hover:bg-white/[0.08] border border-white/[0.06]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Experimental Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <RevealElement key={item.id} delay={idx * 0.05}>
            <div
              onClick={() => setSelectedItem(selectedItem?.id === item.id ? null : item)}
              className="group p-7 border border-white/[0.08] bg-[#121212] hover:border-white/[0.25] transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[300px]"
            >
              {/* Top metadata */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#F4F4F4]/40 mb-4">
                  <span>{item.number}</span>
                  <span className="px-2 py-0.5 border border-white/[0.1] bg-white/[0.03] text-[9px] uppercase tracking-wider text-[#F4F4F4]/70">
                    {item.status}
                  </span>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-widest text-[#F4F4F4]/50 mb-1">
                  {item.category} // {item.year}
                </div>

                <h3 className="text-xl sm:text-2xl font-light text-[#F4F4F4] group-hover:translate-x-1 transition-transform">
                  {item.title}
                </h3>

                <p className="mt-4 text-xs sm:text-sm text-[#F4F4F4]/65 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom details / Metrics */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] space-y-2 text-xs font-mono">
                {item.metrics && (
                  <div className="text-[#F4F4F4]/80 flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-[#F4F4F4]/50" />
                    <span className="text-[11px]">{item.metrics}</span>
                  </div>
                )}
                {item.notes && (
                  <div className="text-[10px] text-[#F4F4F4]/40 line-clamp-2">
                    {item.notes}
                  </div>
                )}
              </div>
            </div>
          </RevealElement>
        ))}
      </div>

      {/* Lab Manifesto / Footer Note */}
      <div className="mt-20 p-8 border border-white/[0.08] bg-[#141414] text-xs font-mono text-[#F4F4F4]/50 flex flex-col sm:flex-row items-baseline justify-between gap-4">
        <span>NOTE: THE LAB CONTAINS UNSTABLE REPOSITORIES AND PROTOTYPES.</span>
        <span>UPDATED CONTINUOUSLY // 2026</span>
      </div>
    </div>
  );
}
