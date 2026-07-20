import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import Reveal from "./Reveal";

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className="glass rounded-2xl overflow-hidden flex flex-col group hover:border-[var(--color-cyan)] transition-colors"
    >
      <div className="relative h-44 bg-[var(--color-surface-2)] flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <span className="font-display text-2xl font-semibold text-[var(--color-text-faint)]">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        )}
        {project.featured && (
          <span className="absolute top-3 right-3 flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-full bg-[var(--color-base)]/70 text-[var(--color-gold)] backdrop-blur">
            <FiStar size={12} /> Featured
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--color-surface-2)] text-[var(--color-text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-border)]">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <FiGithub /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-cyan)] transition-colors"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </Reveal>
  );
}
