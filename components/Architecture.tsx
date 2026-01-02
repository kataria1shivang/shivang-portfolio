"use client";

const nodes = [
  { k: "Ingress / LB", v: "ALB/NLB • Ingress Controller • TLS" },
  { k: "Kubernetes", v: "EKS • Helm • Autoscaling • RBAC" },
  { k: "CI/CD", v: "Jenkins • GitHub Actions • ArgoCD • GitOps" },
  { k: "IaC", v: "Terraform • modular stacks • environment provisioning" },
  { k: "Observability", v: "Prometheus • Grafana • Loki • Alertmanager" },
  { k: "Reliability", v: "SLIs/SLOs • incident response • postmortems" },
  { k: "Security", v: "IAM • SIEM • audit trails • WORM retention" },
];

export default function Architecture() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-950/40 p-6 md:p-8">
      <h2 className="text-xl font-semibold">My platform blueprint</h2>
      <p className="text-sm text-zinc-400 mt-1">Hover cards = the stack I actually work with.</p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {nodes.map((n) => (
          <div
            key={n.k}
            className="group rounded-2xl border border-zinc-800 p-4 hover:bg-zinc-900 transition"
          >
            <p className="font-medium">{n.k}</p>
            <p className="mt-2 text-sm text-zinc-400 group-hover:text-zinc-200 transition">{n.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
