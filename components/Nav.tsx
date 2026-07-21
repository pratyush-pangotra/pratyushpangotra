"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "glass rounded-full py-2.5 shadow-lg shadow-black/20" : ""
        }`}
      >
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-silk"
        >
          PP<span className="text-copper">/</span>
          <span className="text-muted">portfolio</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-signal"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:pratyushpangotra74@gmail.com"
          className="rounded-full border border-copper/40 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-copper-bright transition-colors hover:border-copper hover:bg-copper/10"
        >
          Say hi
        </a>
      </div>
    </motion.header>
  );
}
