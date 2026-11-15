"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CertificateImage {
  src: string;
  alt: string;
}

interface CertificateGalleryProps {
  images: CertificateImage[];
}

export function CertificateGallery({ images }: CertificateGalleryProps) {
  // Distribute images evenly across 3 columns
  const col0 = images.filter((_, i) => i % 3 === 0);
  const col1 = images.filter((_, i) => i % 3 === 1);
  const col2 = images.filter((_, i) => i % 3 === 2);

  const columns = [col0, col1, col2];

  return (
    <div className="relative w-full flex flex-col items-center py-28 sm:py-32 px-5 sm:px-8 md:px-14">
      <div className="mx-auto grid w-full max-w-6xl gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="grid gap-5 sm:gap-6">
            {col.map((img, idx) => (
              <AnimatedCertificate
                key={`${colIdx}-${idx}`}
                src={img.src}
                alt={img.alt}
                /* All certificates are landscape (A4-ish ratio ≈ 1.42) */
                ratio={1.42}
                delay={colIdx * 0.07 + idx * 0.04}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface AnimatedCertificateProps {
  src: string;
  alt: string;
  ratio: number;
  delay?: number;
  className?: string;
}

function AnimatedCertificate({ src, alt, ratio, delay = 0, className }: AnimatedCertificateProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      style={{ transitionDelay: `${delay}s` }}
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-white/[0.1] bg-[#141416] shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out",
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8",
        className
      )}
    >
      {/* Shimmer placeholder while loading */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#252525] to-[#1a1a1a] bg-[length:200%_100%] animate-shimmer transition-opacity duration-700",
          isLoading ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      />

      <img
        alt={alt}
        src={src}
        className={cn(
          "w-full h-full object-cover rounded-xl transition-all duration-1000 ease-in-out",
          isInView && !isLoading ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
        )}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        draggable={false}
      />

      {/* Bottom Caption Overlay */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 px-3.5 py-2.5 bg-gradient-to-t from-black/80 to-transparent transition-all duration-700 ease-out",
          isInView && !isLoading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        )}
      >
        <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#F4F4F4]/75 leading-tight line-clamp-1">
          {alt}
        </p>
      </div>
    </AspectRatio>
  );
}
