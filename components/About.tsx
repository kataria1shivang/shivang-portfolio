"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-950/40 p-6 md:p-8">
      <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="text-sm text-zinc-400 mt-1">A bit of story + a bit of philosophy.</p>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            I’m Shivang — a DevOps/SRE-minded engineer who enjoys building cloud-native platforms
            that are <span className="text-zinc-100 font-medium">reliable, observable, and easy to operate</span>.
            I work across AWS & Azure, Kubernetes, CI/CD, Terraform, and incident readiness.
          </p>

          <p className="mt-3 text-zinc-300 leading-relaxed">
            My creative side shows up in how I design systems: clean dashboards, clear alerts,
            and interfaces that help teams move fast without breaking production.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Reliability", "Automation", "Observability", "Security", "Fintech scale"].map((t) => (
              <span key={t} className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm">
                {t}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          whileHover={{ y: -2 }}
          className="w-full md:w-80 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4"
        >
          <p className="text-sm font-medium">Now</p>
          <ul className="mt-3 text-sm text-zinc-300 space-y-2 list-disc pl-5">
            <li>Building: reliability-first delivery workflows</li>
            <li>Exploring: SLOs, error budgets, on-call maturity</li>
            <li>Polishing: this portfolio like a product</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
