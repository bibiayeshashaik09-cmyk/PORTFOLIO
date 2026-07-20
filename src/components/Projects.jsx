import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="03 — Projects"
        title="Things I've built"
        subtitle="A mix of real-time systems, applied-AI tools, and product-focused apps."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
