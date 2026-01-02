"use client";

import { useState } from "react";

const help = `Try:
- whoami
- kubectl get projects
- slo status
- terraform plan
- incident last`;

const responses: Record<string, string> = {
  "whoami": "DevOps Engineer • SRE mindset • Platform Reliability",
  "kubectl get projects": "fintech-platform • observability-stack • dr-automation",
  "slo status": "99.9% target • error budget healthy ✅",
  "terraform plan": "No changes. Infrastructure is consistent ✅",
  "incident last": "Resolved • postmortem completed • action items shipped ✅",
};

export default function Console() {
  const [cmd, setCmd] = useState("");
  const [out, setOut] = useState<string[]>([help]);

  const run = () => {
    const c = cmd.trim();
    if (!c) return;
    const res = responses[c.toLowerCase()] ?? "Command not found. Type one from help.";
    setOut((p) => [`$ ${c}`, res, ...p]);
    setCmd("");
  };

  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen px-6">
      <div className="mx-auto max-w-6xl rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6 md:p-8">
        <h2 className="text-2xl font-semibold">Interactive Ops Console</h2>
        <p className="text-sm text-zinc-400 mt-1">
          Explore how I think during production operations.
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-5">
          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-3">
            <span className="h-2 w-2 rounded-full bg-red-500/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
            <span className="h-2 w-2 rounded-full bg-green-500/70" />
            <span className="ml-2">ops-console</span>
          </div>

          <div className="flex gap-3">
            <input
              value={cmd}
              onChange={(e) => setCmd(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && run()}
              className="w-full bg-transparent outline-none text-sm font-mono text-zinc-200"
              placeholder="type a command and press Enter…"
            />
            <button
              onClick={run}
              className="rounded-xl border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-900"
            >
              Run
            </button>
          </div>

          <div className="mt-4 space-y-2 max-h-[300px] overflow-auto">
            {out.slice(0, 10).map((l, i) => (
              <pre key={i} className="whitespace-pre-wrap text-xs text-zinc-300 font-mono">
                {l}
              </pre>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
