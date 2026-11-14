"use client";

import Link from "next/link";
import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#101010]/80 backdrop-blur-md text-[#F4F4F4] pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.06]">
          {/* Identity */}
          <div className="md:col-span-5 space-y-2">
            <h3 className="text-sm font-mono tracking-widest uppercase text-[#F4F4F4] font-medium">
              Rihan MR
            </h3>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#F4F4F4]/40">
              EXPLORE
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/#hero" className="text-[#F4F4F4]/70 hover:text-[#F4F4F4] transition-colors">
                  INDEX
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[#F4F4F4]/70 hover:text-[#F4F4F4] transition-colors">
                  WORK
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-[#F4F4F4]/70 hover:text-[#F4F4F4] transition-colors">
                  SKILLS
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#F4F4F4]/70 hover:text-[#F4F4F4] transition-colors">
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#F4F4F4]/40">
              NETWORK
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="https://github.com/rihanmr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F4F4F4]/70 hover:text-[#F4F4F4] transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/rihanmr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F4F4F4]/70 hover:text-[#F4F4F4] transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F4F4F4]/70 hover:text-[#F4F4F4] transition-colors"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@rihanmr.dev"
                  className="text-[#F4F4F4]/70 hover:text-[#F4F4F4] transition-colors"
                >
                  Email ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F4F4F4]/40">
          <div>© 2026 Rihan MR. ALL RIGHTS RESERVED.</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#F4F4F4] transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
