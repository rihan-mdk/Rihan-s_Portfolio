import { Metadata } from "next";
import { RevealText } from "@/components/RevealText";
import { RevealElement } from "@/components/RevealElement";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "ABOUT — Mohammad Rihan MR",
  description:
    "Artificial Intelligence & Machine Learning engineering student turning ideas into useful digital products.",
};

export default function AboutPage() {
  const focusAreas = [
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "UI/UX Design",
    "Product Building",
  ];

  const interests = [
    "AI Systems",
    "Creative Coding",
    "Minimal Design",
    "Emerging Technology",
    "Digital Experimentation",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-24">
      {/* Hero */}
      <div className="max-w-5xl mb-20 sm:mb-28">
        <div className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/50 mb-4">
          01 / BACKGROUND
        </div>

        <RevealText
          lines={["A LITTLE", "ABOUT ME."]}
          as="h1"
          className="text-5xl sm:text-7xl md:text-8xl font-light tracking-editorial text-[#F4F4F4] leading-[0.95]"
        />

        <RevealElement delay={0.2}>
          <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-[#F4F4F4]/80 font-light leading-relaxed max-w-3xl">
            &ldquo;I&apos;m an Artificial Intelligence &amp; Machine Learning engineering student who enjoys turning ideas into useful digital products.&rdquo;
          </p>
        </RevealElement>
      </div>

      {/* Sections */}
      <div className="space-y-20 sm:space-y-28">
        {/* ABOUT PERSPECTIVE */}
        <RevealElement>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start border-t border-white/[0.08] pt-14">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/40">
                01 / PERSPECTIVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-editorial text-[#F4F4F4] mt-2">
                ABOUT
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="text-base sm:text-lg text-[#F4F4F4]/75 font-light leading-relaxed">
                I operate at the intersection of applied machine learning and product engineering. Rather than treating AI models as isolated academic exercises, I focus on integrating them into fast, intuitive, and beautifully engineered user experiences.
              </p>
              <p className="text-base sm:text-lg text-[#F4F4F4]/75 font-light leading-relaxed">
                Whether deploying edge-quantized vision classifiers on mobile web or solving combinatorial institutional scheduling hurdles, I care deeply about craftsmanship, minimal friction, and quiet digital elegance.
              </p>
            </div>
          </div>
        </RevealElement>

        {/* EDUCATION */}
        <RevealElement>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start border-t border-white/[0.08] pt-14">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/40">
                02 / ACADEMIC
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-editorial text-[#F4F4F4] mt-2">
                EDUCATION
              </h2>
            </div>
            <div className="md:col-span-8 space-y-3">
              <h3 className="text-xl sm:text-2xl font-light text-[#F4F4F4]">
                BE — Artificial Intelligence &amp; Machine Learning
              </h3>
              <p className="text-sm sm:text-base font-mono text-[#F4F4F4]/60">
                Yenepoya Institute of Technology
              </p>
              <p className="text-xs font-mono text-[#F4F4F4]/40 uppercase tracking-wider">
                Expected Completion: 2026
              </p>
            </div>
          </div>
        </RevealElement>

        {/* FOCUS */}
        <RevealElement>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start border-t border-white/[0.08] pt-14">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/40">
                03 / SPECIALIZATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-editorial text-[#F4F4F4] mt-2">
                FOCUS
              </h2>
            </div>
            <div className="md:col-span-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-5 border border-white/[0.08] bg-[#131313] text-sm sm:text-base font-light text-[#F4F4F4]/90 flex items-center justify-between"
                  >
                    <span>{item}</span>
                    <span className="text-[10px] font-mono text-[#F4F4F4]/30">0{idx + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealElement>

        {/* INTERESTS */}
        <RevealElement>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start border-t border-white/[0.08] pt-14">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/40">
                04 / EXPLORATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-editorial text-[#F4F4F4] mt-2">
                INTERESTS
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-xs sm:text-sm font-mono border border-white/[0.1] bg-[#141414] text-[#F4F4F4]/80"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealElement>
      </div>

      {/* CTA */}
      <div className="mt-24 pt-12 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/40 block mb-1">
            EXPLORE WORK
          </span>
          <div className="text-lg font-light text-[#F4F4F4]">
            Interested in viewing implemented projects?
          </div>
        </div>
        <Button href="/work" variant="primary" arrow="right">
          View Projects
        </Button>
      </div>
    </div>
  );
}
