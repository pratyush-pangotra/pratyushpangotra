"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const nodes = [
  { label: "HERO", top: "2%" },
  { label: "JOURNEY", top: "20%" },
  { label: "PROJECTS", top: "42%" },
  { label: "STACK", top: "72%" },
  { label: "CONTACT", top: "94%" },
];

export default function SignalTrace() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  });
  const dotTop = useTransform(smoothProgress, (v) => `${v * 100}%`);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-6 top-0 z-40 hidden h-full w-6 lg:block"
    >
      <div className="relative h-full w-px bg-line">
        <motion.div
          className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-signal via-copper to-transparent"
          style={{ scaleY: smoothProgress, height: "100%" }}
        />
        <motion.div
          className="absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-signal shadow-[0_0_10px_2px_rgba(94,211,199,0.7)]"
          style={{ top: dotTop }}
        />
        {nodes.map((n) => (
          <div
            key={n.label}
            className="absolute -left-[3px] flex items-center"
            style={{ top: n.top }}
          >
            <span className="pad" />
            <span className="eyebrow ml-3 whitespace-nowrap opacity-40">
              {n.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
