"use client";

import React from "react";
import { CertificateGallery } from "@/components/ui/certificate-gallery";
import { RevealElement } from "@/components/RevealElement";

const certificates = [
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
    <main className="relative w-full min-h-screen bg-transparent text-[#F4F4F4] select-none">
      {/* Page Header */}
      <div className="fixed top-0 left-0 right-0 z-20 pointer-events-none pt-24 sm:pt-28 pb-6 px-5 sm:px-8 md:px-14">
        <RevealElement delay={0.05}>
          <div className="max-w-6xl mx-auto flex items-end justify-between border-b border-white/[0.08] pb-4">
            <h1 className="text-xs font-mono uppercase tracking-[0.25em] text-[#F4F4F4]/50">
              Certificates &amp; Credentials
            </h1>
            <span className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/30">
              {certificates.length} items
            </span>
          </div>
        </RevealElement>
      </div>

      {/* Masonry-Style Animated Gallery */}
      <CertificateGallery images={certificates} />
    </main>
  );
}
