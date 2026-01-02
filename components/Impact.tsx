"use client";

import { motion } from "framer-motion";

const stats = [
  { k: "$4B+ daily trades", v: "fintech platform scale" },
  { k: "100+ microservices", v: "EKS modernization" },
  { k: "MTTD ↓ 40%", v: "observability improvements" },
  { k: "RTO < 30m", v: "DR readiness automation" },
];

export default function Impact() {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((s, i) => (
        <motion.div
          key={s.k}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ y: -3 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4 hover:bg-zinc-900 transition"
        >
          <p className="text-lg font-semibold">{s.k}</p>
          <p className="text-xs text-zinc-400 mt-1">{s.v}</p>
        </motion.div>
      ))}
    </section>
  );
}
