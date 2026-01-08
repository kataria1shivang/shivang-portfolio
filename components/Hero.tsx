"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const words = ["Terraform", "Firewalls", "Site Reliability", "MLOps"];

export default function Hero() {
  const [i, setI] = useState(0);
  const current = useMemo(() => words[i % words.length], [i]);

  useEffect(() => {
    const t = setInterval(() => setI((v) => v + 1), 1400);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/40 p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
    >
      {/* subtle internal glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="flex items-center justify-between text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
          <span className="h-2 w-2 rounded-full bg-green-500/70" />
          <span className="ml-2">terminal</span>
        </div>
        <span className="hidden md:block">system: portfolio.shivang</span>
      </div>

      <div className="mt-6 space-y-4">
        <p className="font-mono text-sm text-zinc-300">
          <span className="text-zinc-500">shivang@cloud</span>:<span className="text-zinc-500">~</span>$ whoami
        </p>

        {/* command output */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="font-mono text-sm text-zinc-400"
        >
          DevOps Engineer • SRE mindset • Platform Reliability
          <span className="ml-2 text-zinc-500 animate-pulse">▍</span>
        </motion.p>

        <div className="text-center md:text-left">
  <motion.h1
    initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-3xl md:text-5xl font-semibold tracking-tight typewriter"
  >
    I build systems that don’t break.
  </motion.h1>
</div>




        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-zinc-300 max-w-2xl leading-relaxed"
        >
          Building scalable, reliable systems using modern cloud infrastructure, ensuring seamless operations and robust incident readiness.
        </motion.p>

        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-zinc-400">Current focus:</span>

          <motion.span
            key={current}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm"
          >
            {current}
          </motion.span>

          <span className="ml-2 font-mono text-zinc-500 animate-pulse">▍</span>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
  <motion.a
    href="#projects"
    className="rounded-xl bg-zinc-50 text-zinc-950 px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105"
  >
    View Projects
  </motion.a>

  <motion.a
    href="/shivangkataria.pdf"
    download
    className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-900 transition-all duration-300 transform hover:scale-105"
  >
    Download Resume
  </motion.a>

  <motion.a
    href="#contact"
    className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-900 transition-all duration-300 transform hover:scale-105"
  >
    Contact
  </motion.a>
</div>

      </div>
    </section>
  );
}
