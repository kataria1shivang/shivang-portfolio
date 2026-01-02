"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  if (!show) return null;

  return (
    <div className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 backdrop-blur px-3 py-2 flex items-center justify-between">
          <button onClick={() => go("home")} className="text-sm font-semibold">
            shivang<span className="text-zinc-400">.portfolio</span>
          </button>

          <div className="flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="px-3 py-1.5 rounded-xl text-sm text-zinc-300 hover:bg-zinc-900"
              >
                {l.label}
              </button>
            ))}

            <a
              href="/shivangkataria.pdf"
              download
              className="ml-2 px-3 py-1.5 rounded-xl text-sm border border-zinc-800 hover:bg-zinc-900 text-zinc-200"
            >
              Resume ↓
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
