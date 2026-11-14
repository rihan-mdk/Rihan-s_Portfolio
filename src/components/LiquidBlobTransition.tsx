"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Smooth easing functions
function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}

function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

export function triggerBlobTransition() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("trigger-blob-transition"));
  }
}

export function LiquidBlobTransition() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isInitialLoad = useRef(true);
  const reqIdRef = useRef<number | null>(null);
  const isRunningRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: false });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const startAnimation = () => {
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current);
      }

      const isFirstTime = isInitialLoad.current;
      const startTime = performance.now();

      // Durations tuned for a calm, luxurious, and clean aesthetic
      const COUNT_DURATION = isFirstTime ? 1350 : 0;
      const EXPAND_DURATION = 560;
      const OPEN_DURATION = 600;
      const TOTAL_DURATION = COUNT_DURATION + EXPAND_DURATION + OPEN_DURATION;

      const maxR = Math.hypot(width, height) * 0.75;
      const baseR = Math.min(width, height) * 0.22;

      isRunningRef.current = true;

      const drawBlobShape = (
        context: CanvasRenderingContext2D,
        cx: number,
        cy: number,
        radius: number,
        time: number
      ) => {
        const pointsCount = 36;
        const points: { x: number; y: number }[] = [];

        for (let i = 0; i < pointsCount; i++) {
          const angle = (i / pointsCount) * Math.PI * 2;
          const w1 = Math.sin(angle * 3 + time * 1.8) * 0.08;
          const w2 = Math.cos(angle * 5 - time * 1.5) * 0.05;
          const w3 = Math.sin(angle * 2 + time * 1.2) * 0.04;
          const w4 = Math.cos(angle * 7 + time * 2.4) * 0.025;
          const r = radius * (1 + w1 + w2 + w3 + w4);

          points.push({
            x: cx + Math.cos(angle) * r,
            y: cy + Math.sin(angle) * r,
          });
        }

        context.beginPath();
        const n = points.length;
        context.moveTo((points[0].x + points[n - 1].x) / 2, (points[0].y + points[n - 1].y) / 2);
        for (let i = 0; i < n; i++) {
          const p1 = points[i];
          const p2 = points[(i + 1) % n];
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;
          context.quadraticCurveTo(p1.x, p1.y, midX, midY);
        }
        context.closePath();
      };

      const drawCausticRim = (
        context: CanvasRenderingContext2D,
        cx: number,
        cy: number,
        radius: number,
        time: number,
        opacity: number = 1
      ) => {
        if (opacity <= 0) return;
        const particleCount = 80;
        context.save();
        for (let i = 0; i < particleCount; i++) {
          const angle = (i / particleCount) * Math.PI * 2;
          const w1 = Math.sin(angle * 3 + time * 1.8) * 0.08;
          const w2 = Math.cos(angle * 5 - time * 1.5) * 0.05;
          const w3 = Math.sin(angle * 2 + time * 1.2) * 0.04;
          const w4 = Math.cos(angle * 7 + time * 2.4) * 0.025;
          const r = radius * (1 + w1 + w2 + w3 + w4);

          const jitter = (Math.sin(i * 13 + time * 5) * 0.5 + 0.5) * 3.5;
          const px = cx + Math.cos(angle) * (r + jitter);
          const py = cy + Math.sin(angle) * (r + jitter);
          const pSize = 0.8 + (Math.sin(i * 7 + time * 4) * 0.5 + 0.5) * 1.4;
          const alpha = (0.35 + (Math.cos(i * 11 + time * 5) * 0.5 + 0.5) * 0.65) * opacity;

          context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          context.beginPath();
          context.arc(px, py, pSize, 0, Math.PI * 2);
          context.fill();
        }
        context.restore();
      };

      const render = (now: number) => {
        const elapsed = now - startTime;
        const timeSec = elapsed * 0.001;
        const cx = width / 2;
        const cy = height / 2;

        ctx.clearRect(0, 0, width, height);

        if (elapsed >= TOTAL_DURATION) {
          isRunningRef.current = false;
          isInitialLoad.current = false;
          ctx.clearRect(0, 0, width, height);
          return;
        }

        if (isFirstTime) {
          // ==========================================
          // INITIAL LOAD: COUNTING + EXPAND + CLEAN OPEN
          // ==========================================
          if (elapsed < COUNT_DURATION) {
            // 1. Counting stage with center numbers and caustic blob
            const progress = Math.min(100, Math.floor((elapsed / COUNT_DURATION) * 100));
            const numStr = String(progress).padStart(2, "0");

            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, width, height);

            drawBlobShape(ctx, cx, cy, baseR, timeSec);
            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseR * 1.15);
            grad.addColorStop(0, "#18181f");
            grad.addColorStop(0.65, "#0d0d10");
            grad.addColorStop(1, "#050507");
            ctx.fillStyle = grad;
            ctx.fill();

            // Specular perimeter stroke
            ctx.save();
            ctx.lineWidth = 1.4;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
            ctx.shadowColor = "rgba(255, 255, 255, 0.75)";
            ctx.shadowBlur = 14;
            ctx.stroke();
            ctx.restore();

            // Caustic particle stipple rim
            drawCausticRim(ctx, cx, cy, baseR, timeSec, 1);

            // Centered loading number
            ctx.save();
            ctx.font = "300 13px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
            ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(numStr, cx, cy);
            ctx.restore();
          } else if (elapsed < COUNT_DURATION + EXPAND_DURATION) {
            // 2. Expand stage: blob swells to fill the entire page
            const t = (elapsed - COUNT_DURATION) / EXPAND_DURATION;
            const eased = easeInOutCubic(t);
            const currentR = baseR + (maxR - baseR) * eased;
            const fadeOutNum = Math.max(0, 1 - t * 3.5);

            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, width, height);

            drawBlobShape(ctx, cx, cy, currentR, timeSec);
            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, currentR);
            grad.addColorStop(0, "#16161c");
            grad.addColorStop(1, "#050507");
            ctx.fillStyle = grad;
            ctx.fill();

            ctx.save();
            ctx.lineWidth = 1.8;
            ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0, 1 - t * 1.5)})`;
            ctx.shadowColor = "rgba(255, 255, 255, 0.6)";
            ctx.shadowBlur = 16;
            ctx.stroke();
            ctx.restore();

            if (fadeOutNum > 0) {
              ctx.save();
              ctx.font = "300 13px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
              ctx.fillStyle = `rgba(255, 255, 255, ${fadeOutNum})`;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText("100", cx, cy);
              ctx.restore();
            }
          } else {
            // 3. Clean Open stage: aperture cuts through from center outward
            const t = (elapsed - COUNT_DURATION - EXPAND_DURATION) / OPEN_DURATION;
            const eased = easeInOutCubic(t);
            const openR = maxR * eased * 1.18;

            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, width, height);

            ctx.save();
            ctx.globalCompositeOperation = "destination-out";
            drawBlobShape(ctx, cx, cy, openR, timeSec);
            ctx.fill();
            ctx.restore();

            ctx.save();
            drawBlobShape(ctx, cx, cy, openR, timeSec);
            ctx.lineWidth = 2;
            ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0, 0.85 - t * 1.2)})`;
            ctx.shadowColor = "rgba(255, 255, 255, 0.7)";
            ctx.shadowBlur = 18;
            ctx.stroke();
            ctx.restore();
          }
        } else {
          // ==========================================
          // ROUTE TRANSITION: CLEAN SMOOTH BLOB (NO NUMBERS)
          // ==========================================
          const fillTime = EXPAND_DURATION;
          const openTime = OPEN_DURATION;

          if (elapsed < fillTime) {
            // 1. Expand blob to cover screen
            const t = elapsed / fillTime;
            const eased = easeInOutCubic(t);
            const currentR = maxR * eased * 1.15;

            drawBlobShape(ctx, cx, cy, currentR, timeSec);
            ctx.fillStyle = "#000000";
            ctx.fill();

            ctx.save();
            ctx.lineWidth = 1.6;
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.8 * (1 - t * 0.4)})`;
            ctx.shadowColor = "rgba(255, 255, 255, 0.6)";
            ctx.shadowBlur = 14;
            ctx.stroke();
            ctx.restore();
          } else {
            // 2. Cleanly open page
            const t = (elapsed - fillTime) / openTime;
            const eased = easeInOutCubic(t);
            const openR = maxR * eased * 1.18;

            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, width, height);

            ctx.save();
            ctx.globalCompositeOperation = "destination-out";
            drawBlobShape(ctx, cx, cy, openR, timeSec);
            ctx.fill();
            ctx.restore();

            ctx.save();
            drawBlobShape(ctx, cx, cy, openR, timeSec);
            ctx.lineWidth = 2;
            ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0, 0.85 - t * 1.2)})`;
            ctx.shadowColor = "rgba(255, 255, 255, 0.7)";
            ctx.shadowBlur = 16;
            ctx.stroke();
            ctx.restore();
          }
        }

        reqIdRef.current = requestAnimationFrame(render);
      };

      reqIdRef.current = requestAnimationFrame(render);
    };

    startAnimation();

    const handleCustomTrigger = () => {
      startAnimation();
    };

    window.addEventListener("trigger-blob-transition", handleCustomTrigger);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("trigger-blob-transition", handleCustomTrigger);
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
    };
  }, [pathname]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none select-none"
      aria-hidden="true"
    />
  );
}

export default LiquidBlobTransition;
