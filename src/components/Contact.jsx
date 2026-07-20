import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data/portfolioData";

const contactItems = [
  { icon: FiMail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FiPhone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: FiMapPin, label: "Location", value: personalInfo.location, href: null },
  { icon: FiLinkedin, label: "LinkedIn", value: "Connect with me", href: personalInfo.linkedin },
  { icon: FiGithub, label: "GitHub", value: "See my code", href: personalInfo.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: This form is front-end only. Wire it up to a real endpoint —
    // e.g. Formspree, EmailJS, or your own API route — before going live.
    setStatus("sent");
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="07 — Contact"
        title="Let's work together"
        subtitle="Open to internships, full-stack roles, and interesting freelance projects."
      />

      <div className="grid md:grid-cols-2 gap-8">
        <Reveal className="glass rounded-2xl p-8 flex flex-col gap-5">
          {contactItems.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--color-surface-2)] text-[var(--color-cyan)] shrink-0">
                  <Icon size={16} />
                </span>
                <div>
                  <p className="text-xs font-mono text-[var(--color-text-faint)] uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="text-sm text-[var(--color-text)]">{value}</p>
                </div>
              </div>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </Reveal>

        <Reveal delay={0.1} className="glass rounded-2xl p-8">
          {status === "sent" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <p className="font-display text-lg font-semibold mb-2">
                Message sent
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                Thanks for reaching out — I'll reply as soon as I can.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="text-xs font-mono text-[var(--color-text-faint)] uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-cyan)] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-mono text-[var(--color-text-faint)] uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-cyan)] transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-mono text-[var(--color-text-faint)] uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-cyan)] transition-colors resize-none"
                  placeholder="What would you like to say?"
                />
              </div>
              <button
                type="submit"
                className="btn-primary mt-2 px-6 py-3 rounded-full text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Send Message <FiSend size={14} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
