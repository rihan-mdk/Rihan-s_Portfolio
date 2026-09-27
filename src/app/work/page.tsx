import { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectList } from "@/components/ProjectList";
import { RevealElement } from "@/components/RevealElement";
import { RevealText } from "@/components/RevealText";

export const metadata: Metadata = {
  title: "WORK — Mohammad Rihan MR",
  description: "Selected projects, products, and intelligent system experiments by Mohammad Rihan MR.",
};

export default function WorkPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-24">
      {/* Header */}
      <div className="mb-16 sm:mb-24">
        <div className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/50 mb-4">
          INDEX / ARCHIVE
        </div>

        <RevealText
          lines={["SELECTED", "WORK."]}
          as="h1"
          className="text-5xl sm:text-7xl md:text-8xl font-light tracking-editorial text-[#F4F4F4] leading-[0.95]"
        />

        <RevealElement delay={0.2}>
          <p className="mt-6 text-base sm:text-xl text-[#F4F4F4]/65 font-light max-w-2xl">
            Projects, products and experiments built across artificial intelligence, computer vision, and modern web architectures.
          </p>
        </RevealElement>
      </div>

      {/* Complete Project Collection */}
      <RevealElement delay={0.3}>
        <ProjectList projects={projects} enableToggle={true} />
      </RevealElement>
    </div>
  );
}
