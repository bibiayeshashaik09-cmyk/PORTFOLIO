import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import useScrollProgress from "../hooks/useScrollProgress";

// Floating button that appears after the reader has scrolled a bit, and
// smooth-scrolls back to the hero section on click.
export default function BackToTop() {
  const progress = useScrollProgress();
  const visible = progress > 12;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full glass flex items-center justify-center text-[var(--color-text)] hover:border-[var(--color-cyan)] transition-colors"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
