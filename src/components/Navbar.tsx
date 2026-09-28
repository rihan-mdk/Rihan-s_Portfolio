"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { RandomLetterSwap } from "@/components/ui/random-letter-swap";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Lab", href: "/lab" },
  { label: "Skills", href: "/skills" },
  { label: "Journey", href: "/journey" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#101010]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* LEFT: BRAND MONOGRAM & IDENTITY */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 text-xs font-mono tracking-widest text-[#F4F4F4] focus:outline-hidden"
          >
            <div className="h-8 w-8 rounded-xs overflow-hidden border border-white/[0.15] bg-[#141414] flex items-center justify-center shrink-0">
              <Logo className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#F4F4F4] font-semibold leading-tight transition-colors duration-200 group-hover:text-white">
                MOHAMMAD RIHAN MR
              </span>
              <span className="font-mono text-[10px] uppercase text-[#F4F4F4]/50 tracking-wider leading-tight transition-colors duration-200 group-hover:text-[#F4F4F4]/80">
                AI/ML • CREATIVE TECH
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV: RANDOM LETTER SWAP */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-1 group/nav"
                >
                  <div
                    className={`inline-block uppercase transition-colors duration-200 ${
                      isActive
                        ? "text-white font-medium"
                        : "text-[#F4F4F4]/60 group-hover/nav:text-white"
                    }`}
                  >
                    <RandomLetterSwap
                      label={link.label}
                      staggerDuration={0.025}
                      transition={{ duration: 0.6, type: "spring" }}
                    />
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[#F4F4F4]"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RESUME PILL BUTTON */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/[0.12] bg-[#171717] hover:bg-[#202020] hover:border-white/[0.3] text-[#F4F4F4] hover:text-white text-xs font-mono uppercase tracking-widest transition-colors duration-200 group/resume"
            >
              <RandomLetterSwap
                label="Resume"
                staggerDuration={0.025}
                transition={{ duration: 0.6, type: "spring" }}
              />
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F4F4F4]/70 transition-transform duration-200 group-hover/resume:translate-x-0.5" />
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              className="p-2 text-[#F4F4F4] hover:opacity-70 transition-opacity focus:outline-hidden"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULLSCREEN OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 z-30 bg-[#101010] flex flex-col justify-between px-8 py-24 md:hidden"
          >
            <nav className="flex flex-col space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F4F4F4]/40">
                NAVIGATION
              </span>
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group/mobile"
                  >
                    <div
                      className={`text-3xl font-light tracking-editorial transition-colors duration-200 flex items-center ${
                        isActive
                          ? "text-white"
                          : "text-[#F4F4F4]/60 group-hover/mobile:text-white"
                      }`}
                    >
                      <span className="text-xs font-mono text-[#F4F4F4]/40 mr-4">
                        0{idx + 1}
                      </span>
                      <RandomLetterSwap
                        label={link.label}
                        staggerDuration={0.025}
                        transition={{ duration: 0.6, type: "spring" }}
                      />
                    </div>
                  </Link>
                );
              })}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-editorial text-[#F4F4F4]/70 hover:text-white flex items-center gap-2 pt-2 transition-colors duration-200 group/mobresume"
              >
                <RandomLetterSwap
                  label="RESUME"
                  staggerDuration={0.025}
                  transition={{ duration: 0.6, type: "spring" }}
                />
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/mobresume:translate-x-0.5" />
              </a>
            </nav>

            <div className="border-t border-white/[0.08] pt-6 flex flex-col gap-2 text-xs font-mono text-[#F4F4F4]/40">
              <span>MOHAMMAD RIHAN MR</span>
              <span>AI / ML • CREATIVE TECHNOLOGY</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
