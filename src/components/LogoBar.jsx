/**
 * LOGO BAR
 * ========
 * Displays the college logo (left) and club logo (right)
 * at the top of every page, just below the navbar.
 *
 * ─── HOW TO ADD YOUR LOGOS ───────────────────────────────────────
 *
 *  1. Place your image files in the /public folder, e.g.:
 *       public/college-logo.png
 *       public/club-logo.png
 *
 *  2. Update the four constants directly below:
 *       COLLEGE_LOGO → '/college-logo.png'
 *       CLUB_LOGO    → '/club-logo.png'
 *
 *  3. Update COLLEGE_NAME and CLUB_NAME with the actual names.
 *
 *  Leave COLLEGE_LOGO or CLUB_LOGO as null to show the dashed
 *  placeholder box until you're ready.
 * ─────────────────────────────────────────────────────────────────
 */

// ── Logo image paths ─────────────────────────────────────────────
const COLLEGE_LOGO = "/Akash-Logo.png"; // ← e.g. '/college-logo.png'
const CLUB_LOGO = "/revonixlogo-removebg-preview.png"; // ← e.g. '/club-logo.png'

// ── Display names shown next to the logos ────────────────────────
const COLLEGE_NAME = "Akash"; // ← update if needed
const CLUB_NAME = "Revonix"; // ← update with your club name

/* ── Placeholder box shown when no logo image is set ── */
const Placeholder = ({ label, accentColor = "var(--color-primary)" }) => (
  <div
    className="h-11 w-11 rounded-xl flex items-center justify-center text-xs font-bold"
    style={{
      background: `rgba(124,58,237,0.08)`,
      border: `1.5px dashed ${accentColor}`,
      color: "var(--color-text-muted)",
      opacity: 0.8,
    }}
  >
    LOGO
  </div>
);

const LogoBar = () => (
  <div
    className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
    style={{ borderBottom: "1px solid rgba(124,58,237,0.08)" }}
  >
    {/* ── College logo (left) ───────────────────────────── */}
    <div className="flex items-center gap-3">
      {COLLEGE_LOGO ? (
        <img
          src={COLLEGE_LOGO}
          alt={`${COLLEGE_NAME} logo`}
          className="h-11 w-auto object-contain"
        />
      ) : (
        <Placeholder label="LOGO" accentColor="var(--color-primary)" />
      )}
      <div>
        <p
          className="text-sm font-semibold leading-tight"
          style={{ color: "var(--color-text)" }}
        >
          {COLLEGE_NAME}
        </p>
        {/* Optional subtitle — e.g. university affiliation */}
        {/* <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Autonomous Institution</p> */}
      </div>
    </div>

    {/* ── Club logo (right) ─────────────────────────────── */}
    <div className="flex items-center gap-3">
      <div className="text-right">
        <p
          className="text-sm font-semibold leading-tight"
          style={{ color: "var(--color-text)" }}
        >
          {CLUB_NAME}
        </p>
        {/* Optional subtitle */}
        {/* <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Technical Club</p> */}
      </div>
      {CLUB_LOGO ? (
        <img
          src={CLUB_LOGO}
          alt={`${CLUB_NAME} logo`}
          className="h-11 w-auto object-contain"
        />
      ) : (
        <Placeholder label="LOGO" accentColor="var(--color-accent)" />
      )}
    </div>
  </div>
);

export default LogoBar;
