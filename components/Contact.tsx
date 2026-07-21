"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 lg:pl-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          Get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="mt-4 text-balance font-mono text-4xl text-silk sm:text-5xl"
        >
          Let&apos;s build something amazing.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mx-auto mt-4 max-w-md text-muted"
        >
          Open to internships and collaborations across embedded systems,
          developer tools, and AI products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 rounded-full bg-copper px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-transform hover:scale-[1.03] hover:bg-copper-bright"
          >
            <Mail size={14} />
            {personal.email}
          </a>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-4">
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
        </div>
      </div>

      <footer className="mx-auto mt-28 max-w-6xl border-t border-copper/10 pt-8 text-center font-mono text-[11px] text-muted/70">
        © {new Date().getFullYear()} {personal.name}. Built with Next.js, Tailwind CSS &amp; Framer Motion.
      </footer>
    </section>
  );
}
