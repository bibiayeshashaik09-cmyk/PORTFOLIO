import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="04 — Experience"
        title="Where I've applied it"
        subtitle="Internships, freelance work, and hands-on events — in roughly chronological order."
      />

      <div className="relative pl-8 border-l border-[var(--color-border)]">
        {experience.map((exp, i) => (
          <Reveal
            key={exp.title + exp.duration}
            delay={i * 0.08}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-cyan)]" />
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-cyan)]">
                  {exp.type}
                </span>
                <span className="text-xs font-mono text-[var(--color-text-faint)]">
                  {exp.duration}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg">
                {exp.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-3">
                {exp.organization}
              </p>
              <ul className="list-disc list-inside space-y-1.5">
                {exp.points.map((p) => (
                  <li
                    key={p}
                    className="text-sm text-[var(--color-text-muted)] leading-relaxed"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
