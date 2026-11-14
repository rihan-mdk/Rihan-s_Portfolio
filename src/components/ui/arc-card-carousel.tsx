"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export type ArcCardItem = {
  src: string;
  alt?: string;
  /** Shown beside the flat card. Without any titles the caption is left out. */
  title?: string;
  /** A small line under the title. */
  meta?: string;
  /** Short description displayed beside the card */
  description?: string;
};

export type ArcCardCarouselProps = {
  items: ArcCardItem[];
  /** Height of the pinned stage. **Must be a definite length.** */
  height?: string;
  /** Scroll per card, as a fraction of the stage height. */
  scrollPerCard?: number;
  /** Degrees of the wheel between neighbouring cards. */
  step?: number;
  /** Card corner radius in px. */
  radius?: number;
  /** Show the number, title and meta beside the flat card. */
  caption?: boolean;
  /**
   * Scroll on forever: past the last card the wheel comes round to the first
   * again, and up past the first to the last.
   */
  loop?: boolean;
  onIndexChange?: (index: number) => void;
  ariaLabel?: string;
  className?: string;
};

// #region wheel
/** Where item `i` sits relative to the position, wrapped to [-n/2, n/2). */
export function offsetOf(i: number, pos: number, n: number): number {
  if (n <= 0) return 0;
  const d = (((i - pos) % n) + n) % n;
  return d >= n / 2 ? d - n : d;
}

/** Cards on the rim: the list repeated to at least ten, so the wrap happens off screen. */
export function ringSize(len: number): number {
  return len > 0 ? Math.ceil(10 / len) * len : 0;
}

export function wrapIndex(i: number, n: number): number {
  if (n <= 0) return 0;
  return ((Math.round(i) % n) + n) % n;
}

/**
 * Geometry configured so the whole landscape certificate is completely visible on the left,
 * with zero clipping, leaving comfortable room on the right for the title & description.
 */
export function geometry(w: number, h: number) {
  const u = Math.min(h, w / 0.47);
  const cardW = 0.36 * u;
  // Standard certificate aspect ratio ~ 1.42 ensures full certificate visibility without cropping
  const cardH = cardW / 1.42;
  return {
    cardW,
    cardH,
    radius: 0.72 * u,
    hubX: 0.27 * u - 0.72 * u,
    hubY: 0.5 * h,
  };
}

/**
 * Centre and turn (degrees) of a card `d` steps after the flat one. Later
 * cards wait above, so scrolling on rolls the wheel down.
 */
export function place(
  d: number,
  stepDeg: number,
  g: { radius: number; hubX: number; hubY: number }
) {
  const deg = -d * stepDeg;
  const a = (deg * Math.PI) / 180;
  return {
    x: g.hubX + g.radius * Math.cos(a),
    y: g.hubY + g.radius * Math.sin(a),
    rot: deg,
  };
}

/**
 * Card steps along the section.
 */
export function spans(count: number, loop: boolean): number {
  return Math.max(0, loop ? count : count - 1);
}

/** The wheel's position for a scroll progress (0-1) after `laps` trips through the section. */
export function positionAt(
  progress: number,
  laps: number,
  steps: number
): number {
  return (progress + laps) * steps;
}

/** Scroll offset inside the section that brings card `i` flat. */
export function scrollFor(
  i: number,
  steps: number,
  start: number,
  end: number
): number {
  return steps > 0 ? start + (i / steps) * (end - start) : start;
}
// #endregion

