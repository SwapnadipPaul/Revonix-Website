/**
 * EVENT DETAILS PAGE  (route: /event)
 * =====================================
 * Sections on this page (top to bottom):
 *   1. Page header
 *   2. Event Objectives — what participants gain
 *   3. Rules & Regulations
 *   4. Certificates Provided
 *   5. Schedule (empty until finalised — see comments below)
 *
 * All content data lives in: src/data/eventData.js
 * Edit that file to update objectives, rules, certificates, schedule.
 */

import LogoBar      from '../components/LogoBar.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import {
  objectives,
  generalRules,
  certificates,
  schedule,
} from '../data/eventData.js'

const EventPage = () => (
  <div className="min-h-screen pt-16">

    {/* Logo bar */}
    <LogoBar />

    {/* ── Page header ───────────────────────────────────────────── */}
    <section className="py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: 'rgba(124,58,237,0.12)',
            border:     '1px solid rgba(124,58,237,0.38)',
            color:      'var(--color-primary-light)',
          }}
        >
          📋 Event Information
        </div>

        <h1
          className="text-5xl md:text-6xl font-black mb-4"
          style={{
            fontFamily: "'Chakra Petch', sans-serif",
            background: 'linear-gradient(135deg, #ffffff, #C4B5FD)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor:  'transparent',
            backgroundClip:       'text',
          }}
        >
          Event Details
        </h1>

        <p style={{ color: 'var(--color-text-muted)' }}>
          Rules, objectives, certificates, and everything you need to prepare.
        </p>
      </div>
    </section>


    {/* ══════════════════════════════════════════════════════════
        OBJECTIVES — "What You'll Gain"
        ================================
        Edit the list in src/data/eventData.js → objectives[]
    ════════════════════════════════════════════════════════════ */}
    <section className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Event Objective"
          subtitle="What participants will gain from RoboGenesis 2026"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {objectives.map((obj, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background:     'rgba(17,17,40,0.75)',
                border:         '1px solid rgba(124,58,237,0.2)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Numbered circle */}
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                }}
              >
                {i + 1}
              </div>
              <p
                className="text-sm leading-relaxed pt-1"
                style={{ color: 'var(--color-text)' }}
              >
                {obj}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* ══════════════════════════════════════════════════════════
        RULES & REGULATIONS
        ====================
        Edit the list in src/data/eventData.js → generalRules[]
    ════════════════════════════════════════════════════════════ */}
    <section className="py-14 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Rules & Regulations"
          subtitle="Please read carefully before registering your team"
        />

        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background:     'rgba(17,17,40,0.75)',
            border:         '1px solid rgba(124,58,237,0.22)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Section header bar */}
          <div
            className="px-6 py-4 flex items-center gap-3"
            style={{
              background:  'rgba(124,58,237,0.12)',
              borderBottom:'1px solid rgba(124,58,237,0.18)',
            }}
          >
            <span className="text-xl">⚙️</span>
            <h3
              className="font-semibold"
              style={{ color: 'var(--color-primary-light)' }}
            >
              General Rules
            </h3>
          </div>

          {/* Rules list */}
          <ul className="divide-y" style={{ '--tw-divide-opacity': 1 }}>
            {generalRules.map((rule, i) => (
              <li
                key={i}
                className="flex items-start gap-4 px-6 py-4 transition-colors duration-200"
                style={{ borderColor: 'rgba(124,58,237,0.1)' }}
              >
                {/* Rule index */}
                <span
                  className="flex-shrink-0 font-mono text-xs mt-0.5 w-6 text-right"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm" style={{ color: 'var(--color-text)' }}>
                  {rule}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>


    {/* ══════════════════════════════════════════════════════════
        CERTIFICATES PROVIDED
        ======================
        Edit in src/data/eventData.js → certificates[]
    ════════════════════════════════════════════════════════════ */}
    <section className="py-14 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Certificates Provided"
          subtitle="Recognition for all participants and winning teams"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-8 text-center overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              style={{
                background:     'rgba(17,17,40,0.75)',
                border:         '1px solid rgba(124,58,237,0.28)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Subtle inner glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: i === 0
                    ? 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 65%)'
                    : 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.09) 0%, transparent 65%)',
                }}
              />

              <div className="relative z-10">
                <div className="text-6xl mb-5">{cert.icon}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Chakra Petch', sans-serif", color: 'var(--color-text)' }}
                >
                  {cert.type}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* ══════════════════════════════════════════════════════════
        SCHEDULE
        =========
        HOW TO ADD THE SCHEDULE:
        ─────────────────────────
        1. Open src/data/eventData.js
        2. Find the `schedule` array near the bottom of the file
        3. Uncomment the example items and fill in actual values
        4. Each item needs:  { time, activity, location }
        5. Save — this section will populate automatically.

        The "Coming Soon" placeholder is shown when the
        schedule array is empty (schedule.length === 0).
    ════════════════════════════════════════════════════════════ */}
    <section className="py-14 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Event Schedule"
          subtitle="Day-of timeline and activity breakdown"
        />

        {schedule.length === 0 ? (
          /* ── Empty state — shown until schedule is finalised ── */
          <div
            className="rounded-2xl p-14 text-center"
            style={{
              background:     'rgba(17,17,40,0.5)',
              border:         '1.5px dashed rgba(124,58,237,0.28)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="text-5xl mb-5">🗓️</div>
            <h3
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Chakra Petch', sans-serif", color: 'var(--color-text)' }}
            >
              Schedule Coming Soon
            </h3>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              The detailed schedule will be announced after finalisation.
              Check back closer to the event date.
            </p>
            {/*
              Developer reminder:
              Add schedule items in src/data/eventData.js → schedule[]
            */}
          </div>
        ) : (
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute"
              style={{
                left:       '5.5rem',
                top:        0,
                bottom:     0,
                width:      '1px',
                background: 'linear-gradient(180deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                opacity:    0.35,
              }}
            />

            {schedule.map((item, i) => (
              <div key={i} className="flex gap-5 mb-5 relative">
                {/* Time label */}
                <div
                  className="w-20 flex-shrink-0 text-right text-xs font-mono pt-3.5 leading-tight"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {item.time}
                </div>

                {/* Timeline dot */}
                <div
                  className="relative z-10 flex-shrink-0 mt-3"
                  style={{
                    width:        12,
                    height:       12,
                    borderRadius: '50%',
                    background:   'var(--color-primary)',
                    boxShadow:    '0 0 8px rgba(124,58,237,0.6)',
                  }}
                />

                {/* Activity card */}
                <div
                  className="flex-1 p-4 rounded-xl"
                  style={{
                    background:     'rgba(17,17,40,0.75)',
                    border:         '1px solid rgba(124,58,237,0.18)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <p className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>
                    {item.activity}
                  </p>
                  {item.location && (
                    <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                      📍 {item.location}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>

  </div>
)

export default EventPage
