import { FiAward, FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="05 — Certifications"
        title="Courses & credentials"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, i) => (
          <Reveal
            key={cert.title}
            delay={i * 0.08}
            className="glass rounded-2xl p-6 text-center flex flex-col items-center hover:border-[var(--color-gold)] transition-colors"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[var(--color-surface-2)] mb-4 text-[var(--color-gold)]">
              <FiAward size={22} />
            </div>
            <h3 className="font-display font-semibold text-sm mb-1">
              {cert.title}
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-1">
              {cert.issuer}
            </p>
            <p className="text-xs font-mono text-[var(--color-text-faint)] mb-4">
              {cert.date}
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="mt-auto flex items-center gap-1 text-xs text-[var(--color-cyan)] hover:underline"
            >
              View <FiExternalLink size={12} />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
