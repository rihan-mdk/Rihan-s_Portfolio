"use client";

import React from "react";
import { RandomLetterSwap } from "@/components/ui/random-letter-swap";
import { playClickSound } from "@/lib/sound";
import { RevealElement } from "@/components/RevealElement";

export default function InquirePage() {
  return (
    <main className="relative w-full min-h-[100svh] flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-28 pb-10 bg-transparent text-[#F4F4F4] select-none">
      {/* Top spacer so center is balanced */}
      <div className="w-full" />

      {/* Center Hero Dispatch */}
      <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center my-auto py-12">
        <RevealElement delay={0.1}>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#F4F4F4]/90 leading-relaxed tracking-tight max-w-2xl mx-auto mb-12 sm:mb-16">
            Send a brief note about what you are working on and what role you need filled. Web development, intelligent AI/ML systems, or product design.
          </p>
        </RevealElement>

        <RevealElement delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 font-mono text-xs sm:text-sm uppercase tracking-widest">
            <a
              href="mailto:rihanatwork26@gmail.com"
              onClick={playClickSound}
              className="text-[#F4F4F4]/75 hover:text-white transition-colors"
            >
              <RandomLetterSwap label="EMAIL" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-rihan-m-r"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="text-[#F4F4F4]/75 hover:text-white transition-colors"
            >
              <RandomLetterSwap label="LINKEDIN" />
            </a>
            <a
              href="https://github.com/rihan-mdk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="text-[#F4F4F4]/75 hover:text-white transition-colors"
            >
              <RandomLetterSwap label="GITHUB" />
            </a>
            <a
              href="https://www.instagram.com/innix.exe?obrf=Y2JrcDBpaXZ2dWJu&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="text-[#F4F4F4]/75 hover:text-white transition-colors"
            >
              <RandomLetterSwap label="INSTAGRAM" />
            </a>
          </div>
        </RevealElement>
      </div>

      {/* Bottom Ledger Credits Bar (Exact match to reference) */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-end pt-8 border-t border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-[#F4F4F4]/40">
        {/* Left: RIHAN MR © 2026 / ALL RIGHTS RESERVED */}
        <div className="flex flex-col gap-1">
          <span className="text-[#F4F4F4] font-medium">RIHAN MR © 2026</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>

        {/* Center: SAY HELLO / rihanatwork26@gmail.com */}
        <div className="flex flex-col gap-1 md:text-center">
          <span>SAY HELLO</span>
          <a
            href="mailto:rihanatwork26@gmail.com"
            onClick={playClickSound}
            className="text-[#F4F4F4] hover:text-white transition-colors lowercase font-mono tracking-wider"
          >
            rihanatwork26@gmail.com
          </a>
        </div>

        {/* Right: SITE BY / MUHAMMED RIHAN MR */}
        <div className="flex flex-col gap-1 md:text-right">
          <span>SITE BY</span>
          <span className="text-[#F4F4F4] font-medium">MUHAMMED RIHAN MR</span>
        </div>
      </div>
    </main>
  );
}
