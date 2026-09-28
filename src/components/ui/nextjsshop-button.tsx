"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NextjsShopButtonProps {
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export const NextjsShopButton = ({
  href = "#",
  children,
  icon,
  variant = "primary",
  className = "",
  onClick,
  target,
  rel,
}: NextjsShopButtonProps) => {
  // Seed random index values on client mount to avoid hydration mismatch
  const [pixelsRight, setPixelsRight] = useState<number[]>([]);
  const [pixelsOverlay, setPixelsOverlay] = useState<number[]>([]);

  useEffect(() => {
    setPixelsRight([...Array(25)].map(() => Math.floor(Math.random() * 4)));
    setPixelsOverlay([...Array(11)].map(() => 4 + Math.floor(Math.random() * 4)));
  }, []);

  const textString = typeof children === "string" ? children : undefined;

  const buttonContent = (
    <>
      <span className="button01_bg">
        <span className="button01_bg-mid"></span>
        <span className="button01_bg-right">
          {(pixelsRight.length ? pixelsRight : [...Array(25)].map((_, i) => i % 4)).map((idxVal, index) => (
            <span
              key={`pixel-${index}`}
              style={{ "--index": idxVal } as React.CSSProperties}
              className="button01_bg-pixel"
            ></span>
          ))}
        </span>
        <span className="button01_bg-right-overlay">
          {(pixelsOverlay.length ? pixelsOverlay : [...Array(11)].map((_, i) => 4 + (i % 4))).map((idxVal, index) => (
            <span
              key={`overlay-${index}`}
              style={{ "--index": idxVal } as React.CSSProperties}
              className="button01_bg-pixel"
            ></span>
          ))}
        </span>
      </span>

      <span
        data-text={textString}
        className="button01_inner"
      >
        <span className="button01_text flex items-center gap-2.5">
          <span>{children}</span>
          {icon && <span className="button01_icon transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
        </span>
      </span>
    </>
  );

  const baseClasses = `button01 button01--${variant} ${className}`;

  if (href.startsWith("http") || target === "_blank") {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={baseClasses}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={baseClasses}>
      {buttonContent}
    </Link>
  );
};

// Exact export from 21st dev prompt
export const Button01 = () => {
  return (
    <a href="#" className="button01 button01--primary">
      <span className="button01_bg">
        <span className="button01_bg-mid"></span>
        <span className="button01_bg-right">
          {[...Array(25)].map((_, index) => (
            <span
              key={`pixel-${index}`}
              style={{ "--index": Math.floor(Math.random() * 4) } as React.CSSProperties}
              className="button01_bg-pixel"
            ></span>
          ))}
        </span>
        <span className="button01_bg-right-overlay">
          {[...Array(11)].map((_, index) => (
            <span
              key={`overlay-${index}`}
              style={{ "--index": 4 + Math.floor(Math.random() * 4) } as React.CSSProperties}
              className="button01_bg-pixel"
            ></span>
          ))}
        </span>
      </span>
      <span data-text="Nextjsshop" className="button01_inner">
        <span className="button01_text">Nextjsshop</span>
      </span>
    </a>
  );
};

export default NextjsShopButton;
