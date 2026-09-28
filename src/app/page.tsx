"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { WovenCanvas } from "@/components/ui/woven-light-hero";
import { RevealElement } from "@/components/RevealElement";
import { VisualArtifact } from "@/components/VisualArtifact";
import { NextjsShopButton } from "@/components/ui/nextjsshop-button";
import { TextRoll } from "@/components/ui/text-roll";

const loopingLines = [
  "INTELLIGENCE, BUILT",
  "INTELLIGENCE, IN MOTION.",
  "IMAGINE. THEN BUILD.",
  "FROM THOUGHT TO THING.",
];

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const featuredProjects = projects.slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLineIndex((prev) => (prev + 1) % loopingLines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@rihanmr.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <div className="w-full flex flex-col bg-[#101010] text-[#F4F4F4]">
      {/* =========================================================================
          01. HERO SECTION (Editorial Monolith with 21st dev Woven Canvas)
      ========================================================================= */}
      <section className="relative w-full min-h-[90vh] md:min-h-[94vh] flex flex-col justify-between pt-28 sm:pt-32 pb-10 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* 21st dev Three.js Woven Light Particle Mesh Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
          <WovenCanvas />
        </div>

        {/* Ambient Top Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#101010]/30 via-transparent to-[#101010] pointer-events-none z-1" />

        {/* Core Hero Content */}
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col justify-center max-w-5xl my-auto py-16 sm:py-24"
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#F4F4F4] uppercase leading-[0.95] select-none">
              HI, IAM MOHAMMAD RIHAN
            </h1>

            <div className="min-h-[1.4em] flex items-center overflow-hidden">
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F4F4]/80 uppercase leading-none font-mono">
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
          </div>

          <motion.p
            variants={heroItemVariants}
            className="mt-8 text-lg sm:text-xl md:text-2xl text-[#F4F4F4]/70 max-w-2xl font-light leading-relaxed"
          >
            AI/ML engineer building intelligent products, thoughtful interfaces and experimental digital experiences.
          </motion.p>

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
              View Work
            </NextjsShopButton>
            <NextjsShopButton
              href="/contact"
              variant="secondary"
              className="px-8 py-4 font-mono text-xs uppercase tracking-widest font-medium"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Get in Touch
            </NextjsShopButton>
          </motion.div>
        </motion.div>

        {/* Bottom Scroll Indicator Bar */}
        <div className="relative z-10 w-full flex items-center justify-between pt-6 border-t border-white/[0.06] text-[#F4F4F4]/40 font-mono text-[11px] uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span>Scroll to Explore</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>Archive Vol. 03</span>
            <span>•</span>
            <span>Precision Engineering</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02. SELECTED WORK SPOTLIGHT (Editorial Ledger Rows from Stitch)
      ========================================================================= */}
      <section className="w-full bg-[#121212] py-24 sm:py-32 border-t border-b border-white/[0.08]" id="work">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          {/* Section Header */}
          <RevealElement>
            <div className="w-full flex flex-col md:flex-row md:items-end justify-between pb-12 gap-4 border-b border-white/[0.08] mb-12">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#F4F4F4]/45">
                  01 / ARCHIVE [03 EDITIONS]
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F4] uppercase tracking-editorial">
                  A FEW THINGS I&apos;VE BUILT.
                </h2>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#F4F4F4]/40">
                INDEX // 2024—2026
              </span>
            </div>
          </RevealElement>

          {/* Work Ledger Stack */}
          <div className="w-full flex flex-col gap-10">
            {featuredProjects.map((project, idx) => (
              <RevealElement key={project.slug} delay={idx * 0.08}>
                <article className="group w-full bg-[#151515] p-6 sm:p-8 md:p-10 border border-white/[0.06] transition-all duration-300 hover:border-white/[0.2]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                      <div className="flex items-center gap-3 font-mono text-[11px] text-[#F4F4F4]/40 uppercase tracking-wider">
                        <span className="text-[#F4F4F4] font-semibold">{project.number}</span>
                        <span>/</span>
                        <span>{project.year}</span>
                        <span>/</span>
                        <span className="text-[#F4F4F4]/60">{project.category}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#F4F4F4] uppercase tracking-editorial group-hover:translate-x-1 transition-transform">
                        {project.name}
                      </h3>

                      <p className="text-sm sm:text-base text-[#F4F4F4]/70 font-light max-w-xl leading-relaxed">
                        {project.tagline}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-[#191919] border border-white/[0.08] text-[#F4F4F4]/70 font-mono text-[10px] uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4">
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F4F4F4] hover:text-[#F4F4F4]/70 transition-colors"
                        >
                          <span>View Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Schematic Visual Preview Box */}
                    <div className="lg:col-span-5 relative w-full aspect-[16/10] bg-[#101010] border border-white/[0.08] overflow-hidden">
                      <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]">
                        <VisualArtifact
                          theme={project.visualTheme}
                          badgeText={`${project.number} // ${project.year}`}
                        />
                      </div>
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
          03. SPLIT EDITORIAL ABOUT SECTION (From Stitch)
      ========================================================================= */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-24 sm:py-32" id="about">
        <RevealElement>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#F4F4F4]/40">
                02 / PROFILE
              </span>
              <div className="flex flex-col gap-1 font-mono text-xs text-[#F4F4F4]/50 leading-relaxed">
                <span className="text-[#F4F4F4] font-medium">B.TECH AI &amp; ML &apos;26</span>
                <span>Mangalore, Karnataka, India</span>
                <span className="text-[#F4F4F4]/40">Yenepoya Institute of Technology</span>
                <span className="text-[#F4F4F4]/30 pt-1">Open to Global Research Nodes</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#F4F4F4] leading-tight tracking-editorial">
                &ldquo;I&apos;m an AI &amp; ML engineering student interested in intelligent systems, product design and building useful things for the web.&rdquo;
              </h2>
              <p className="text-sm sm:text-base text-[#F4F4F4]/65 leading-relaxed font-light max-w-3xl">
                Focusing on the convergence of deep learning architectures and visceral frontend software. Constantly refining the friction point between complex algorithms and humane user agency.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F4F4F4] hover:text-[#F4F4F4]/70 transition-colors"
                >
                  <span>Read Full Bio &amp; Research</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </RevealElement>
      </section>

      {/* =========================================================================
          04. CURRENT RADAR & FOCUS (3-Column Minimalist Grid from Stitch)
      ========================================================================= */}
      <section className="w-full bg-[#121212] py-20 sm:py-28 border-t border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <RevealElement>
            <div className="w-full pb-8 flex items-center justify-between border-b border-white/[0.06] mb-8">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#F4F4F4]/50">
                03 / ACTIVE INQUIRY &amp; RADAR
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#F4F4F4]/40">
                Q2 2026 FOCUS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="flex flex-col justify-between gap-6 bg-[#161616] p-8 border border-white/[0.06] min-h-[220px]">
                <div className="flex items-center justify-between font-mono text-xs uppercase text-[#F4F4F4]/40">
                  <span className="text-[#F4F4F4] font-medium">AI / ML</span>
                  <span>01</span>
                </div>
                <p className="text-sm text-[#F4F4F4]/70 font-light leading-relaxed">
                  Building &amp; experimenting with multimodal vision models &amp; low-rank adaptation pipelines for edge devices.
                </p>
                <span className="mt-auto font-mono text-[11px] text-[#F4F4F4]/40">
                  LoRA • PEFT • Vision-Language
                </span>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col justify-between gap-6 bg-[#161616] p-8 border border-white/[0.06] min-h-[220px]">
                <div className="flex items-center justify-between font-mono text-xs uppercase text-[#F4F4F4]/40">
                  <span className="text-[#F4F4F4] font-medium">WEB</span>
                  <span>02</span>
                </div>
                <p className="text-sm text-[#F4F4F4]/70 font-light leading-relaxed">
                  Designing digital products with extreme typographic craft and tactile micro-interactions that feel immediate and weightless.
                </p>
                <span className="mt-auto font-mono text-[11px] text-[#F4F4F4]/40">
                  Typography • Shaders • Interaction
                </span>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col justify-between gap-6 bg-[#161616] p-8 border border-white/[0.06] min-h-[220px]">
                <div className="flex items-center justify-between font-mono text-xs uppercase text-[#F4F4F4]/40">
                  <span className="text-[#F4F4F4] font-medium">LEARNING</span>
                  <span>03</span>
                </div>
                <p className="text-sm text-[#F4F4F4]/70 font-light leading-relaxed">
                  Exploring tool-use reasoning loops, autonomous agent architectures, and distributed systems consensus models.
                </p>
                <span className="mt-auto font-mono text-[11px] text-[#F4F4F4]/40">
                  Agentic Workflows • Distributed Eval
                </span>
              </div>
            </div>
          </RevealElement>
        </div>
      </section>

      {/* =========================================================================
          05. EDITORIAL CALL TO ACTION (From Stitch)
      ========================================================================= */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-28 sm:py-40" id="contact">
        <RevealElement>
          <div className="w-full flex flex-col gap-10">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-[#F4F4F4]/40">
              <span>04 / DISPATCH</span>
              <span>—</span>
              <span>OPEN FOR COLLAB &amp; RESEARCH</span>
            </div>

            <div className="w-full">
              <Link
                href="/contact"
                className="group block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-editorial text-[#F4F4F4] leading-[0.94] hover:text-[#F4F4F4]/80 transition-colors"
              >
                HAVE SOMETHING IN MIND? LET&apos;S TALK ↗
              </Link>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-white/[0.08]">
              {/* Copy Email Pill Button */}
              <button
                onClick={copyEmail}
                className="px-6 py-3.5 bg-[#F4F4F4] text-[#101010] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#E2E2E2] transition-colors inline-flex items-center gap-2.5 cursor-pointer w-fit"
              >
                <span>{copied ? "COPIED TO CLIPBOARD" : "CONTACT@RIHANMR.DEV"}</span>
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              </button>

              {/* Quick Protocol Links */}
              <div className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-wider text-[#F4F4F4]/50">
                <a
                  href="https://linkedin.com/in/rihanmr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F4F4F4] transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/rihanmr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F4F4F4] transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F4F4F4] transition-colors"
                >
                  Resume ↗
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F4F4F4] transition-colors"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>
        </RevealElement>
      </section>
    </div>
  );
}
