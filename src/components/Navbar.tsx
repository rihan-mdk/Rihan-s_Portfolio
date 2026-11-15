"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { RandomLetterSwap } from "@/components/ui/random-letter-swap";
import { playClickSound } from "@/lib/sound";

const menuItems = [
  { label: "Index", href: "/#hero" },
  { label: "Work", href: "/work" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* =========================================================================
          TOP MINIMAL HEADER (Menu | Portfolio | Connect)
      ========================================================================= */}
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#101010]/70 backdrop-blur-md border-b border-white/[0.06] py-4"
            : "bg-transparent border-b border-transparent py-6 sm:py-8"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 flex items-center justify-between">
          {/* LEFT: MENU TEXT LINK */}
          <div className="flex-1 flex justify-start">
            <button
              onClick={() => {
                playClickSound();
                setIsMenuOpen((prev) => !prev);
              }}
              className="group inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-[#F4F4F4]/80 hover:text-white transition-colors cursor-pointer select-none focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMenuOpen}
            >
              <span className="relative">
                MENU
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </span>
            </button>
          </div>

          {/* MIDDLE: RIHAN MR WITH LETTER-SWAP ANIMATION */}
          <div className="flex-1 flex justify-center text-center">
            <Link
              href="/"
              onClick={() => {
                playClickSound();
              }}
              className="inline-flex items-center font-mono text-xs uppercase tracking-widest text-[#F4F4F4] hover:text-white transition-colors select-none focus:outline-hidden"
            >
              <RandomLetterSwap
                label="RIHAN MR"
                staggerDuration={0.025}
                transition={{ duration: 0.6, type: "spring", stiffness: 350, damping: 25 }}
              />
            </Link>
          </div>

          {/* RIGHT: CONTACT LINK */}
          <div className="flex-1 flex justify-end">
            <Link
              href="/contact"
              onClick={() => {
                playClickSound();
              }}
              className="group inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-[#F4F4F4]/80 hover:text-white transition-colors select-none focus:outline-hidden"
            >
              <RandomLetterSwap
                label="CONTACT"
                staggerDuration={0.025}
                transition={{ duration: 0.6, type: "spring", stiffness: 350, damping: 25 }}
              />
            </Link>
          </div>
        </div>
      </header>

      {/* =========================================================================
          EDITORIAL WHITE FLOATING MENU CARD (Reference Image Layout)
      ========================================================================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Ambient subtle backdrop dismissal layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/35 backdrop-blur-[2px]"
              aria-hidden="true"
            />

            {/* The Crisp White Editorial Floating Card */}
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.94, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -8 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] as const }}
              className="fixed top-5 left-5 sm:top-8 sm:left-10 z-50 w-[240px] sm:w-[270px] min-h-[340px] sm:min-h-[380px] bg-white text-black rounded-lg sm:rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_24px_50px_rgba(0,0,0,0.45)] select-none"
              role="dialog"
              aria-modal="true"
            >
              {/* TOP: CLOSE TEXT ACTION */}
              <div className="w-full flex justify-start">
                <button
                  onClick={() => {
                    playClickSound();
                    setIsMenuOpen(false);
                  }}
                  className="font-mono text-xs uppercase tracking-widest text-black/75 hover:text-black font-semibold transition-colors cursor-pointer select-none focus:outline-hidden"
                  aria-label="Close menu"
                >
                  CLOSE
                </button>
              </div>

              {/* BOTTOM: STACKED EDITORIAL LINKS WITH REDUCED FONT & LETTER SWITCHING */}
              <nav className="flex flex-col items-end gap-2 sm:gap-2.5 text-right">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        playClickSound();
                        setIsMenuOpen(false);
                        if (item.label === "Index") {
                          const hero = document.getElementById("hero");
                          if (hero) {
                            hero.scrollIntoView({ behavior: "smooth" });
                          } else {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }
                      }}
                      className={`group inline-flex items-center py-0.5 text-base sm:text-lg font-medium tracking-tight transition-all duration-200 ${
                        isActive
                          ? "text-black font-semibold underline underline-offset-4 decoration-black/40"
                          : "text-black/80 hover:text-black hover:translate-x-[-2px]"
                      }`}
                    >
                      <RandomLetterSwap
                        label={item.label}
                        staggerDuration={0.02}
                        transition={{ duration: 0.5, type: "spring", stiffness: 350, damping: 25 }}
                      />
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
