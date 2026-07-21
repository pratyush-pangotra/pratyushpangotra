"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="journey" className="relative px-6 py-28 lg:pl-24">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          Signal path
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-mono text-3xl text-silk sm:text-4xl"
        >
          The engineering journey
        </motion.h2>

        <div className="relative mt-16">
          <div className="absolute left-[9px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-copper via-copper/40 to-transparent" />
          <ol className="space-y-12">
            {timeline.map((t, i) => (
              <motion.li
                key={t.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 h-[19px] w-[19px] rounded-full border border-copper/50 bg-bg" />
                <span className="absolute left-[7px] top-[13px] h-[3px] w-[3px] rounded-full bg-signal" />
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-copper">
                    {t.year}
                  </span>
                  <h3 className="font-mono text-lg text-silk">{t.title}</h3>
                </div>
                <p className="mt-1.5 max-w-lg text-sm text-muted">{t.detail}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
