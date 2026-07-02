"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Flashlight-style hover reveal of technology names across the hero.
 * Purely decorative: pointer-events are disabled and the layer is
 * hidden from assistive tech and from touch / coarse-pointer devices.
 *
 * Perf: the pointer is tracked with MotionValues and every label derives
 * opacity / blur / scale through useTransform, so mouse movement never
 * triggers a React re-render — only compositor-friendly style updates.
 */

interface TechItem {
  label: string;
  /** Horizontal position as a percentage of the hero width. */
  x: number;
  /** Vertical position as a percentage of the hero height. */
  y: number;
  /** Slight rotation (deg) for visual rhythm. */
  rotate: number;
  /** Font size in px, lightly varied per item. */
  size: number;
}

interface ContainerSize {
  width: number;
  height: number;
}

/** Radius (px) around the cursor inside which labels become visible. */
const REVEAL_RADIUS = 160;
/** Labels never exceed this opacity, keeping them ghost-like. */
const MAX_OPACITY = 0.7;
/** Blur applied when a label is fully hidden. */
const HIDDEN_BLUR_PX = 10;
/** Sentinel far away from the hero so everything stays hidden. */
const OFFSCREEN = -9999;
/** Fixed opacity for the static reduced-motion variant. */
const STATIC_OPACITY = 0.35;

/**
 * Positions hug the edges and the horizontal bands above / below the
 * headline block, keeping the central text + CTAs untouched.
 */
const TECH_ITEMS: readonly TechItem[] = [
  { label: "TypeScript", x: 8, y: 18, rotate: -6, size: 13 },
  { label: "Node.js", x: 15, y: 38, rotate: 4, size: 12 },
  { label: "React", x: 7, y: 60, rotate: -3, size: 14 },
  { label: "Next.js", x: 14, y: 80, rotate: 6, size: 13 },
  { label: "React Native", x: 88, y: 16, rotate: 5, size: 12 },
  { label: "PHP", x: 93, y: 36, rotate: -5, size: 14 },
  { label: "Laravel", x: 86, y: 58, rotate: 3, size: 12 },
  { label: "PostgreSQL", x: 90, y: 78, rotate: -4, size: 13 },
  { label: "Supabase", x: 30, y: 11, rotate: -5, size: 12 },
  { label: "Redis", x: 68, y: 9, rotate: 4, size: 13 },
  { label: "RabbitMQ", x: 32, y: 89, rotate: 3, size: 12 },
  { label: "Docker", x: 67, y: 91, rotate: -6, size: 14 },
];

const LABEL_CLASS =
  "absolute select-none whitespace-nowrap font-mono uppercase tracking-[0.25em] text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]";

/** Smoothstep for a gradual falloff instead of a hard on/off edge. */
function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

interface TechLabelProps {
  item: TechItem;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  containerSize: ContainerSize;
}

function TechLabel({
  item,
  mouseX,
  mouseY,
  containerSize,
}: TechLabelProps): React.JSX.Element {
  const { width, height } = containerSize;

  // 0 = fully hidden, 1 = fully revealed. Recomputed only when the
  // MotionValues change — never through React renders.
  const proximity = useTransform(
    [mouseX, mouseY],
    (latest: number[]): number => {
      if (width === 0 || height === 0) return 0;
      const [mx = OFFSCREEN, my = OFFSCREEN] = latest;
      const dx = mx - (item.x / 100) * width;
      const dy = my - (item.y / 100) * height;
      const distance = Math.hypot(dx, dy);
      if (distance >= REVEAL_RADIUS) return 0;
      return smoothstep(1 - distance / REVEAL_RADIUS);
    },
  );

  const opacity = useTransform(proximity, (t: number): number => t * MAX_OPACITY);
  const scale = useTransform(proximity, (t: number): number => 0.9 + t * 0.1);
  const filter = useTransform(
    proximity,
    (t: number): string => `blur(${((1 - t) * HIDDEN_BLUR_PX).toFixed(2)}px)`,
  );

  return (
    <motion.span
      className={LABEL_CLASS}
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        x: "-50%",
        y: "-50%",
        rotate: item.rotate,
        fontSize: item.size,
        opacity,
        scale,
        filter,
      }}
    >
      {item.label}
    </motion.span>
  );
}

export default function HeroTechReveal(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue<number>(OFFSCREEN);
  const mouseY = useMotionValue<number>(OFFSCREEN);

  const [containerSize, setContainerSize] = useState<ContainerSize>({
    width: 0,
    height: 0,
  });

  // Keep percent-based item positions convertible to px distances.
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      setContainerSize({ width, height });
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Pointer tracking writes straight into MotionValues (zero re-renders).
  useEffect(() => {
    if (prefersReducedMotion) return;
    // The layer is CSS-hidden on touch / coarse-pointer devices; skip the
    // listeners entirely there as well.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const handlePointerLeave = (): void => {
      mouseX.set(OFFSCREEN);
      mouseY.set(OFFSCREEN);
    };

    const handlePointerMove = (event: PointerEvent): void => {
      const node = containerRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        handlePointerLeave();
        return;
      }
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    };

    // The container itself is pointer-events-none, so leave events are
    // attached to its hero parent (same bounds via absolute inset-0).
    const hero = containerRef.current?.parentElement;

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    hero?.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      hero?.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [prefersReducedMotion, mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden [@media(hover:hover)_and_(pointer:fine)]:block"
    >
      {prefersReducedMotion
        ? // Static, subtle constellation — no cursor tracking.
          TECH_ITEMS.map((item: TechItem) => (
            <span
              key={item.label}
              className={LABEL_CLASS}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                transform: `translate(-50%, -50%) rotate(${item.rotate}deg)`,
                fontSize: item.size,
                opacity: STATIC_OPACITY,
              }}
            >
              {item.label}
            </span>
          ))
        : TECH_ITEMS.map((item: TechItem) => (
            <TechLabel
              key={item.label}
              item={item}
              mouseX={mouseX}
              mouseY={mouseY}
              containerSize={containerSize}
            />
          ))}
    </div>
  );
}
