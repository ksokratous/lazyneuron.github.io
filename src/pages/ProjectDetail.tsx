import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="section-heading mb-4">Project not found</h1>
          <Link to="/#projects" className="editorial-label hover:text-foreground transition-colors">
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-14">
          <Link
            to="/"
            className="text-lg text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            K<span className="text-primary">.</span>S<span className="text-primary">.</span>
          </Link>
          <Link
            to="/#projects"
            className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </Link>
        </div>
      </nav>

      <main className="pt-14">
        <div className="section-container">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="editorial-rule" />
            <span className="editorial-label mb-4 block">{project.category}</span>

            <div className="grid grid-cols-12 gap-8 md:gap-16">
              <div className="col-span-12 md:col-span-2">
                <span
                  className="text-7xl md:text-8xl font-normal text-foreground/10"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {project.number}
                </span>
              </div>

              <div className="col-span-12 md:col-span-10">
                <h1
                  className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground leading-tight mb-10"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {project.title}
                </h1>

                <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mb-12">
                  {project.description}
                </p>

                {project.methods && project.methods.length > 0 && (
                  <div>
                    <span className="editorial-label mb-4 block">Methods & Tools</span>
                    <div className="flex flex-wrap gap-3">
                      {project.methods.map((method) => (
                        <span
                          key={method}
                          className="text-xs tracking-[0.1em] uppercase text-foreground/70 border border-border px-4 py-2 hover:border-primary/40 transition-colors"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
