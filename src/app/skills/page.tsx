import { Metadata } from "next";
import { skillCategories } from "@/data/skills";
import { RevealText } from "@/components/RevealText";
import { RevealElement } from "@/components/RevealElement";

export const metadata: Metadata = {
  title: "SKILLS — Mohammad Rihan MR",
  description: "Technical competencies across AI/ML, modern web, backend architectures, and engineering tools.",
};

export default function SkillsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-24">
      {/* Header */}
      <div className="mb-16 sm:mb-24">
        <div className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/50 mb-4">
          TECHNICAL INVENTORY
        </div>

        <RevealText
          lines={["CAPABILITIES", "&amp; TOOLS."]}
          as="h1"
          className="text-5xl sm:text-7xl md:text-8xl font-light tracking-editorial text-[#F4F4F4] leading-[0.95]"
        />

        <RevealElement delay={0.2}>
          <p className="mt-6 text-base sm:text-xl text-[#F4F4F4]/65 font-light max-w-2xl">
            A typography-focused taxonomy of core engineering disciplines, frameworks, and instruments utilized in production.
          </p>
        </RevealElement>
      </div>

      {/* Clean Two-Column Editorial Layout on Desktop, Stacking Naturally on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-white/[0.08] pt-14">
        {skillCategories.map((category, index) => (
          <RevealElement key={category.title} delay={index * 0.08}>
            <div className="border border-white/[0.08] bg-[#121212] p-8 sm:p-10 space-y-6">
              {/* Category Header */}
              <div className="border-b border-white/[0.08] pb-6 flex items-baseline justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-light tracking-editorial text-[#F4F4F4]">
                    {category.title}
                  </h2>
                  <p className="text-xs font-mono text-[#F4F4F4]/50 mt-1">
                    {category.subtitle}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#F4F4F4]/30">
                  0{index + 1}
                </span>
              </div>

              {/* Typographic Skills List */}
              <ul className="space-y-4 pt-2">
                {category.items.map((skill, sIdx) => (
                  <li
                    key={skill}
                    className="flex items-center justify-between text-base sm:text-lg font-light text-[#F4F4F4]/85 hover:text-[#F4F4F4] transition-colors"
                  >
                    <span>{skill}</span>
                    <span className="text-[10px] font-mono text-[#F4F4F4]/30">
                      {String(sIdx + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealElement>
        ))}
      </div>

      {/* Technical Philosophy Quote */}
      <div className="mt-20 p-8 sm:p-12 border border-white/[0.08] bg-[#141414]">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#F4F4F4]/40 block mb-2">
          ENGINEERING PRINCIPLE
        </span>
        <blockquote className="text-lg sm:text-xl font-light text-[#F4F4F4]/80 max-w-3xl leading-relaxed">
          &ldquo;Tools are transient primitives; systems architecture, mathematical comprehension, and empathetic interface design endure.&rdquo;
        </blockquote>
      </div>
    </div>
  );
}
