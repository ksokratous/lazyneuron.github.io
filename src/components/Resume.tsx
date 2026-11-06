import { motion } from "framer-motion";
import { Download } from "lucide-react";

const experience = [
  { period: "2025 – Present", role: "Postdoctoral Fellow", place: "University of Missouri", desc: "Develop machine-learning and measurement tools to evaluate AI systems and decision-making, integrating behavioral and multimodal data." },
  { period: "2024 – 2025", role: "Visiting Scholar", place: "Ohio State University", desc: "Experiential vs descriptive decision-making and joint modeling." },
  { period: "2020 – 2025", role: "Data Analyst", place: "University of Florida · Graduate Research Assistant", desc: "Built statistical and machine-learning models and automated analysis workflows to uncover patterns in behavioral data." },
  { period: "2016 – Present", role: "CEO & Co-Founder", place: "CCIF Cyprus", desc: "Co-founded and led a nonprofit advancing women's rights and supporting immigrant communities and youth through mentoring." },
  { period: "2018 – 2020", role: "Operations Analyst", place: "Olea Medical / Canon Inc", desc: "Applied statistical modeling, optimization, and data-pipeline analysis to support automated medical diagnosis and operational decisions." },
];

const education = [
  { period: "2020 – 2025", degree: "Ph.D., Behavioral and Cognitive Neuroscience", place: "University of Florida", note: "Dissertation: Machine Learning Methods for Discovering Latent Structures — AI tools for cognitive neuroscience." },
  { period: "2020 – 2022", degree: "M.Sc., Behavioral and Cognitive Neuroscience", place: "University of Florida", note: "Thesis: SINs: Simulation Inversion Networks for Automated Model Fitting — neural methods for fast, likelihood-free model fitting." },
  { period: "2018 – 2019", degree: "M.Sc., Operations Management", place: "Montpellier Business School", note: "Industry-funded program; ranked 2nd of 16." },
];

const skills = [
  { name: "Python", pct: 95 },
  { name: "Matlab", pct: 80 },
  { name: "HTML/CSS/JS", pct: 75 },
  { name: "R", pct: 65 },
];

const rowAnim = (i: number) => ({
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  viewport: { once: true, margin: "-30px" as const },
});

const Resume = () => {
  return (
    <section id="resume">
      <div className="section-container">
        <div className="editorial-rule" />
        <span className="editorial-label mb-4 block">Curriculum Vitae</span>
        <h2 className="section-heading mb-4">Experience & Education</h2>
        <p className="text-sm text-muted-foreground mb-16">
          For full details, see{" "}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            my full resume
          </a>.
        </p>

        <div className="mb-20">
          <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 border-b border-border pb-3">Experience</h3>
          <div className="space-y-0">
            {experience.map((item, i) => (
              <motion.div key={i} {...rowAnim(i)} className="grid grid-cols-12 gap-4 py-5 border-b border-border group">
                <span className="col-span-12 md:col-span-2 text-xs text-muted-foreground/60">{item.period}</span>
                <div className="col-span-12 md:col-span-4">
                  <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-500" style={{ fontFamily: "var(--font-heading)" }}>{item.role}</h4>
                  <p className="text-sm md:text-base text-primary/70">{item.place}</p>
                </div>
                <p className="col-span-12 md:col-span-6 text-xs md:text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 border-b border-border pb-3">Education</h3>
          <div className="space-y-0">
            {education.map((item, i) => (
              <motion.div key={i} {...rowAnim(i)} className="grid grid-cols-12 gap-4 py-5 border-b border-border group">
                <span className="col-span-12 md:col-span-2 text-xs text-muted-foreground/60">{item.period}</span>
                <div className="col-span-12 md:col-span-4">
                  <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-500" style={{ fontFamily: "var(--font-heading)" }}>{item.degree}</h4>
                  <p className="text-sm md:text-base text-primary/70">{item.place}</p>
                </div>
                <p className="col-span-12 md:col-span-6 text-xs md:text-sm text-muted-foreground">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 border-b border-border pb-3">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 max-w-3xl">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-xs">{skill.pct}%</span>
                </div>
                <div className="h-[2px] bg-border overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.pct}%` }}
                    transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/resume.pdf"
            download="Sokratous_Academic_CV_2026.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-sm tracking-[0.15em] uppercase text-foreground hover:text-primary hover:border-primary transition-colors duration-500"
          >
            <Download className="w-4 h-4" />
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
