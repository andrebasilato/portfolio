"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

interface MarqueeTextProps {
  items: string[];
  separator?: string;
  className?: string;
}

export default function MarqueeText({
  items,
  separator = " / ",
  className = "",
}: MarqueeTextProps): React.JSX.Element {
  const text = items.join(separator) + separator;
  const prefersReducedMotion = useReducedMotion();

  // Scroll-velocity-linked skew: the banner leans with scroll momentum
  // and springs back to rest. Compositor-only (transform), no listeners.
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, {
    damping: 50,
    stiffness: 400,
    mass: 0.5,
  });
  const skewX = useTransform(smoothVelocity, [-1500, 1500], [5, -5]);

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      aria-label={items.join(", ")}
    >
      {/* Skew lives on its own wrapper: the CSS marquee keyframe animates
          `transform` on the inner element and would override an inline skew. */}
      <motion.div style={prefersReducedMotion ? undefined : { skewX }}>
        <div className="animate-marquee inline-flex">
          <span className="inline-block pr-4">{text}</span>
          <span className="inline-block pr-4">{text}</span>
        </div>
      </motion.div>
    </div>
  );
}
