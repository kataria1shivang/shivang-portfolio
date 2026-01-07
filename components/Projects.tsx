"use client";

import { useState } from "react";

const projects = [
  {
    title: "Fintech Platform Modernization (EKS + Microservices)",
    meta: "AWS • Kubernetes • GitOps • Reliability",
    bullets: [
      "Modernized a $4B+ daily trade platform, enhancing runtime stability and performance.",
      "Monolith → 100+ microservices on AWS EKS for scalability and faster releases.",
      "Standardized deployments using ArgoCD + Jenkins across environments.",
    ],
  },
  {
    title: "Central Observability Stack",
    meta: "Prometheus • Grafana • Loki • Alerting",
    bullets: [
      "Centralized metrics/logs for faster diagnosis and healthier on-call.",
      "Improved MTTD by 40% through actionable alerts + dashboards.",
      "Built foundations for SLI/SLO tracking and operational visibility.",
    ],
  },
  {
    title: "Disaster Recovery Automation",
    meta: "Azure DevOps • DR • RTO/RPO",
    bullets: [
      "Automated disaster recovery processes using Azure DevOps, optimizing recovery time objectives (RTO) and recovery point objectives (RPO).",
      "Repeatable recovery process with controlled rollouts and validation.",
    ],
  },
];

export default function Projects() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="projects" className="rounded-3xl border border-zinc-800 bg-zinc-950/40 p-6 md:p-8">
      <h2 className="text-xl font-semibold">Projects (the real work)</h2>
      <p className="text-sm text-zinc-400 mt-1">Short, outcome-focused, and production-relevant.</p>

      <div className="mt-6 space-y-3">
        {projects.map((p, idx) => {
          const isOpen = open === idx;
          return (
            <div key={p.title} className="rounded-2xl border border-zinc-800">
              <button
                onClick={() => setOpen(isOpen ? null : idx)}
                className="w-full text-left p-4 flex items-center justify-between gap-4 hover:bg-zinc-900 transition rounded-2xl"
              >
                <div>
                  <p className="font-medium">{p.title}</p>
                  <p className="text-xs text-zinc-400 mt-1">{p.meta}</p>
                </div>
                <span className="text-zinc-400">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div className="px-4 pb-4">
                  <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
