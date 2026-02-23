/**
 * SECTION TITLE
 * =============
 * Reusable heading component used at the top of each section.
 *
 * Props:
 *   title    (string) — main heading text            [required]
 *   subtitle (string) — optional sub-heading text
 *   centered (bool)   — center-align the title       [default: true]
 *   tag      (string) — HTML element to use, e.g. 'h2' or 'h3' [default: 'h2']
 *
 * Usage example:
 *   <SectionTitle
 *     title="Challenge Themes"
 *     subtitle="Click a card to reveal details."
 *   />
 */

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  tag: Tag  = 'h2',
}) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    {/* Decorative gradient accent line above the title */}
    <div
      className={`h-px w-14 mb-5 ${centered ? 'mx-auto' : ''}`}
      style={{
        background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
      }}
    />

    {/* Main heading */}
    <Tag
      className="text-3xl md:text-4xl font-bold mb-4"
      style={{
        fontFamily: "'Chakra Petch', sans-serif",
        background: 'linear-gradient(135deg, #ffffff 0%, var(--color-primary-light) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor:  'transparent',
        backgroundClip:       'text',
      }}
    >
      {title}
    </Tag>

    {/* Optional subtitle */}
    {subtitle && (
      <p
        className={`text-base md:text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
        style={{ color: 'var(--color-text-muted)' }}
      >
        {subtitle}
      </p>
    )}
  </div>
)

export default SectionTitle
