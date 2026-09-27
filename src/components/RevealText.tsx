"use client";

import { motion } from "framer-motion";
import React from "react";

interface RevealTextProps {
  lines: string[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}

export function RevealText({
  lines,
  className = "",
  delay = 0,
  as: Component = "h1",
}: RevealTextProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const lineVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const, // Custom smooth cubic bezier
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        className="block"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {lines.map((line, idx) => (
          <span key={idx} className="block overflow-hidden py-[0.05em]">
            <motion.span
              variants={lineVariants}
              className="block will-change-transform"
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
