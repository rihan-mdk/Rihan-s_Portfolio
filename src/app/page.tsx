"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { RevealElement } from "@/components/RevealElement";
import { NextjsShopButton } from "@/components/ui/nextjsshop-button";
import { TextRoll } from "@/components/ui/text-roll";
import { RandomLetterSwap } from "@/components/ui/random-letter-swap";
import { playClickSound } from "@/lib/sound";

const loopingLines = [
  "FROM THOUGHT TO THING.",
  "INTELLIGENCE, BUILT",
  "INTELLIGENCE, IN MOTION.",
  "IMAGINE. THEN BUILD.",
];

export default function HomePage() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const featuredProjects = projects.slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLineIndex((prev) => (prev + 1) % loopingLines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="w-full flex flex-col bg-transparent text-[#F4F4F4]">
      {/* =========================================================================
          01. HERO SECTION (Minimalist Editorial Monolith - 1 Viewport)
      ========================================================================= */}
      <section
        id="hero"
        className="relative w-full h-screen min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        {/* Core Hero Content */}
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col justify-center max-w-5xl my-auto py-12"
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <motion.h1
              variants={heroItemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-7xl font-light tracking-tight text-[#F4F4F4] leading-[1.08] select-none"
            >
              Hi, I'm Rihan.
            </motion.h1>

            <motion.p
              variants={heroItemVariants}
              className="text-xs sm:text-sm md:text-base font-mono tracking-[0.22em] text-[#F4F4F4]/70 uppercase font-light"
            >
              AI & ML STUDENT  • WEB DEVELOPER
            </motion.p>

            <div className="mt-4 min-h-[1.4em] flex items-center overflow-hidden">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide text-[#F4F4F4]/80 uppercase leading-none font-mono">
                <TextRoll
                  key={currentLineIndex}
                  duration={0.4}
                  getEnterDelay={(i) => i * 0.03}
                  getExitDelay={(i) => i * 0.03 + 0.1}
                >
                  {loopingLines[currentLineIndex]}
                </TextRoll>
              </span>
            </div>

            <motion.p
              variants={heroItemVariants}
              className="text-sm sm:text-base md:text-lg text-[#F4F4F4]/75 font-light leading-relaxed max-w-2xl mt-2 tracking-wide"
            >
              Exploring ideas through technology, designing meaningful experiences, and building things that make a difference.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            variants={heroItemVariants}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mt-10"
          >
            <NextjsShopButton
              href="/work"
              variant="primary"
              className="px-8 py-4 font-mono text-xs uppercase tracking-widest font-medium"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Explore My Work
            </NextjsShopButton>
            <NextjsShopButton
              href="/contact"
              variant="secondary"
              className="px-8 py-4 font-mono text-xs uppercase tracking-widest font-medium"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Contact
            </NextjsShopButton>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================================
          02. SELECTED WORK SPOTLIGHT (Editorial Ledger Rows from Stitch)
      ========================================================================= */}
      <section className="w-full bg-[#121212]/60 backdrop-blur-md py-24 sm:py-32 border-t border-b border-white/[0.08]" id="work">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          {/* Section Header */}
          <RevealElement>
            <div className="w-full pb-10 border-b border-white/[0.08] mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F4] uppercase tracking-editorial">
                SELECTED WORKS
              </h2>
            </div>
          </RevealElement>

          {/* Work Ledger Stack */}
          <div className="w-full flex flex-col gap-10">
            {featuredProjects.map((project, idx) => (
              <RevealElement key={project.slug} delay={idx * 0.08}>
                <article className="group w-full bg-[#141416]/80 backdrop-blur-md p-6 sm:p-8 md:p-10 border border-white/[0.06] transition-all duration-300 hover:border-white/[0.2]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#F4F4F4]/30 uppercase tracking-widest">
                          {project.number}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#F4F4F4] uppercase tracking-editorial">
                        {project.name}
                      </h3>

                      <p className="text-sm sm:text-base text-[#F4F4F4]/70 font-light max-w-xl leading-relaxed">
                        {project.tagline}
                      </p>

                      <div className="flex items-center gap-6 pt-2 font-mono text-xs uppercase tracking-widest flex-wrap">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[#F4F4F4] hover:text-[#F4F4F4]/60 transition-colors"
                          >
                            <span>Website</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[#F4F4F4]/70 hover:text-white transition-colors"
                          >
                            <span>GitHub</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-1.5 text-[#F4F4F4]/50 hover:text-white transition-colors"
                        >
                          <span>Know More</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Real Project Image */}
                    <div className="lg:col-span-5 relative w-full aspect-[16/10] bg-[#101010] border border-white/[0.08] overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#F4F4F4]/20 text-xs font-mono uppercase tracking-widest">
                          {project.name}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </RevealElement>
            ))}
          </div>

          {/* View All Link */}
          <div className="w-full pt-12 flex justify-end">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F4F4F4] hover:text-[#F4F4F4]/70 transition-colors"
            >
              <span>View All Work ({projects.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03. SPLIT EDITORIAL ABOUT SECTION
      ========================================================================= */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-24 sm:py-32" id="about">
        <RevealElement>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column: Side Heading */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <h3 className="text-xl sm:text-2xl font-light uppercase tracking-editorial text-[#F4F4F4]">
                ABOUT ME
              </h3>
            </div>

            {/* Right Column: Statement & Link to About Page */}
            <div className="lg:col-span-8 flex flex-col justify-center gap-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#F4F4F4] leading-relaxed tracking-editorial">
                &ldquo;I&apos;m an AI &amp; ML engineering student who loves building web dev , exploring creative ideas, and bringing them to life. From e-commerce platforms to intelligent systems, I enjoy creating things that make a difference.&rdquo;
              </h2>

              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-widest text-[#F4F4F4]/80 hover:text-white transition-colors group"
                >
                  <span>Want to know more about me ?</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </RevealElement>
      </section>

      {/* =========================================================================
          04. EDITORIAL CALL TO ACTION & INQUIRE / FOOTER LEDGER
      ========================================================================= */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-28 pb-16 sm:pb-20" id="inquire">
        <RevealElement>
          <div className="w-full flex flex-col gap-12 sm:gap-16">
            {/* 1. Lets talk... text (link to /contact / inquire) */}
            <div className="w-full text-center py-6">
              <Link
                href="/inquire"
                onClick={playClickSound}
                className="group inline-block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase tracking-editorial text-[#F4F4F4] leading-[1.08] hover:text-white transition-colors"
              >
                HAVE SOMETHING IN MIND? LET&apos;S TALK ↗
              </Link>
            </div>

            {/* 2. Centered Social Links with letter switching animation & click sound */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 font-mono text-xs sm:text-sm uppercase tracking-widest">
              <a
                href="https://www.linkedin.com/in/mohammad-rihan-m-r"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="text-[#F4F4F4]/70 hover:text-white transition-colors select-none"
              >
                <RandomLetterSwap label="LinkedIn" />
              </a>
              <a
                href="https://github.com/rihan-mdk"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="text-[#F4F4F4]/70 hover:text-white transition-colors select-none"
              >
                <RandomLetterSwap label="GitHub" />
              </a>
              <a
                href="https://www.instagram.com/innix.exe?obrf=Y2JrcDBpaXZ2dWJu&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="text-[#F4F4F4]/70 hover:text-white transition-colors select-none"
              >
                <RandomLetterSwap label="Instagram" />
              </a>
              <a
                href="mailto:rihanatwork26@gmail.com"
                onClick={playClickSound}
                className="text-[#F4F4F4]/70 hover:text-white transition-colors select-none"
              >
                <RandomLetterSwap label="Email" />
              </a>
            </div>

            {/* 3. Bottom Ledger Info Bar (Matching reference image) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end pt-12 border-t border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-[#F4F4F4]/45">
              {/* Left: all rights reserved "Rihan@2026" */}
              <div className="flex flex-col gap-1">
                <span className="text-[#F4F4F4] font-medium">RIHAN@2026</span>
                <span>ALL RIGHTS RESERVED</span>
              </div>

              {/* Center: say hello "rihanatwork26@gmail.com" */}
              <div className="flex flex-col gap-1 md:text-center">
                <span>SAY HELLO</span>
                <a
                  href="mailto:rihanatwork26@gmail.com"
                  onClick={playClickSound}
                  className="text-[#F4F4F4] hover:text-white transition-colors font-mono tracking-wider lowercase"
                >
                  rihanatwork26@gmail.com
                </a>
              </div>

              {/* Right: site by "Muhammed Rihan MR" */}
              <div className="flex flex-col gap-1 md:text-right">
                <span>SITE BY</span>
                <span className="text-[#F4F4F4] font-medium">Muhammed Rihan MR</span>
              </div>
            </div>
          </div>
        </RevealElement>
      </section>
    </div>
  );
}
