import { motion } from "framer-motion";
import { FiDownload, FiMail, FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";
import TypingText from "./TypingText";
import { personalInfo } from "../data/portfolioData";

const roles = [
  "Full Stack Developer",
  "JavaScript & Node.js Developer",
  "Final-Year B.Tech IT Student",
  "React Developer",
];

export default function Hero() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* Ambient gradient mesh background — the hero's signature element */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-32 w-[32rem] h-[32rem] rounded-full blur-[120px] opacity-30"
          style={{ background: "var(--color-indigo)" }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-8rem] right-[-6rem] w-[28rem] h-[28rem] rounded-full blur-[120px] opacity-25"
          style={{ background: "var(--color-cyan)" }}
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-8 rounded-full glass p-1"
        >
          {personalInfo.photo ? (
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-cyan)] font-display text-3xl font-bold text-[#060709]">
              {personalInfo.name
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("")}
            </div>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="section-label mb-4"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-[var(--color-text-muted)] h-8 mb-6"
        >
          <TypingText words={roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-xl mx-auto text-[var(--color-text-muted)] leading-relaxed mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href={personalInfo.resumeUrl}
            download
            className="btn-primary px-6 py-3 rounded-full text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <FiDownload /> Download Resume
          </a>
          <button
            onClick={() => scrollTo("#contact")}
            className="glass px-6 py-3 rounded-full text-sm flex items-center gap-2 text-[var(--color-text)] hover:border-[var(--color-cyan)] transition-colors"
          >
            <FiMail /> Contact Me
          </button>
          <button
            onClick={() => scrollTo("#projects")}
            className="px-6 py-3 rounded-full text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors border border-transparent"
          >
            View Projects →
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-cyan)] transition-colors text-xl"
          >
            <FiGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-cyan)] transition-colors text-xl"
          >
            <FiLinkedin />
          </a>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-faint)] hover:text-[var(--color-text)] transition-colors"
      >
        <FiArrowDown size={20} />
      </motion.button>
    </section>
  );
}
