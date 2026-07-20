import { FiAward } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { achievements } from "../data/portfolioData";

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <SectionHeading eyebrow="06 — Achievements" title="Beyond coursework" />

      <div className="grid sm:grid-cols-2 gap-6">
        {achievements.map((group, i) => (
          <Reveal
            key={group.category}
            delay={i * 0.08}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--color-surface-2)] text-[var(--color-cyan)]">
                <FiAward size={16} />
              </span>
              <h3 className="font-display font-semibold">{group.category}</h3>
            </div>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-indigo)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
