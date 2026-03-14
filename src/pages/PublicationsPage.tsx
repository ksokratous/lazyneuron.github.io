import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { publications } from "@/data/publications";

const PublicationsPage = () => {
  const grouped = publications.reduce<Record<string, typeof publications>>((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="section-container pt-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="editorial-rule" />
        <span className="editorial-label mb-4 block">Complete List</span>
        <h1 className="section-heading mb-16">Publications</h1>

        {years.map((year) => (
          <div key={year} className="mb-16">
            <h2
              className="text-5xl md:text-6xl font-normal text-foreground/8 mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {year}
            </h2>
            <div>
              {grouped[year].map((pub, i) => (
                <motion.a
                  key={i}
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                  viewport={{ once: true, margin: "-30px" }}
                  className="group grid grid-cols-12 gap-4 py-6 border-b border-border hover:bg-card/60 -mx-4 px-4 transition-all duration-500"
                >
                  <div className="col-span-11">
                    <p className="editorial-label mb-2">{pub.journal}</p>
                    <h3
                      className="text-base md:text-lg text-foreground leading-snug mb-2 group-hover:text-muted-foreground transition-colors duration-500"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{pub.authors}</p>
                  </div>
                  <div className="col-span-1 flex items-start justify-end">
                    <span className="text-muted-foreground/0 group-hover:text-muted-foreground text-[10px] tracking-[0.2em] uppercase transition-all duration-500">↗</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsPage;
