import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="rounded-3xl border border-zinc-800 bg-zinc-950/40 p-6 md:p-8">
      <h2 className="text-xl font-semibold">Let’s build something reliable</h2>
      <p className="text-sm text-zinc-400 mt-1">
        If you’re hiring for DevOps/SRE, I’m happy to share deeper architecture + incident learnings.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          className="rounded-xl border border-zinc-800 px-4 py-2 text-sm hover:bg-zinc-900 flex items-center gap-2"
          href="mailto:kataria.shivang.in@gmail.com"
        >
          <Mail size={16} /> Email
        </a>
        <a
          className="rounded-xl border border-zinc-800 px-4 py-2 text-sm hover:bg-zinc-900 flex items-center gap-2"
          href="https://www.linkedin.com/in/shivang-kataria/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
        <a
          className="rounded-xl border border-zinc-800 px-4 py-2 text-sm hover:bg-zinc-900 flex items-center gap-2"
          href="#"
        >
          <Github size={16} /> GitHub
        </a>
      </div>
    </section>
  );
}
