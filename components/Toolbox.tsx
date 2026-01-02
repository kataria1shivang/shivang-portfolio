"use client";

const groups = [
  { title: "Cloud", items: ["AWS (EKS, VPC, IAM, ALB/NLB, EC2, S3, CloudWatch)", "Azure (DevOps, Backup, DR)"] },
  { title: "Platform", items: ["Kubernetes (EKS)", "Docker", "Helm", "Ingress Controllers", "Autoscaling"] },
  { title: "Delivery", items: ["Jenkins", "ArgoCD", "GitHub Actions", "GitOps workflows"] },
  { title: "IaC", items: ["Terraform", "Modular stacks", "State management"] },
  { title: "Observability", items: ["Prometheus", "Grafana", "Loki", "Alertmanager", "SLI/SLOs"] },
  { title: "Security", items: ["RBAC/IAM", "Audit trails", "SIEM monitoring", "WORM retention"] },
];

export default function Toolbox() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-950/40 p-6 md:p-8">
      <h2 className="text-xl font-semibold">Toolbox</h2>
      <p className="text-sm text-zinc-400 mt-1">Tools I’ve used in production (not just “familiar with”).</p>

      <div className="mt-6 grid md:grid-cols-2 gap-3">
        {groups.map((g) => (
          <div key={g.title} className="rounded-2xl border border-zinc-800 p-4 hover:bg-zinc-900 transition">
            <p className="font-medium">{g.title}</p>
            <ul className="mt-2 text-sm text-zinc-300 list-disc pl-5 space-y-1">
              {g.items.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
