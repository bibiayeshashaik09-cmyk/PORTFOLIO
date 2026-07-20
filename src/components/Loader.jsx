import { motion } from "framer-motion";

// Brief full-screen loading animation shown while the app mounts. Kept short
// and calm — a loader's job is to reassure, not entertain.
export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-base)]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <span className="font-mono text-sm tracking-[0.3em] text-[var(--color-text-faint)]">
          PORTFOLIO
        </span>
        <div className="w-40 h-[2px] bg-[var(--color-surface-2)] overflow-hidden rounded-full">
          <motion.div
            className="h-full w-1/3 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-cyan)]"
            animate={{ x: ["-100%", "300%"] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
