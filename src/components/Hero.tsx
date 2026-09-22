import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.gif";

const ROLE_TEXT = "Postdoctoral Fellow · University of Missouri";
const FOCUS_TEXT = "Cognitive science · AI evaluation · Computational modeling · Bayesian methods";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const [typedRole, setTypedRole] = useState("");
  const [typedFocus, setTypedFocus] = useState("");
  const [typingLine, setTypingLine] = useState<"role" | "focus" | null>("role");

  useEffect(() => {
    const reduceMotion =
      shouldReduceMotion ?? window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setTypedRole(ROLE_TEXT);
      setTypedFocus(FOCUS_TEXT);
      setTypingLine(null);
      return;
    }

    let roleIndex = 0;
    let focusIndex = 0;
    let roleInterval = 0;
    let focusInterval = 0;
    let pauseTimeout = 0;

    setTypedRole("");
    setTypedFocus("");
    setTypingLine("role");

    roleInterval = window.setInterval(() => {
      roleIndex += 1;
      setTypedRole(ROLE_TEXT.slice(0, roleIndex));

      if (roleIndex >= ROLE_TEXT.length) {
        window.clearInterval(roleInterval);
        pauseTimeout = window.setTimeout(() => {
          setTypingLine("focus");
          focusInterval = window.setInterval(() => {
            focusIndex += 1;
            setTypedFocus(FOCUS_TEXT.slice(0, focusIndex));

            if (focusIndex >= FOCUS_TEXT.length) {
              window.clearInterval(focusInterval);
              setTypingLine(null);
            }
          }, 22);
        }, 280);
      }
    }, 32);

    return () => {
      window.clearInterval(roleInterval);
      window.clearInterval(focusInterval);
      window.clearTimeout(pauseTimeout);
    };
  }, [shouldReduceMotion]);

  return (
    <section className="min-h-screen flex flex-col justify-end relative overflow-hidden pb-16 md:pb-24">
      <div className="section-container flex-1 flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <span className="editorial-label mb-6 block" aria-hidden="true">
                {typedRole}
                {typingLine === "role" && <span className="typing-cursor" />}
              </span>
              <span className="sr-only">{ROLE_TEXT}</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                className="text-6xl md:text-8xl lg:text-[8rem] font-normal leading-[0.9] tracking-tight text-foreground mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Konstantina
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.33, 1, 0.68, 1] }}
                className="text-6xl md:text-8xl lg:text-[8rem] font-normal leading-[0.9] tracking-tight text-primary mb-8 italic"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Sokratous
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4"
            >
              <p className="text-base md:text-lg text-muted-foreground max-w-md font-light leading-relaxed">
                <span aria-hidden="true">
                  {typedFocus}
                  {typingLine === "focus" && <span className="typing-cursor" />}
                </span>
                <span className="sr-only">{FOCUS_TEXT}</span>
              </p>
              <a
                href="#about"
                className="editorial-label hover:text-foreground transition-colors duration-500 inline-flex items-center gap-2"
              >
                Scroll to explore ↓
              </a>
            </motion.div>
          </div>

          {/* Hero visual */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden relative">
              <img
                src={heroVisual}
                alt="Complex dynamical system visualization"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-border origin-left"
      />
    </section>
  );
};

export default Hero;
