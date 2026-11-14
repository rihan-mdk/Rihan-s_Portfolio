"use client";

import LiquidMetalShader from "@/components/ui/liquid-metal-shader";

export default function LiquidMetalShaderDemo() {
  return (
    <div className="relative h-screen w-full">
      <LiquidMetalShader className="absolute inset-0" />
    </div>
  );
}
