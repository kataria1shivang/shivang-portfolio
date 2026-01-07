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
          I’m Shivang — a DevOps/Site Reliabilty engineer who thrives on building cloud-native platforms that are not just reliable but also efficient. 
          From designing systems on AWS and Azure to implementing Kubernetes and Terraform solutions, I specialize in creating environments that run seamlessly under pressure.
          </p>

          <p className="mt-3 text-zinc-300 leading-relaxed">
          My approach blends technical expertise with design thinking: I focus on creating systems that not only perform well but also give teams the tools they need to operate with confidence. 
          Whether it’s through clear, actionable alerts or responsive dashboards, my goal is to make systems both powerful and simple to use.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Cloud Infrastructure", "Automation & CI/CD", "Incident Management", "High Availability & Scalability"].map((t) => (
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
          <p className="text-sm font-medium">What’s new I’m working on:</p>
          <ul className="mt-3 text-sm text-zinc-300 space-y-2 list-disc pl-5">
            <li>Multi-region infrastructure</li>
            <li>Advanced SLOs and error budget strategies</li>
            <li>Serverless Architectures</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
