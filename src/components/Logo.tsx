import React from "react";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-label="Mohammad Rihan MR Monogram"
    >
      <rect width="100" height="100" rx="0" fill="#101010" />
      <text
        x="14"
        y="62"
        fontFamily="'Geist', 'Inter', -apple-system, sans-serif"
        fontSize="34"
        fontWeight="800"
        fill="#F4F4F4"
        letterSpacing="-0.08em"
      >
        MR
      </text>
      <circle cx="82" cy="58" r="4.5" fill="#F4F4F4" />
    </svg>
  );
}
