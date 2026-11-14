"use client";

import React from "react";
import LiquidMetalShader from "@/components/ui/liquid-metal-shader";

export function LiquidMetalBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-20 w-screen h-screen overflow-hidden pointer-events-none select-none"
    >
      <LiquidMetalShader
        className="w-full h-full opacity-90 transition-opacity duration-700"
        baseColor="#101117"
        metalColor="#545a6e"
        highlightColor="#e5ebf8"
        distortion={0.78}
        scale={0.92}
        speed={0.48}
        pixelRatio={1.4}
      />
      {/* Very subtle edge vignette to keep corners deep while letting the interactive shades shine through */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(16,16,16,0.55)_100%)] pointer-events-none" />
    </div>
  );
}

export default LiquidMetalBackground;
