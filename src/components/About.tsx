import { motion } from "framer-motion";

const areas = [
  { number: "01", title: "Research", description: "Decision-making, risky and intertemporal choice, procrastination, cognitive models, AI, and theoretical modeling." },
  { number: "02", title: "Data Science", description: "Probabilistic modeling, deep learning for amortized inference, simulation studies, and joint modeling for neural and behavioral data." },
  { number: "03", title: "Teaching & Writing", description: "Cognitive neuroscience, clinical psychology, AI. Course development, instruction, and public speaking." },
  { number: "04", title: "Management", description: "Project and people management, mentoring, collaboration coordination, and research data management." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const About = () => {
  return (
    <section id="about">
      <div className="section-container">
        <div className="editorial-rule" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div {...fadeUp}>
              <span className="editorial-label mb-4 block">About</span>
              <h2 className="section-heading mb-6">
                The <em className="text-primary">lazy</em> neuron.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Postdoctoral scholar at the University of Missouri. Developing
                machine learning approaches to model fitting and joint modeling of
                various types of data. Current projects include evaluating AI,
                Machine Psychometrics, and Autonomous Experimentation in Scientific
                Instruments.
              </p>

              <div className="flex flex-wrap gap-2 mt-8">
                {["AI", "Cognitive Science", "Computational Modeling", "Bayesian Methods"].map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-500"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            {areas.map((area, i) => (
              <motion.div
                key={area.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                viewport={{ once: true, margin: "-30px" }}
                className="group py-7 border-b border-border flex gap-6 items-start cursor-default"
              >
                <span className="text-xs text-primary/30 font-mono mt-1.5 shrink-0 group-hover:text-primary transition-colors duration-500">{area.number}</span>
                <div>
                  <h3 className="text-xl md:text-2xl text-foreground mb-1.5 group-hover:text-primary transition-colors duration-500" style={{ fontFamily: "var(--font-heading)" }}>
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
