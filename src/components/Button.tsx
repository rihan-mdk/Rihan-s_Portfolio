"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  arrow?: "right" | "up-right" | "none";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  arrow = "right",
  className = "",
  type = "button",
  disabled = false,
  external = false,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2.5 text-xs font-mono tracking-widest uppercase py-3.5 px-6 transition-all duration-300 select-none cursor-pointer focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#F4F4F4] disabled:opacity-40 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-[#F4F4F4] text-[#101010] hover:bg-[#E2E2E2] active:bg-[#CCCCCC] border border-transparent font-medium",
    secondary:
      "bg-[#171717] text-[#F4F4F4] hover:bg-[#202020] border border-white/[0.12]",
    outline:
      "bg-transparent text-[#F4F4F4] border border-white/[0.15] hover:border-white/[0.4] hover:bg-white/[0.03]",
    ghost:
      "bg-transparent text-[#F4F4F4] px-0 py-2 border-b border-white/[0.2] hover:border-white hover:text-white rounded-none",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const renderArrow = () => {
    if (arrow === "right") {
      return (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      );
    }
    if (arrow === "up-right") {
      return (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      );
    }
    return null;
  };

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          aria-label={ariaLabel}
        >
          <span>{children}</span>
          {renderArrow()}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        <span>{children}</span>
        {renderArrow()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      {renderArrow()}
    </button>
  );
}