const CSS =
  ".acc-track{position:relative;background:transparent;width:100%}" +
  ".acc-stage{position:sticky;top:0;overflow:hidden;width:100%}" +
  ".acc-card{position:absolute;left:0;top:0;overflow:hidden;will-change:transform;cursor:pointer;" +
  "box-shadow:0 12px 40px rgba(0,0,0,.75),0 0 0 1px rgba(255,255,255,.12);background:#141416;transition:border-color .2s}" +
  ".acc-card:hover{box-shadow:0 16px 48px rgba(0,0,0,.85),0 0 0 1px rgba(255,255,255,.25)}" +
  ".acc-card>img{display:block;width:100%;height:100%;max-width:none;object-fit:contain;pointer-events:none;background:#0d0d0f}" +
  ".acc-card:focus-visible{outline:2px solid #ffffff;outline-offset:3px}" +
  ".acc-cap{position:absolute;right:8vw;transform:translateY(-50%);color:#F4F4F4;pointer-events:none;max-width:520px}" +
  ".acc-num{font-size:12px;letter-spacing:.14em;font-family:monospace;font-variant-numeric:tabular-nums;color:rgba(244,244,244,.45);margin:0 0 14px;text-transform:uppercase}" +
  ".acc-title{margin:0;font-size:clamp(26px,3.5vw,48px);line-height:1.08;letter-spacing:-.025em;font-weight:400;color:#F4F4F4}" +
  ".acc-meta{margin:14px 0 0;font-size:12px;font-family:monospace;letter-spacing:.12em;text-transform:uppercase;color:rgba(244,244,244,.55)}" +
  ".acc-desc{margin:16px 0 0;font-size:15px;line-height:1.65;color:rgba(244,244,244,.75);font-weight:300}" +
  ".acc-cap[data-narrow]{left:0 !important;right:0;top:auto !important;bottom:0;transform:none;padding:48px 24px 28px;" +
  "background:linear-gradient(to top,#0a0a0a calc(100% - 48px),transparent)}" +
  ".acc-cap[data-narrow] .acc-num{margin-bottom:6px}" +
  ".acc-cap[data-narrow] .acc-title{font-size:22px}" +
  ".acc-cap[data-narrow] .acc-meta{margin-top:6px;font-size:11px}" +
  ".acc-cap[data-narrow] .acc-desc{margin-top:8px;font-size:13px;line-height:1.5}" +
  ".acc-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}";

