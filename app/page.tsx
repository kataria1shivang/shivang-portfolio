// import Navbar from "@/components/Navbar"; // optional
import Reveal from "@/components/Reveal";
import Console from "@/components/Console";

import Hero from "@/components/Hero";
import StatusBar from "@/components/StatusBar";
import Impact from "@/components/Impact";
import About from "@/components/About";
import Principles from "@/components/Principles";
import Architecture from "@/components/Architecture";
import Projects from "@/components/Projects";
import Toolbox from "@/components/Toolbox";
import Contact from "@/components/Contact";

import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen bg-zinc-950 text-zinc-50">
      <InteractiveBackground />

      <div className="relative mx-auto max-w-5xl px-6 py-10">
        {/* ✅ Matte layer so background doesn’t visually cut through text */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-zinc-950/55 backdrop-blur-md ring-1 ring-white/5" />

        <div className="space-y-10 relative z-10">
          <Reveal><Hero /></Reveal>
          <Reveal><StatusBar /></Reveal>
          <Reveal><Console /></Reveal>
          <Reveal><Impact /></Reveal>

          <Reveal><About /></Reveal>
          <Reveal><Principles /></Reveal>
          <Reveal><Architecture /></Reveal>

          <Reveal><Projects /></Reveal>
          <Reveal><Toolbox /></Reveal>

          <Reveal><Contact /></Reveal>

          <footer className="py-10 text-sm text-zinc-400">
            <span className="opacity-80">© {new Date().getFullYear()} Shivang Kataria</span>
          </footer>
        </div>
      </div>
    </main>
  );
}

