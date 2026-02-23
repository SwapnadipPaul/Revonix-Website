/**
 * ANIMATED BACKGROUND
 * ===================
 * Renders a layered animated background across all pages.
 * There are THREE independent layers you can toggle:
 *
 *   1. BASE GRADIENT  — the dark colour wash behind everything
 *   2. GRID OVERLAY   — subtle purple grid lines
 *   3. PARTICLE CANVAS — floating dots with connecting lines
 *
 * ─── HOW TO CUSTOMISE ───────────────────────────────────────────
 *
 *  Change background type:
 *    Set BACKGROUND_CONFIG.type to one of:
 *      'particles' → floating dots + connection lines (default)
 *      'stars'     → twinkling starfield
 *      'none'      → no canvas animation (plain gradient only)
 *
 *  Particle count (density):
 *    Increase PARTICLE_COUNT for more particles (can affect perf).
 *
 *  Colours:
 *    primaryColor → main particle / line color
 *    accentColor  → secondary particle color
 *    Update these to match your CSS variables if you retheme.
 *
 *  Grid:
 *    Set SHOW_GRID = false to hide the grid overlay.
 *
 *  Animation speed:
 *    Increase SPEED for faster movement.
 * ────────────────────────────────────────────────────────────────
 */

import { useEffect, useRef } from "react";

/* ── Configuration — edit these values ── */
const BACKGROUND_CONFIG = {
  type: "particles", // 'particles' | 'stars' | 'none'
  particleCount: 75, // number of particles (lower = better perf on slow devices)
  primaryColor: "#7C3AED", // main particle colour  (matches --color-primary)
  accentColor: "#06B6D4", // accent particle colour(matches --color-accent)
  speed: 0.4, // movement speed (0.1 = slow, 1.0 = fast)
  connectDist: 110, // max distance (px) for drawing connection lines
  showGrid: true, // show the grid overlay behind particles
};

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (BACKGROUND_CONFIG.type === "none") return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let rafId;
    let particles = [];

    /* ── Resize canvas to fill window ── */
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* ── Create particle array ── */
    const init = () => {
      particles = [];
      for (let i = 0; i < BACKGROUND_CONFIG.particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // particles vary in size: stars are slightly larger
          size:
            BACKGROUND_CONFIG.type === "stars"
              ? Math.random() * 2 + 1
              : Math.random() * 1.8 + 0.4,
          vx: (Math.random() - 0.5) * BACKGROUND_CONFIG.speed,
          vy: (Math.random() - 0.5) * BACKGROUND_CONFIG.speed,
          alpha: Math.random() * 0.5 + 0.25,
          // twinkle phase — used for stars only
          phase: Math.random() * Math.PI * 2,
          dPhase: Math.random() * 0.025 + 0.008,
          // randomly choose primary or accent colour
          color:
            Math.random() > 0.72
              ? BACKGROUND_CONFIG.accentColor
              : BACKGROUND_CONFIG.primaryColor,
        });
      }
    };
    init();

    /* ── Helper: hex color + alpha → rgba string ── */
    const hexAlpha = (hex, a) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${a})`;
    };

    /* ── Animation loop ── */
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* move & draw each particle */
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.phase += p.dPhase;

        /* wrap around edges */
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        /* stars twinkle; particles are steady */
        const alpha =
          BACKGROUND_CONFIG.type === "stars"
            ? p.alpha * (0.4 + 0.6 * Math.abs(Math.sin(p.phase)))
            : p.alpha;

        /* draw dot */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = hexAlpha(p.color, alpha);
        ctx.fill();

        /* draw soft glow around bigger dots */
        if (p.size > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = hexAlpha(p.color, 0.04);
          ctx.fill();
        }

        /* draw connection lines for 'particles' mode */
        if (BACKGROUND_CONFIG.type === "particles") {
          for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j];
            const dist = Math.hypot(p.x - q.x, p.y - q.y);
            if (dist < BACKGROUND_CONFIG.connectDist) {
              const lineAlpha =
                (1 - dist / BACKGROUND_CONFIG.connectDist) * 0.18;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = hexAlpha(
                BACKGROUND_CONFIG.primaryColor,
                lineAlpha,
              );
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* ── Layer 1: Base gradient ──────────────────────────────────────
          The dark space-like gradient that sits behind everything.
          To change the background gradient colours, edit the
          'background' value below.
      ───────────────────────────────────────────────────────────── */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #080812 0%, #0E0828 50%, #080F1C 100%)",
        }}
      />

      {/* ── Layer 2: Grid overlay ───────────────────────────────────────
          Subtle purple grid for a futuristic HUD look.
          To HIDE the grid: set showGrid = false in BACKGROUND_CONFIG
          or delete this block entirely.
          To change grid colour: update the rgba values below.
          To change grid spacing: edit backgroundSize (e.g. '80px 80px').
      ───────────────────────────────────────────────────────────── */}
      {BACKGROUND_CONFIG.showGrid && (
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124,58,237,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />
      )}

      {/* ── Layer 3: Particle canvas ────────────────────────────────────
          Hidden when type === 'none' (useEffect returns early).
      ───────────────────────────────────────────────────────────── */}
      {BACKGROUND_CONFIG.type !== "none" && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 z-0"
          style={{ opacity: 0.85 }}
        />
      )}

      {/* ── Layer 4: Vignette overlay ───────────────────────────────────
          Darkens the edges for depth. Remove this div to disable.
      ───────────────────────────────────────────────────────────── */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.45) 100%)",
        }}
      />
    </>
  );
};

export default AnimatedBackground;
