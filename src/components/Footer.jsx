/**
 * FOOTER
 * ======
 * Shown at the bottom of every page.
 *
 * TO UPDATE:
 *   - College name     → change COLLEGE_NAME constant below
 *   - Tagline          → change TAGLINE constant below
 *   - Nav links        → same array as Navbar (keep in sync)
 *   - Social links     → uncomment the social section below
 */

import { Link } from "react-router-dom";

/* ── Editable constants ─────────────────────────────────────────── */
const BRAND_NAME = "RoboGenesis";
const BRAND_YEAR = "2026";
const TAGLINE = "Innovate · Build · Compete";
const COLLEGE_NAME = "AIET"; // ← update if needed
const COPYRIGHT_YEAR = "2026";

/* ── Footer nav links ───────────────────────────────────────────── */
const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Event Details", path: "/event" },
  { label: "Register", path: "/register" },
];

const Footer = () => (
  <footer
    className="mt-24 py-10 px-6"
    style={{
      borderTop: "1px solid rgba(124,58,237,0.15)",
      background: "rgba(8, 8, 18, 0.75)",
    }}
  >
    <div className="max-w-7xl mx-auto">
      {/* ── Main footer row ──────────────────────────────────── */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <div
            className="text-xl font-bold mb-1"
            style={{ fontFamily: "'Chakra Petch', sans-serif" }}
          >
            <span className="gradient-text">{BRAND_NAME}</span>
            <span
              className="ml-1.5 text-sm font-semibold"
              style={{ color: "var(--color-accent)" }}
            >
              {BRAND_YEAR}
            </span>
          </div>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            {TAGLINE}
          </p>
        </div>

        {/* Navigation links */}
        <nav className="flex gap-6 flex-wrap justify-center">
          {footerLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="text-sm no-underline transition-colors duration-200 hover:text-white"
              style={{ color: "var(--color-text-muted)" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ── Social links (optional) ───────────────────────────
            Uncomment and fill in your social media URLs.
        ────────────────────────────────────────────────────── */}
        {/*
        <div className="flex gap-4">
          <a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer"
             className="text-sm no-underline transition-colors hover:text-white"
             style={{ color: 'var(--color-text-muted)' }}>Instagram</a>
          <a href="https://linkedin.com/company/YOUR_COMPANY" target="_blank" rel="noopener noreferrer"
             className="text-sm no-underline transition-colors hover:text-white"
             style={{ color: 'var(--color-text-muted)' }}>LinkedIn</a>
        </div>
        */}
      </div>

      {/* ── Divider ──────────────────────────────────────────── */}
      <div
        style={{
          height: "1px",
          background: "rgba(124,58,237,0.12)",
          marginBottom: "1.5rem",
        }}
      />

      {/* ── Bottom copyright row ─────────────────────────────── */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
        style={{ color: "var(--color-text-muted)" }}
      >
        <p>
          © {COPYRIGHT_YEAR} {COLLEGE_NAME}. All rights reserved.
        </p>
        <p>Built By Swapnadip Paul, for RoboGenesis {BRAND_YEAR}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
