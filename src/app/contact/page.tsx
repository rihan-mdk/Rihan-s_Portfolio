"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { RandomLetterSwap } from "@/components/ui/random-letter-swap";
import { playClickSound } from "@/lib/sound";
import { RevealElement } from "@/components/RevealElement";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    setIsSubmitted(true);

    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:rihanatwork26@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="relative w-full min-h-[100svh] flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-28 pb-10 bg-transparent text-[#F4F4F4] overflow-hidden">
      {/* =========================================================================
          BIG BACKGROUND TEXT: "CONTACT ME" (Opacity 35-40%, behind glass card)
      ========================================================================= */}
      <div 
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden z-0"
        aria-hidden="true"
      >
        <span className="text-[15vw] sm:text-[13vw] font-light uppercase tracking-tighter text-[#F4F4F4] opacity-[0.38] whitespace-nowrap leading-none">
          Contact Me
        </span>
      </div>

      {/* Top spacer */}
      <div className="w-full" />

      {/* =========================================================================
          CENTER: GLASSMORPHIC CONTACT CARD
      ========================================================================= */}
      <div className="relative z-10 w-full max-w-xl mx-auto my-auto py-8">
        <RevealElement delay={0.1}>
          <div className="w-full bg-[#141416]/70 backdrop-blur-2xl border border-white/[0.12] rounded-2xl p-6 sm:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)]">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-light text-[#F4F4F4] tracking-tight uppercase">
                Let's Connect
              </h1>
              <p className="text-xs sm:text-sm text-[#F4F4F4]/60 font-light mt-1">
                Have a project idea, opportunity, or question? Send a message below.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center justify-center gap-3"
              >
                <CheckCircle2 className="w-10 h-10 text-[#F4F4F4]" />
                <h3 className="text-lg font-light uppercase tracking-wide text-[#F4F4F4]">
                  Message Prepared
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/60 max-w-sm">
                  Opening your default mail client with your details. Thank you!
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/80 hover:text-white underline underline-offset-4 cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-[#F4F4F4]/60 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full bg-black/40 border border-white/[0.08] focus:border-white/30 rounded-lg px-4 py-3 text-sm text-[#F4F4F4] placeholder:text-[#F4F4F4]/30 focus:outline-hidden transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-[#F4F4F4]/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Your email address"
                    className="w-full bg-black/40 border border-white/[0.08] focus:border-white/30 rounded-lg px-4 py-3 text-sm text-[#F4F4F4] placeholder:text-[#F4F4F4]/30 focus:outline-hidden transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-[#F4F4F4]/60 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project, timeline, or idea..."
                    className="w-full bg-black/40 border border-white/[0.08] focus:border-white/30 rounded-lg px-4 py-3 text-sm text-[#F4F4F4] placeholder:text-[#F4F4F4]/30 focus:outline-hidden transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 mt-2 bg-white text-black hover:bg-[#ECECEC] font-mono text-xs uppercase tracking-widest font-semibold rounded-lg transition-all duration-200 cursor-pointer shadow-lg hover:shadow-white/10"
                >
                  <span>Submit Message</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </form>
            )}

            {/* Direct Social Links beneath form */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-mono text-[11px] uppercase tracking-widest">
              <a
                href="mailto:rihanatwork26@gmail.com"
                onClick={playClickSound}
                className="text-[#F4F4F4]/70 hover:text-white transition-colors"
              >
                <RandomLetterSwap label="EMAIL" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-rihan-m-r"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="text-[#F4F4F4]/70 hover:text-white transition-colors"
              >
                <RandomLetterSwap label="LINKEDIN" />
              </a>
              <a
                href="https://github.com/rihan-mdk"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="text-[#F4F4F4]/70 hover:text-white transition-colors"
              >
                <RandomLetterSwap label="GITHUB" />
              </a>
              <a
                href="https://www.instagram.com/innix.exe?obrf=Y2JrcDBpaXZ2dWJu&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="text-[#F4F4F4]/70 hover:text-white transition-colors"
              >
                <RandomLetterSwap label="INSTAGRAM" />
              </a>
            </div>
          </div>
        </RevealElement>
      </div>

      {/* =========================================================================
          BOTTOM LEDGER CREDITS BAR (Exact match to reference)
      ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-end pt-8 border-t border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-[#F4F4F4]/40 z-10 relative">
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
