import { FiCheck } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { aboutMe } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="01 — About"
        title="A little about how I work"
        subtitle="The short version: I like building things that actually run in production, not just in a demo."
      />

      <div className="grid md:grid-cols-2 gap-8">
        <Reveal delay={0.05} className="glass rounded-2xl p-8">
          <h3 className="font-display text-xl font-semibold mb-3">Summary</h3>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
            {aboutMe.summary}
          </p>
          <h3 className="font-display text-xl font-semibold mb-3">
            Career Objective
          </h3>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            {aboutMe.objective}
          </p>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal delay={0.1} className="glass rounded-2xl p-8">
            <h3 className="font-display text-xl font-semibold mb-4">
              Education
            </h3>
            <div className="flex flex-col gap-5">
              {aboutMe.education.map((ed) => (
                <div
                  key={ed.degree}
                  className="border-l-2 border-[var(--color-indigo)] pl-4"
                >
                  <p className="font-medium">{ed.degree}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {ed.institution}
                  </p>
                  <p className="text-xs font-mono text-[var(--color-text-faint)] mt-1">
                    {ed.duration} · {ed.score}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="glass rounded-2xl p-8">
            <h3 className="font-display text-xl font-semibold mb-4">
              Strengths
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {aboutMe.strengths.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"
                >
                  <FiCheck className="text-[var(--color-cyan)] shrink-0" /> {s}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
              <p className="text-xs font-mono text-[var(--color-text-faint)] mb-2">
                LANGUAGES KNOWN
              </p>
              <div className="flex flex-wrap gap-2">
                {aboutMe.languagesKnown.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 rounded-full text-xs bg-[var(--color-surface-2)] text-[var(--color-text-muted)]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
