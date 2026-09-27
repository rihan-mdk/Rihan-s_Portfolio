import { Metadata } from "next";
import { journeyMilestones } from "@/data/journey";
import { Timeline } from "@/components/Timeline";
import { RevealText } from "@/components/RevealText";
import { RevealElement } from "@/components/RevealElement";

export const metadata: Metadata = {
  title: "JOURNEY — Mohammad Rihan MR",
  description: "Chronological milestone timeline of academic and engineering trajectory.",
};

export default function JourneyPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-24">
      {/* Header */}
      <div className="mb-20 sm:mb-28 max-w-4xl">
        <div className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/50 mb-4">
          CHRONOLOGY
        </div>

        <RevealText
          lines={["THE", "JOURNEY."]}
          as="h1"
          className="text-5xl sm:text-7xl md:text-8xl font-light tracking-editorial text-[#F4F4F4] leading-[0.95]"
        />

        <RevealElement delay={0.2}>
          <p className="mt-6 text-base sm:text-xl text-[#F4F4F4]/65 font-light max-w-2xl">
            A chronological ledger of verified academic progression, engineering initiatives, and research explorations.
          </p>
        </RevealElement>
      </div>

      {/* Vertical Timeline */}
      <div className="max-w-4xl">
        <Timeline milestones={journeyMilestones} />
      </div>

      {/* Structured Roadmap Expansion Anchor */}
      <div className="mt-24 pt-10 border-t border-white/[0.08] max-w-4xl flex items-center justify-between text-xs font-mono text-[#F4F4F4]/40">
        <span>TIMELINE CONTINUUM // 2024 — PRESENT</span>
        <span>VERIFIED RECORD</span>
      </div>
    </div>
  );
}
