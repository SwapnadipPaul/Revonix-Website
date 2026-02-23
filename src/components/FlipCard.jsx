/**
 * FLIP CARD
 * =========
 * A 3-D flip card for the challenge themes.
 *
 * FRONT: Shows emoji, title, short description, and an ℹ️ indicator.
 * BACK:  Shows full description + evaluation criteria with progress bars.
 *
 * Click anywhere on the card to flip it.
 * The flip animation uses CSS 3-D transforms (defined in src/index.css).
 *
 * Props:
 *   theme (object) — a single item from src/data/themes.js
 *
 * To change card height: update the height value in the wrapper div below.
 * To change flip speed: edit the transition in .flip-card-inner (index.css).
 */

import { useState } from 'react'

const FlipCard = ({ theme }) => {
  /* flipped state — toggled on click */
  const [flipped, setFlipped] = useState(false)

  return (
    /* Outer wrapper sets perspective for the 3-D effect */
    <div
      className="flip-card cursor-pointer select-none"
      style={{ height: '330px' }}
      onClick={() => setFlipped(f => !f)}
      role="button"
      tabIndex={0}
      aria-label={`${theme.title} – click to flip`}
      /* Also allow keyboard activation */
      onKeyDown={e => e.key === 'Enter' && setFlipped(f => !f)}
    >
      {/* Inner div — this is the element that rotates */}
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>

        {/* ══════════════════ CARD FRONT ══════════════════════ */}
        <div
          className="flip-card-face"
          style={{
            background:   'rgba(17, 17, 40, 0.82)',
            border:       '1px solid rgba(124,58,237,0.28)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Gradient top border accent */}
          <div
            style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
            }}
          />

          {/* ℹ️ indicator — top-right corner ─────────────────────
              This icon hints that the card is flippable.
              To change the icon, replace the emoji below.
              To hide it, delete this block.
          ────────────────────────────────────────────────────── */}
          <div
            className="absolute top-3 right-3 text-base leading-none"
            title="Click to see details"
            style={{ opacity: 0.75 }}
          >
            ℹ️
          </div>

          {/* Front content */}
          <div className="flex flex-col items-center justify-center h-full px-6 py-8 text-center">

            {/* Large emoji icon */}
            <div
              className="text-6xl mb-5"
              style={{
                filter:    'drop-shadow(0 0 18px rgba(124,58,237,0.55))',
                lineHeight: 1,
              }}
            >
              {theme.emoji}
            </div>

            {/* Challenge title */}
            <h3
              className="text-lg font-bold mb-3 leading-snug"
              style={{
                fontFamily: "'Chakra Petch', sans-serif",
                color:      'var(--color-text)',
              }}
            >
              {theme.title}
            </h3>

            {/* One-line teaser */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {theme.shortDesc}
            </p>

            {/* "Tap for details" hint */}
            <div
              className="mt-5 flex items-center gap-1.5 text-xs font-medium"
              style={{ color: 'var(--color-accent)' }}
            >
              <span>Tap for details</span>
              <span style={{ fontSize: '0.65rem' }}>▶</span>
            </div>
          </div>
        </div>
        {/* ══════════════════ END FRONT ═══════════════════════ */}


        {/* ══════════════════ CARD BACK ═══════════════════════ */}
        <div
          className="flip-card-face flip-card-back flex flex-col"
          style={{
            background:   'rgba(10, 8, 28, 0.94)',
            border:       '1px solid rgba(124,58,237,0.45)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Gradient top border — accent reversed for the back */}
          <div
            style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, var(--color-accent), var(--color-primary))',
            }}
          />

          {/* Back content */}
          <div className="flex flex-col h-full p-5 pt-6 overflow-y-auto">

            {/* Title row */}
            <h3
              className="text-sm font-bold mb-3 flex items-center gap-2"
              style={{
                fontFamily: "'Chakra Petch', sans-serif",
                color:      'var(--color-primary-light)',
              }}
            >
              <span>{theme.emoji}</span>
              <span>{theme.title}</span>
            </h3>

            {/* Full description */}
            <p
              className="text-xs leading-relaxed mb-4"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {theme.description}
            </p>

            {/* Evaluation criteria */}
            <div className="mt-auto">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-accent)' }}
              >
                Evaluation Criteria
              </p>

              {/* One row per criterion */}
              {theme.criteria.map(({ label, percentage }) => (
                <div key={label} className="mb-2.5">
                  <div className="flex justify-between text-xs mb-1">
                    <span style={{ color: 'var(--color-text)' }}>{label}</span>
                    <span
                      className="font-semibold"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {percentage}%
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div
                    className="h-1 rounded-full overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width:      `${percentage}%`,
                        background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                        transition: 'width 0.6s ease',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Flip-back hint */}
            <p
              className="text-xs mt-3 text-center"
              style={{ color: 'rgba(136,136,170,0.5)' }}
            >
              ← Tap to go back
            </p>
          </div>
        </div>
        {/* ══════════════════ END BACK ════════════════════════ */}

      </div>
    </div>
  )
}

export default FlipCard
