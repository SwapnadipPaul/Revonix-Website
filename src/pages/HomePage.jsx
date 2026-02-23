/**
 * HOME PAGE  (route: /)
 * =====================
 * Sections on this page (top to bottom):
 *   1. LogoBar      — college + club logos
 *   2. Hero         — title, tagline, description, CTA buttons
 *   3. Event Details — venue, date, duration, eligibility, team size
 *   4. Challenge Themes — four flip cards
 *   5. Register CTA  — big button at the bottom
 *
 * WHERE TO EDIT CONTENT:
 *   - Titles / descriptions → directly in this file (marked with comments)
 *   - Event details cards   → src/data/eventData.js  (eventDetails object)
 *   - Flip-card content     → src/data/themes.js
 */

import { Link } from 'react-router-dom'
import LogoBar      from '../components/LogoBar.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import FlipCard     from '../components/FlipCard.jsx'
import { themes }   from '../data/themes.js'
import { eventDetails } from '../data/eventData.js'

/* ── Event detail items configuration ──────────────────────────────
   Each item maps an icon + label to a key in the eventDetails object.
   To reorder, drag-and-drop the objects.
   To add a new detail: add a key to eventData.js, then add it here.
─────────────────────────────────────────────────────────────────── */
const detailItems = [
  { icon: '📍', label: 'Venue',       key: 'venue'       },
  { icon: '📆', label: 'Date',        key: 'date'        },
  { icon: '⏰', label: 'Duration',    key: 'duration'    },
  { icon: '👩‍🎓', label: 'Eligibility', key: 'eligibility' },
  { icon: '👥', label: 'Team Size',   key: 'teamSize'    },
]

const HomePage = () => (
  <div className="min-h-screen pt-16">

    {/* ── Logo bar ──────────────────────────────────────────────── */}
    <LogoBar />

    {/* ══════════════════════════════════════════════════════════
        HERO SECTION
        ============
        To change the title/tagline/description, edit the text
        inside the JSX below. Structural changes like adding
        new badges or buttons can also be done here.
    ════════════════════════════════════════════════════════════ */}
    <section className="relative py-24 px-6 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Badge pill */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-10"
          style={{
            background: 'rgba(124,58,237,0.12)',
            border:     '1px solid rgba(124,58,237,0.4)',
            color:      'var(--color-primary-light)',
          }}
        >
          <span>🤖</span>
          {/* Update the badge text here */}
          <span>Intra-College Robotics Challenge · March 2026</span>
        </div>

        {/* ── Main title ───────────────────────────────────────────
            To change: edit the text between the <span> tags below.
        ──────────────────────────────────────────────────────────── */}
        <h1
          className="font-black leading-none mb-6"
          style={{ fontFamily: "'Chakra Petch', sans-serif" }}
        >
          <span
            className="block text-6xl sm:text-7xl md:text-8xl"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #C4B5FD 55%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor:  'transparent',
              backgroundClip:       'text',
            }}
          >
            RoboGenesis
          </span>
          <span
            className="block text-4xl sm:text-5xl md:text-6xl mt-1"
            style={{ color: 'var(--color-accent)' }}
          >
            2026
          </span>
        </h1>

        {/* ── Tagline ────────────────────────────────────────────── */}
        <p
          className="text-xl md:text-2xl font-semibold tracking-widest mb-8"
          style={{
            color:      'var(--color-accent-light)',
            fontFamily: "'Chakra Petch', sans-serif",
          }}
        >
          {/* Change tagline text here */}
          " Innovate · Build · Compete "
        </p>

        {/* ── Description ────────────────────────────────────────── */}
        <p
          className="text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {/* Change description text here */}
          Turn ideas into machines and code into motion at{' '}
          <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>RoboGenesis 2026</span>.
          An intra-college robotics challenge inviting all engineering branches to
          build and compete with their own working robots.
        </p>

        {/* ── CTA Buttons ────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Primary CTA */}
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-lg no-underline transition-all duration-300 hover:scale-105"
            style={{
              background:  'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
              boxShadow:   '0 0 35px rgba(124,58,237,0.45)',
            }}
          >
            Register Now
            <span>→</span>
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/event"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg no-underline transition-all duration-300 hover:scale-105"
            style={{
              border:  '1px solid rgba(124,58,237,0.45)',
              color:   'var(--color-primary-light)',
              background: 'rgba(124,58,237,0.06)',
            }}
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Decorative glow orbs (purely cosmetic) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div style={{
          position: 'absolute', top: '30%', left: '15%',
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', top: '20%', right: '10%',
          width: 200, height: 200, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        }} />
      </div>
    </section>
    {/* ══════════════════════════════════════════════════════════ */}


    {/* ══════════════════════════════════════════════════════════
        EVENT DETAILS CARDS
        ===================
        Data comes from src/data/eventData.js → eventDetails
    ════════════════════════════════════════════════════════════ */}
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Event Details"
          subtitle="Everything you need to know before you register"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {detailItems.map(({ icon, label, key }) => (
            <div
              key={key}
              className="p-5 rounded-2xl text-center transition-all duration-300 hover:scale-105"
              style={{
                background:     'rgba(17,17,40,0.75)',
                border:         '1px solid rgba(124,58,237,0.22)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="text-3xl mb-3">{icon}</div>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-1.5"
                style={{ color: 'var(--color-accent)' }}
              >
                {label}
              </div>
              <div
                className="text-sm font-medium leading-snug"
                style={{ color: 'var(--color-text)' }}
              >
                {eventDetails[key]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* ══════════════════════════════════════════════════════════ */}


    {/* ══════════════════════════════════════════════════════════
        CHALLENGE THEMES — FLIP CARDS
        ==============================
        Data comes from src/data/themes.js
        Click a card to reveal description + evaluation criteria.
    ════════════════════════════════════════════════════════════ */}
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Challenge Themes"
          subtitle="Four categories to test your robotics skills. Click a card to reveal details."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map(theme => (
            <FlipCard key={theme.id} theme={theme} />
          ))}
        </div>
      </div>
    </section>
    {/* ══════════════════════════════════════════════════════════ */}


    {/* ══════════════════════════════════════════════════════════
        REGISTER CTA BANNER
    ════════════════════════════════════════════════════════════ */}
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div
          className="relative rounded-3xl p-12 text-center overflow-hidden"
          style={{
            background:     'rgba(17,17,40,0.8)',
            border:         '1px solid rgba(124,58,237,0.3)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Background radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10">
            <div className="text-5xl mb-5">🚀</div>

            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                fontFamily: "'Chakra Petch', sans-serif",
                background: 'linear-gradient(135deg, #ffffff, var(--color-primary-light))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor:  'transparent',
                backgroundClip:       'text',
              }}
            >
              Ready to Build?
            </h2>

            <p
              className="text-lg mb-8"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Secure your team's spot before registrations close.
            </p>

            <Link
              to="/register"
              className="inline-block px-10 py-4 rounded-full font-bold text-white text-xl no-underline transition-all duration-300 hover:scale-105 animate-pulse-glow"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
              }}
            >
              Register Now →
            </Link>
          </div>
        </div>
      </div>
    </section>
    {/* ══════════════════════════════════════════════════════════ */}

  </div>
)

export default HomePage
