"use client";

import { useState } from "react";

const items = [
  {
    title: "Automation > Manual Ops",
    desc: "I turn repeatable work into pipelines, scripts, and IaC—so humans focus on decisions, not clicks.",
  },
  {
    title: "Observability First",
    desc: "Metrics + logs + alerting before scale. If we can’t see it, we can’t own it.",
  },
  {
    title: "SLO-driven Reliability",
    desc: "Define SLIs/SLOs, protect error budgets, and prioritize the fixes that move reliability forward.",
  },
  {
    title: "Secure by Default",
    desc: "Least privilege, audit trails, retention policies, and compliance controls built into the platform.",
  },
];

export default function Principles() {
  const [on, setOn] = useState(() => items.map((_, idx) => idx < 2));

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-950/40 p-6 md:p-8">
      <h2 className="text-xl font-semibold">How I think (and build)</h2>
      <p className="text-sm text-zinc-400 mt-1">Flip the switches. That’s basically my mindset in production.</p>

      <div className="mt-6 grid gap-3">
        {items.map((it, idx) => (
          <div key={it.title} className="rounded-2xl border border-zinc-800 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium">{it.title}</p>
                <p className="text-xs text-zinc-400">toggle to expand</p>
              </div>

              <button
                onClick={() => setOn((prev) => prev.map((v, i) => (i === idx ? !v : v)))}
                className={`h-7 w-12 rounded-full border border-zinc-700 px-1 transition ${
                  on[idx] ? "bg-green-500/20" : "bg-zinc-900"
                }`}
                aria-label={`toggle ${it.title}`}
              >
                <span
                  className={`block h-5 w-5 rounded-full transition ${
                    on[idx] ? "translate-x-5 bg-green-500" : "translate-x-0 bg-zinc-400"
                  }`}
                />
              </button>
            </div>

            {on[idx] && <p className="mt-3 text-sm text-zinc-300 leading-relaxed">{it.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
