/**
 * NAVBAR
 * ======
 * Sticky top navigation bar present on all pages.
 *
 * TO ADD / REMOVE NAV LINKS:
 *   Edit the navLinks array below.
 *
 * TO CHANGE THE LOGO:
 *   See the "Logo area" comment block below.
 *   The easiest approach is to place an image in /public
 *   and set LOGO_SRC to '/your-logo.png'.
 *
 * COLOURS come from CSS variables in src/index.css.
 */

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

/* ── Nav links ──────────────────────────────────────────────────
   Add or remove page links here.
   Each object needs: label (text shown) and path (URL).
────────────────────────────────────────────────────────────────── */
const navLinks = [
  { label: 'Home',          path: '/'         },
  { label: 'Event Details', path: '/event'    },
  { label: 'Register',      path: '/register' },
]

/* ── Navbar logo text ───────────────────────────────────────────
   Update these if you want different branding text in the navbar.
────────────────────────────────────────────────────────────────── */
const BRAND_NAME = 'RoboGenesis'
const BRAND_YEAR = '2026'

/* ── Inline logo image ──────────────────────────────────────────
   To use an image in the navbar logo area:
     1. Place the image in /public  (e.g. /public/nav-logo.png)
     2. Set LOGO_SRC = '/nav-logo.png'
   Leave as null to show the emoji placeholder.
────────────────────────────────────────────────────────────────── */
const LOGO_SRC = null     // ← e.g. '/nav-logo.png'

const Navbar = () => {
  const [open, setOpen]   = useState(false)
  const { pathname }      = useLocation()

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background:   'rgba(8, 8, 18, 0.82)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(124, 58, 237, 0.18)',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

        {/* ── Logo ────────────────────────────────────────────── */}
        <Link to="/" className="flex items-center gap-3 no-underline">

          {/* Logo icon — replace with an <img> if you have a logo file */}
          {LOGO_SRC ? (
            <img src={LOGO_SRC} alt="RoboGenesis Logo" className="h-9 w-auto" />
          ) : (
            /* Gradient circle with robot emoji — placeholder */
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                boxShadow:  '0 0 12px rgba(124,58,237,0.45)',
              }}
            >
              🤖
            </div>
          )}

          {/* Brand text */}
          <div className="leading-tight">
            <span
              className="block text-lg font-bold tracking-wide"
              style={{ fontFamily: "'Chakra Petch', sans-serif" }}
            >
              <span className="gradient-text">{BRAND_NAME}</span>
            </span>
            <span
              className="block text-xs font-semibold tracking-widest"
              style={{ color: 'var(--color-accent)', marginTop: '-2px' }}
            >
              {BRAND_YEAR}
            </span>
          </div>
        </Link>

        {/* ── Desktop links ───────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, path }) => {
            const active = pathname === path
            return (
              <Link
                key={path}
                to={path}
                className="relative text-sm font-medium transition-colors duration-200 no-underline group"
                style={{ color: active ? 'var(--color-primary-light)' : 'var(--color-text-muted)' }}
              >
                {label}
                {/* Animated underline */}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                  style={{
                    width:      active ? '100%' : '0%',
                    background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                  }}
                />
              </Link>
            )
          })}

          {/* CTA button */}
          <Link
            to="/register"
            className="px-5 py-2 rounded-full text-sm font-bold text-white no-underline transition-all duration-300 hover:scale-105"
            style={{
              background:  'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
              boxShadow:   '0 0 18px rgba(124,58,237,0.35)',
            }}
          >
            Register Now
          </Link>
        </div>

        {/* ── Hamburger (mobile) ──────────────────────────────── */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation menu"
          style={{ color: 'var(--color-text)' }}
        >
          {/* Three-bar / X icon */}
          <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span
              style={{
                display: 'block', height: 2, borderRadius: 2,
                background: 'currentColor',
                transform:  open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                transition: 'transform 0.25s',
              }}
            />
            <span
              style={{
                display: 'block', height: 2, borderRadius: 2,
                background: 'currentColor',
                opacity:    open ? 0 : 1,
                transition: 'opacity 0.25s',
              }}
            />
            <span
              style={{
                display: 'block', height: 2, borderRadius: 2,
                background: 'currentColor',
                transform:  open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                transition: 'transform 0.25s',
              }}
            />
          </div>
        </button>
      </div>

      {/* ── Mobile dropdown menu ────────────────────────────── */}
      {open && (
        <div
          className="md:hidden mx-4 mb-3 rounded-2xl overflow-hidden"
          style={{
            background:   'rgba(17, 17, 40, 0.97)',
            border:       '1px solid var(--color-border)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {navLinks.map(({ label, path }) => {
            const active = pathname === path
            return (
              <Link
                key={path}
                to={path}
                className="block px-5 py-3 text-sm font-medium no-underline transition-colors"
                style={{
                  color:      active ? 'var(--color-primary-light)' : 'var(--color-text)',
                  background: active ? 'rgba(124,58,237,0.12)' : 'transparent',
                  borderBottom: '1px solid rgba(124,58,237,0.08)',
                }}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            )
          })}
          {/* Mobile CTA */}
          <div className="p-4">
            <Link
              to="/register"
              className="block text-center py-3 rounded-full text-sm font-bold text-white no-underline"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
              }}
              onClick={() => setOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
