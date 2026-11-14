"use client";

import React from "react";
import TumbleDeckShowcase, { type TumbleCard } from "@/components/ui/tumble-deck-showcase";

const certificateCards: TumbleCard[] = [
  {
    src: "/images/1.jpeg",
    alt: "Machine Learning Specialization — DeepLearning.AI · Stanford Online · 2024",
  },
  {
    src: "/images/2.jpeg",
    alt: "Deep Learning Specialization — Coursera · DeepLearning.AI · 2024",
  },
  {
    src: "/images/3.jpeg",
    alt: "Python for Data Science & AI — IBM · Coursera · 2023",
  },
  {
    src: "/images/4.jpeg",
    alt: "Full Stack Web Development — Udemy · Complete Bootcamp · 2023",
  },
  {
    src: "/images/5.jpeg",
    alt: "TensorFlow Developer Certificate — Google · TensorFlow · 2024",
  },
  {
    src: "/images/6.jpeg",
    alt: "Computer Vision & Image Processing — Coursera · 2024",
  },
  {
    src: "/images/7.jpeg",
    alt: "Natural Language Processing — Hugging Face · DeepLearning.AI · 2025",
  },
  {
    src: "/images/8.jpeg",
    alt: "Cloud Computing Fundamentals — AWS · 2025",
  },
];

export default function CertificatesPage() {
  return (
    <main className="relative w-full h-[100svh] overflow-hidden bg-transparent select-none">
      {/* Interactive Tumble Deck Showcase */}
      <TumbleDeckShowcase
        cards={certificateCards}
        height="100svh"
        aspect={1.42}
        depth={5}
        scrollPerCard={220}
        background="transparent"
        ariaLabel="Certificates tumble deck showcase"
      />

      {/* Bottom Minimal Hint */}
      <div className="fixed bottom-8 left-0 right-0 z-30 pointer-events-none flex justify-center">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#F4F4F4]/30 px-4 py-1.5 rounded-full border border-white/[0.06] bg-[#101012]/40 backdrop-blur-sm">
          Scroll, drag or click to tumble through
        </span>
      </div>
    </main>
  );
}
