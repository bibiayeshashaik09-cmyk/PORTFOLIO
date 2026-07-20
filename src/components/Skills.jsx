import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SkillBar from "./SkillBar";
import { skills } from "../data/portfolioData";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="02 — Skills"
        title="Tools I build with"
        subtitle="A working toolkit, not a wishlist — everything here has shipped in a real project."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map(([category, list], i) => (
          <Reveal key={category} delay={i * 0.08} className="glass rounded-2xl p-8">
            <h3 className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--color-cyan)] mb-6">
              {category}
            </h3>
            {list.map((skill, j) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={j * 0.05}
              />
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
