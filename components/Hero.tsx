"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";

const words = [
  "embedded systems,",
  "developer tools,",
  "and AI products.",
];

const chips = [
  { label: "ESP32", top: "18%", left: "8%", delay: 0 },
  { label: "React", top: "70%", left: "6%", delay: 0.4 },
  { label: "I2C / SPI", top: "12%", left: "82%", delay: 0.8 },
  { label: "Next.js", top: "62%", left: "86%", delay: 1.2 },
  { label: "TypeScript", top: "88%", left: "70%", delay: 1.6 },
];

export default function Hero() {
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const gsap = (await import("gsap")).default;
      if (cancelled) return;
      pathRefs.current.forEach((path, i) => {
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2.2,
          delay: 0.3 + i * 0.25,
          ease: "power2.out",
        });
      });
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pcb-grid pt-24"
    >
      {/* ambient circuit traces */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {[
          "M0,120 L260,120 L300,160 L520,160",
          "M1200,220 L920,220 L880,180 L640,180",
          "M0,620 L220,620 L260,580 L480,580 L520,620 L700,620",
          "M1200,680 L980,680 L940,720 L760,720",
          "M60,0 L60,90 L120,150",
          "M1140,800 L1140,700 L1080,640",
        ].map((d, i) => (
          <path
            key={i}
            ref={(el) => {
              pathRefs.current[i] = el;
            }}
            d={d}
            fill="none"
            stroke="#C97A3D"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
        ))}
        {[
          [300, 160],
          [520, 160],
          [880, 180],
          [640, 180],
          [260, 580],
          [520, 620],
          [940, 720],
          [760, 720],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={3.5} fill="#C97A3D" fillOpacity={0.6} />
        ))}
      </svg>

      {/* floating component chips */}
      {chips.map((c) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 1, delay: c.delay },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: c.delay },
          }}
          className="glass absolute hidden rounded-lg px-3 py-1.5 font-mono text-[11px] tracking-wide text-signal/90 md:block"
          style={{ top: c.top, left: c.left }}
        >
          {c.label}
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:pl-24">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          {personal.role}
        </motion.p>

        <h1 className="font-mono text-[13vw] font-medium leading-[0.95] tracking-tight text-silk sm:text-6xl md:text-7xl lg:text-8xl">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="block"
          >
            Hi, I&apos;m{" "}
            <span className="text-copper-bright">Pratyush</span>
            <span className="text-signal">.</span>
          </motion.span>
        </h1>

        <p className="mt-6 max-w-xl text-balance text-lg text-muted sm:text-xl">
          Building intelligent{" "}
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.15 }}
              className={
                i === words.length - 1 ? "text-silk" : "text-silk/90"
              }
            >
              {w}{" "}
            </motion.span>
          ))}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-copper px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-transform hover:scale-[1.03] hover:bg-copper-bright"
          >
            View projects
          </a>
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-copper/30 p-3 text-muted transition-colors hover:border-signal hover:text-signal"
            >
              <Github size={16} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-copper/30 p-3 text-muted transition-colors hover:border-signal hover:text-signal"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="rounded-full border border-copper/30 p-3 text-muted transition-colors hover:border-signal hover:text-signal"
            >
              <Mail size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
