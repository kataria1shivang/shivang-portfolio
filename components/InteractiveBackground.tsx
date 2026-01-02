"use client";

import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number; r: number };
type Ripple = { x: number; y: number; t: number; max: number };

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let time = 0;

    const mouse = { x: -9999, y: -9999, down: false };
    const points: P[] = [];
    const ripples: Ripple[] = [];

    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      // base
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillRect(0, 0, w, h);

      // reseed
      points.length = 0;
      const count = Math.max(70, Math.min(140, Math.floor((w * h) / 14000)));
      for (let i = 0; i < count; i++) {
        points.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
          r: 1.2 + Math.random() * 1.9,
        });
      }
    };

    const addRipple = (x: number, y: number, max = Math.min(w, h) * 0.55) => {
      ripples.push({ x, y, t: 0, max });
      if (ripples.length > 6) ripples.shift();
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.down = false;
    };
    const onDown = (e: MouseEvent) => {
      mouse.down = true;
      addRipple(e.clientX, e.clientY, Math.min(w, h) * 0.6);
    };
    const onUp = () => (mouse.down = false);

    // Touch
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      mouse.x = t.clientX;
      mouse.y = t.clientY;
    };
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      mouse.down = true;
      mouse.x = t.clientX;
      mouse.y = t.clientY;
      addRipple(t.clientX, t.clientY, Math.min(w, h) * 0.65);
    };
    const onTouchEnd = () => {
      mouse.down = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    resize();

    const draw = () => {
      // constant “alive” motion
      time += 0.100;
      const driftX = Math.cos(time * 0.9) * 0.08;
      const driftY = Math.sin(time * 0.7) * 0.08;
      const pulse = 0.75 + 0.25 * Math.sin(time * 1.6); // 0.5–1.0

      // lighter trail so motion is visible
      ctx.fillStyle = "rgba(0,0,0,0.22)";
      ctx.fillRect(0, 0, w, h);

      // soft glow
      const g = ctx.createRadialGradient(
        w * 0.5,
        h * 0.4,
        80,
        w * 0.5,
        h * 0.5,
        Math.max(w, h)
      );
      g.addColorStop(0, "rgba(255,255,255,0.06)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      const linkDist = 210; // a bit more “webby”
      const repelDist = mouse.down ? 260 : 190;
      const repelForce = mouse.down ? 0.12 : 0.075;

      // update points
      for (const p of points) {
        p.x += p.vx + driftX;
        p.y += p.vy + driftY;

        // wrap
        if (p.x < -30) p.x = w + 30;
        if (p.x > w + 30) p.x = -30;
        if (p.y < -30) p.y = h + 30;
        if (p.y > h + 30) p.y = -30;

        // mouse interaction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.hypot(dx, dy);

        if (d < repelDist) {
          const t = 1 - d / repelDist;
          const nx = dx / (d || 1);
          const ny = dy / (d || 1);

          p.vx += nx * t * repelForce;
          p.vy += ny * t * repelForce;

          // swirl
          p.vx += -ny * t * 0.02;
          p.vy += nx * t * 0.02;
        }

        // friction + clamp
        p.vx *= 0.984;
        p.vy *= 0.984;

        const max = 1.1;
        p.vx = Math.max(-max, Math.min(max, p.vx));
        p.vy = Math.max(-max, Math.min(max, p.vy));
      }

      // links (breathing shimmer)
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const alpha = (1 - d / linkDist) * (0.22 + 0.22 * pulse);
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes (subtle pulse)
      for (const p of points) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.hypot(dx, dy);
        const glow = d < 240 ? 1 - d / 240 : 0;

        if (glow > 0.001) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(255,255,255,${0.06 + glow * 0.18})`;
          ctx.arc(p.x, p.y, p.r + glow * 10, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${(0.42 + 0.18 * pulse) + glow * 0.28})`;
        ctx.arc(p.x, p.y, p.r + glow * 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.t += 1;

        const radius = (r.t / 90) * r.max;
        const alpha = Math.max(0, 0.35 - r.t / 140);

        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = 1.6;
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.55})`;
        ctx.lineWidth = 1;
        ctx.arc(r.x, r.y, radius * 0.65, 0, Math.PI * 2);
        ctx.stroke();

        if (r.t > 160) ripples.splice(i, 1);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    // hover ripple
    const hoverTimer = window.setInterval(() => {
      if (mouse.x > -1000 && mouse.y > -1000 && !mouse.down) {
        addRipple(mouse.x, mouse.y, Math.min(w, h) * 0.35);
      }
    }, 1400);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.clearInterval(hoverTimer);

      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);

      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 opacity-60"
      aria-hidden="true"
    />
  );
}