export default function ArcCardCarousel({
  items,
  height = "100svh",
  scrollPerCard = 0.6,
  step = 14,
  radius = 8,
  caption = true,
  loop = true,
  onIndexChange,
  ariaLabel = "Certificate carousel",
  className = "",
}: ArcCardCarouselProps) {
  const count = items.length;
  const n = ringSize(count);
  const cards = React.useMemo(
    () => (count > 0 ? Array.from({ length: n }, (_, i) => items[i % count]) : []),
    [items, n, count]
  );
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const stageRef = React.useRef<HTMLDivElement | null>(null);
  const capRef = React.useRef<HTMLDivElement | null>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const pos = React.useRef({ v: 0 });
  const st = React.useRef<ScrollTrigger | null>(null);
  const geo = React.useRef(geometry(1, 1));
  const [index, setIndex] = React.useState(0);
  const [narrow, setNarrow] = React.useState(false);
  const [reduced, setReduced] = React.useState(false);
  const onIndexRef = React.useRef(onIndexChange);
  onIndexRef.current = onIndexChange;
  const showCaption = caption && items.some((it) => it.title);

  const placeCaption = React.useCallback(() => {
    const cap = capRef.current;
    const el = stageRef.current;
    if (!cap || !el) return;
    const g = geo.current;
    cap.style.top = g.hubY + "px";
    cap.style.left =
      g.hubX +
      g.radius +
      g.cardW / 2 +
      Math.max(28, 0.06 * el.clientHeight) +
      "px";
  }, []);

  const render = React.useCallback(() => {
    const g = geo.current;
    const p = pos.current.v;
    for (let i = 0; i < n; i++) {
      const el = cardRefs.current[i];
      if (!el) continue;
      const d = offsetOf(i, p, n);
      const c = place(d, step, g);
      el.style.transform =
        "translate3d(" +
        (c.x - g.cardW / 2).toFixed(2) +
        "px," +
        (c.y - g.cardH / 2).toFixed(2) +
        "px,0) rotate(" +
        c.rot.toFixed(3) +
        "deg)";
      // Earlier cards (below) overlap later ones, as in the reference.
      el.style.zIndex = String(Math.round((n - d) * 10));
    }
    const now = wrapIndex(p, count);
    setIndex((prev) => (prev === now ? prev : now));
  }, [n, count, step]);

  React.useEffect(() => {
    onIndexRef.current?.(index);
  }, [index]);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  // Size: every length is a fraction of the stage height.
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const g = geometry(el.clientWidth, el.clientHeight);
      geo.current = g;
      for (const c of cardRefs.current) {
        if (!c) continue;
        c.style.width = g.cardW + "px";
        c.style.height = g.cardH + "px";
      }
      placeCaption();
      setNarrow(el.clientWidth < 0.9 * el.clientHeight || el.clientWidth < 640);
      render();
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [render, placeCaption]);

  useIsomorphicLayoutEffect(placeCaption, [showCaption, placeCaption]);

  // The page scroll rolls the wheel; letting go settles on the nearest card.
  const steps = spans(count, loop);
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track || count < 2) return;
    let laps = 0;
    let target = 0;
    const trigger = ScrollTrigger.create({
      trigger: track,
      start: "top top",
      end: "bottom bottom",
      snap: reduced
        ? undefined
        : {
            snapTo: 1 / steps,
            duration: { min: 0.5, max: 1.4 },
            delay: 0.12,
            ease: "power2.inOut",
          },
      onUpdate: (self) => {
        // Looping: the bottom of the section looks like its top, so jump there unseen.
        if (loop && self.progress >= 1 && self.direction > 0) {
          laps += 1;
          self.scroll(self.start + 1);
          return;
        }
        target = positionAt(self.progress, laps, steps);
      },
    });

    // At the very top there is no scroll left to fire onUpdate, so a wheel up wraps.
    const onWheel = (e: WheelEvent) => {
      if (!loop || e.deltaY >= 0 || trigger.scroll() > trigger.start + 1) return;
      const r = track.getBoundingClientRect();
      if (r.top > 1 || r.bottom < window.innerHeight - 1) return;
      laps -= 1;
      trigger.scroll(trigger.end - 1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    target = positionAt(trigger.progress, 0, steps);
    pos.current.v = target;

    const tick = (_t: number, dt: number) => {
      const p = pos.current.v;
      const next = reduced
        ? target
        : p + (target - p) * (1 - Math.exp(-dt / 110));
      if (Math.abs(next - p) < 1e-4 && next === target) return;
      pos.current.v = Math.abs(target - next) < 1e-4 ? target : next;
      render();
    };

    gsap.ticker.add(tick);
    st.current = trigger;
    render();

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("wheel", onWheel);
      trigger.kill();
      st.current = null;
    };
  }, [count, steps, loop, reduced, render]);

  // The caption swaps in with the flat card.
  React.useEffect(() => {
    const cap = capRef.current;
    if (!cap || reduced) return;
    const tw = gsap.fromTo(
      cap.querySelectorAll(".acc-num,.acc-title,.acc-meta,.acc-desc"),
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.05 }
    );
    return () => void tw.kill();
  }, [index, reduced]);

  const bringFlat = (i: number) => {
    const s = st.current;
    if (!s) return;
    window.scrollTo({
      top: scrollFor(i % count, steps, s.start, s.end),
      behavior: reduced ? "auto" : "smooth",
    });
  };

  if (count === 0) return null;

  const current = items[index];

  return (
    <div
      ref={trackRef}
      className={"acc-track " + className}
      style={{
        height: "calc(" + height + " * " + (1 + steps * scrollPerCard) + ")",
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <style>{CSS}</style>
      <div ref={stageRef} className="acc-stage" style={{ height }}>
        {cards.map((it, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="acc-card"
            style={{ borderRadius: radius }}
            role="button"
            tabIndex={i < count ? 0 : -1}
            aria-roledescription="slide"
            aria-label={
              (it.title ?? it.alt ?? "Certificate") +
              ", " +
              ((i % count) + 1) +
              " of " +
              count
            }
            onClick={() => bringFlat(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                bringFlat(i);
              }
            }}
          >
            <img
              src={it.src}
              alt={it.alt ?? it.title ?? "Certificate"}
              draggable={false}
              decoding="async"
            />
          </div>
        ))}

        {showCaption && current && (
          <div
            ref={capRef}
            className="acc-cap"
            data-narrow={narrow ? "" : undefined}
            style={{ zIndex: n * 20 }}
          >
            <p className="acc-num">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(count).padStart(2, "0")}
            </p>
            {current.title && <h3 className="acc-title">{current.title}</h3>}
            {current.meta && <p className="acc-meta">{current.meta}</p>}
            {current.description && (
              <p className="acc-desc">{current.description}</p>
            )}
          </div>
        )}

        <p className="acc-sr" aria-live="polite">
          {count
            ? "Card " +
              (index + 1) +
              " of " +
              count +
              (current?.title ? ": " + current.title : "")
            : ""}
        </p>
      </div>
    </div>
  );
}
