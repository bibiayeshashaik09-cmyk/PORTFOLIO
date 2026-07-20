import { motion } from "framer-motion";

// A single animated skill row: label + mono percentage + gradient progress
// bar that fills in once when it scrolls into view.
export default function SkillBar({ name, level, delay = 0 }) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex justify-between mb-2 text-sm">
        <span className="text-[var(--color-text)]">{name}</span>
        <span className="font-mono text-[var(--color-text-faint)]">
          {level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--color-surface-2)] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-cyan)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
