import Reveal from "./Reveal";

// Consistent "eyebrow label + heading" header used at the top of every
// section — the mono eyebrow label nods to the developer/terminal identity
// established in the hero.
export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
      <span className="section-label">{eyebrow}</span>
      <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 mb-4 text-[var(--color-text)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-text-muted)] leading-relaxed">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
