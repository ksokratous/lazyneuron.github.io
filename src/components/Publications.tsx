import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { publications } from "@/data/publications";

const HOMEPAGE_LIMIT = 5;

const Publications = () => {
  const displayedPubs = publications.slice(0, HOMEPAGE_LIMIT);

  return (
    <section id="publications">
      <div className="section-container">
        <div className="editorial-rule" />
        <span className="editorial-label mb-4 block">Selected Works</span>
        <h2 className="section-heading mb-16">Publications</h2>

        <div>
          {displayedPubs.map((pub, i) => (
            <motion.a
              key={i}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              viewport={{ once: true, margin: "-30px" }}
              className="group grid grid-cols-12 gap-4 py-7 border-b border-border hover:bg-card/60 -mx-4 px-4 transition-all duration-500"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="text-3xl md:text-4xl font-normal text-primary/15 group-hover:text-primary/30 transition-colors duration-500" style={{ fontFamily: "var(--font-heading)" }}>
                  {pub.year}
                </span>
              </div>
              <div className="col-span-9 md:col-span-10">
                <p className="editorial-label mb-2">{pub.journal}</p>
                <h3 className="text-lg md:text-xl text-foreground leading-snug mb-2 group-hover:text-primary transition-colors duration-500" style={{ fontFamily: "var(--font-heading)" }}>
                  {pub.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">{pub.authors}</p>
              </div>
              <div className="col-span-1 flex items-start justify-end">
                <span className="text-primary/0 group-hover:text-primary text-[10px] tracking-[0.2em] uppercase transition-all duration-500">↗</span>
              </div>
            </motion.a>
          ))}
        </div>

        {publications.length >= HOMEPAGE_LIMIT && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="mt-12 flex justify-center"
          >
            <Link
              to="/publications"
              className="group inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500"
            >
              View all publications
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Publications;
