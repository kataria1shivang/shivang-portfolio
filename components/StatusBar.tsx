"use client";

import { motion } from "framer-motion";

export default function StatusBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        <div>
          <p className="text-sm font-medium">System Status: All services operational</p>
          <p className="text-xs text-zinc-400">Last incident: resolved • postmortem completed • learnings shipped</p>
        </div>
      </div>
      <span className="text-xs text-zinc-400 hidden md:block">SLO: 99.9% • Error budget healthy</span>
    </motion.section>
  );
}
