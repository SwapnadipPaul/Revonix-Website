/**
 * REGISTRATION PAGE  (route: /register)
 * =======================================
 * Sections on this page (top to bottom):
 *   1. Page header
 *   2. Registration info cards (fee, deadline, payment modes)
 *   3. QR code + online registration link
 *   4. Contact Us (email, student & faculty coordinators)
 *
 * All content data lives in: src/data/contactData.js
 * Edit that file to update every value on this page.
 */

import LogoBar      from '../components/LogoBar.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { registrationInfo, contactInfo } from '../data/contactData.js'

/* ══════════════════════════════════════════════════════════════════
   REGISTRATION PAGE COMPONENT
═══════════════════════════════════════════════════════════════════ */
const RegistrationPage = () => (
  <div className="min-h-screen pt-16">

    {/* Logo bar */}
    <LogoBar />

    {/* ── Page header ───────────────────────────────────────────── */}
    <section className="py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: 'rgba(124,58,237,0.12)',
            border:     '1px solid rgba(124,58,237,0.38)',
            color:      'var(--color-primary-light)',
          }}
        >
          📝 Secure Your Spot
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
          Register
        </h1>

        <p style={{ color: 'var(--color-text-muted)' }}>
          Join RoboGenesis 2026 and showcase your robotics skills.
        </p>
      </div>
    </section>


    {/* ══════════════════════════════════════════════════════════
        REGISTRATION INFO CARDS
        ========================
        Fee, Deadline, and Payment Modes.
        Update all values in src/data/contactData.js
    ════════════════════════════════════════════════════════════ */}
    <section className="py-4 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">

          {/* Fee */}
          <InfoCard icon="💰" label="Registration Fee" accent="primary">
            <span className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
              {/* Update fee in src/data/contactData.js */}
              {registrationInfo.fee}
            </span>
          </InfoCard>

          {/* Deadline */}
          <InfoCard icon="⏳" label="Registration Deadline" accent="accent">
            <span className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
              {/* Update deadline in src/data/contactData.js */}
              {registrationInfo.deadline}
            </span>
          </InfoCard>

          {/* Payment modes */}
          <InfoCard icon="💳" label="Payment Modes" accent="primary">
            <div className="flex flex-wrap gap-2 justify-center mt-1">
              {/* Update paymentModes in src/data/contactData.js */}
              {registrationInfo.paymentModes.map(mode => (
                <span
                  key={mode}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: 'rgba(124,58,237,0.18)',
                    color:      'var(--color-primary-light)',
                    border:     '1px solid rgba(124,58,237,0.3)',
                  }}
                >
                  {mode}
                </span>
              ))}
            </div>
          </InfoCard>
        </div>


        {/* ══════════════════════════════════════════════════════
            QR CODE + REGISTRATION FORM LINK
        ════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {/* ── QR Code ──────────────────────────────────────── */}
          <div
            className="p-8 rounded-2xl text-center"
            style={{
              background:     'rgba(17,17,40,0.75)',
              border:         '1px solid rgba(124,58,237,0.28)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <h3
              className="text-lg font-bold mb-5"
              style={{ fontFamily: "'Chakra Petch', sans-serif", color: 'var(--color-text)' }}
            >
              Scan to Pay
            </h3>

            {/*
              QR CODE SETUP:
              ─────────────
              1. Save your QR code image as:  public/qr-code.png
              2. In src/data/contactData.js, set:
                   qrCodePath: '/qr-code.png'
              3. The image will appear automatically below.
              Leave qrCodePath as null to show the placeholder.
            */}
            <div
              className="w-44 h-44 mx-auto rounded-xl flex items-center justify-center mb-5 overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border:     '2px dashed rgba(124,58,237,0.35)',
              }}
            >
              {registrationInfo.qrCodePath ? (
                <img
                  src={registrationInfo.qrCodePath}
                  alt="Payment QR code"
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                /* Placeholder — shown when qrCodePath is null */
                <div className="text-center">
                  <div className="text-4xl mb-2">🔲</div>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    Add QR code to<br />public/qr-code.png
                  </p>
                </div>
              )}
            </div>

            {/* UPI ID display */}
            <div
              className="inline-block px-4 py-2 rounded-lg text-sm font-mono"
              style={{
                background: 'rgba(124,58,237,0.1)',
                border:     '1px solid rgba(124,58,237,0.3)',
                color:      'var(--color-primary-light)',
              }}
            >
              {/* Update UPI ID in src/data/contactData.js */}
              UPI: {registrationInfo.upiId}
            </div>
          </div>

          {/* ── Online registration form ──────────────────────── */}
          <div
            className="p-8 rounded-2xl flex flex-col justify-center"
            style={{
              background:     'rgba(17,17,40,0.75)',
              border:         '1px solid rgba(6,182,212,0.28)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="text-center mb-7">
              <div className="text-5xl mb-4">📋</div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "'Chakra Petch', sans-serif", color: 'var(--color-text)' }}
              >
                Online Registration
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                Fill out the registration form and complete your payment to confirm your team's spot.
              </p>
            </div>

            {/*
              REGISTRATION LINK:
              ──────────────────
              Update registrationLink in src/data/contactData.js
              with your actual Google Form / portal URL.
            */}
            <a
              href={registrationInfo.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 rounded-full font-bold text-white text-center no-underline transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
                boxShadow:  '0 0 28px rgba(124,58,237,0.38)',
              }}
            >
              Register Here →
            </a>

            <p
              className="text-center text-xs mt-4"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Deadline:{' '}
              <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
                {registrationInfo.deadline}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>


    {/* ══════════════════════════════════════════════════════════
        CONTACT US
        ===========
        All contact details → src/data/contactData.js
    ════════════════════════════════════════════════════════════ */}
    <section className="py-14 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Contact Us"
          subtitle="Have questions? Reach out to our coordinators"
        />

        {/* Email */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-6"
          style={{
            background:     'rgba(17,17,40,0.75)',
            border:         '1px solid rgba(124,58,237,0.22)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span className="text-3xl">📧</span>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{ color: 'var(--color-accent)' }}
            >
              Official Email
            </p>
            {/* Update email in src/data/contactData.js */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="font-semibold no-underline hover:underline transition-colors"
              style={{ color: 'var(--color-text)' }}
            >
              {contactInfo.email}
            </a>
          </div>
        </div>

        {/* Coordinator grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Student coordinators */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              👩‍🎓 Student Coordinators
            </h3>
            {/* Add/edit in src/data/contactData.js → studentCoordinators[] */}
            {contactInfo.studentCoordinators.map((c, i) => (
              <CoordinatorCard key={i} coordinator={c} />
            ))}
          </div>

          {/* Faculty coordinators */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              👨‍🏫 Faculty Coordinators
            </h3>
            {/* Add/edit in src/data/contactData.js → facultyCoordinators[] */}
            {contactInfo.facultyCoordinators.map((c, i) => (
              <CoordinatorCard key={i} coordinator={c} isFaculty />
            ))}
          </div>

        </div>
      </div>
    </section>

  </div>
)


/* ════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   (defined in the same file to keep Registration self-contained)
════════════════════════════════════════════════════════════════ */

/* ── InfoCard — used for fee / deadline / payment modes ── */
const InfoCard = ({ icon, label, accent = 'primary', children }) => {
  const borderColor =
    accent === 'accent'
      ? 'rgba(6,182,212,0.28)'
      : 'rgba(124,58,237,0.28)'

  return (
    <div
      className="p-6 rounded-2xl text-center"
      style={{
        background:     'rgba(17,17,40,0.75)',
        border:         `1px solid ${borderColor}`,
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-3"
        style={{ color: 'var(--color-accent)' }}
      >
        {label}
      </p>
      {children}
    </div>
  )
}

/* ── CoordinatorCard — used for both student and faculty ── */
const CoordinatorCard = ({ coordinator, isFaculty = false }) => (
  <div
    className="p-5 rounded-xl mb-4 last:mb-0"
    style={{
      background:     'rgba(17,17,40,0.75)',
      border:         '1px solid rgba(124,58,237,0.2)',
      backdropFilter: 'blur(10px)',
    }}
  >
    {/* Avatar + name row */}
    <div className="flex items-center gap-3 mb-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
        style={{
          background: isFaculty
            ? 'rgba(6,182,212,0.15)'
            : 'rgba(124,58,237,0.15)',
        }}
      >
        {isFaculty ? '👨‍🏫' : '👩‍🎓'}
      </div>
      <div>
        {/* Name — edit in src/data/contactData.js */}
        <p className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>
          {coordinator.name}
        </p>
        {/* Role + optional department */}
        <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
          {coordinator.role}
          {coordinator.department && ` · ${coordinator.department}`}
        </p>
      </div>
    </div>

    {/* Contact links */}
    <div className="space-y-1.5 pl-1">
      {coordinator.phone && (
        <a
          href={`tel:${coordinator.phone}`}
          className="flex items-center gap-2 text-xs no-underline hover:underline transition-colors"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <span>📞</span>
          <span>{coordinator.phone}</span>
        </a>
      )}
      {coordinator.email && (
        <a
          href={`mailto:${coordinator.email}`}
          className="flex items-center gap-2 text-xs no-underline hover:underline transition-colors"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <span>✉️</span>
          <span>{coordinator.email}</span>
        </a>
      )}
    </div>
  </div>
)

export default RegistrationPage
