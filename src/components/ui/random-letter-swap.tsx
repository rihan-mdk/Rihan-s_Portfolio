"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, Transition } from "framer-motion";

export interface RandomLetterSwapProps {
  label: string;
  className?: string;
  staggerDuration?: number;
  transition?: Transition;
  reverse?: boolean;
  isHovered?: boolean;
}

export function RandomLetterSwap({
  label,
  className = "",
  staggerDuration = 0.025,
  transition = { duration: 0.6, type: "spring", stiffness: 350, damping: 25 },
  isHovered: controlledIsHovered,
}: RandomLetterSwapProps) {
  const [internalIsHovered, setInternalIsHovered] = useState(false);
  const isHovered = controlledIsHovered !== undefined ? controlledIsHovered : internalIsHovered;
  const [order, setOrder] = useState<number[]>([]);

  const shuffleOrder = useCallback(() => {
    const indices = Array.from({ length: label.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setOrder(indices);
  }, [label.length]);

  useEffect(() => {
    shuffleOrder();
  }, [shuffleOrder]);

  return (
    <span
      className={`relative inline-flex items-center overflow-hidden cursor-pointer select-none leading-none ${className}`}
      onMouseEnter={() => {
        shuffleOrder();
        setInternalIsHovered(true);
      }}
      onMouseLeave={() => {
        shuffleOrder();
        setInternalIsHovered(false);
      }}
    >
      {label.split("").map((char, i) => {
        const delay = (order[i] ?? i) * staggerDuration;

        return (
          <span
            key={i}
            className="relative inline-block overflow-hidden"
            style={{ minWidth: char === " " ? "0.3em" : undefined }}
          >
            {/* Primary Character: Moves up on hover */}
            <motion.span
              className="inline-block"
              animate={{ y: isHovered ? "-100%" : "0%" }}
              transition={{
                ...transition,
                delay,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>

            {/* Secondary Swapped Character: Slides in from below on hover */}
            <motion.span
              className="absolute left-0 top-0 inline-block"
              initial={{ y: "100%" }}
              animate={{ y: isHovered ? "0%" : "100%" }}
              transition={{
                ...transition,
                delay,
              }}
              aria-hidden="true"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

export default RandomLetterSwap;
