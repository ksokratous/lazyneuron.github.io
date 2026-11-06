import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <div className="editorial-rule" />
        <span className="editorial-label mb-4 block">Research</span>
        <h2 className="section-heading mb-16">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              viewport={{ once: true, margin: "-30px" }}
            >
              <Link
                to={`/project/${project.slug}`}
                className="group p-8 md:p-10 border-b border-r border-border last:border-b-0 hover:bg-card transition-all duration-500 block relative"
              >
                <span
                  className="text-5xl md:text-6xl font-normal text-primary/8 group-hover:text-primary/20 transition-colors duration-500 absolute top-4 right-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {project.number}
                </span>
                <span className="editorial-label mb-3 block">{project.category}</span>
                <h3
                  className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-500 leading-snug pr-8"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {project.title}
                </h3>
                <span className="text-primary/0 group-hover:text-primary text-[10px] tracking-[0.2em] uppercase absolute bottom-8 right-8 transition-all duration-500">View →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
