import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";

const GoogleScholarIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="h-5 w-5">
    <path fill="currentColor" d="M24 5 1.5 16.2 24 27.4l18-8.9v13.2h4V16.2L24 5Z" />
    <path fill="currentColor" opacity="0.58" d="M10 22.4v10.2c7.8 6.2 20.2 6.2 28 0V22.4l-14 6.9-14-6.9Z" />
  </svg>
);

const BlueskyIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
    <path fill="currentColor" d="M12 10.7c-1.1-2-4-5.7-6.4-7.6C3.3 1.2 2.4 1.6 1.9 1.9c-.6.4-.7 1.4-.7 2.2 0 .9.2 2.3.4 3.1.8 3.2 3.7 4.3 6.3 4 .1 0 .2.1.2.2s-.1.2-.2.2c-2.6.4-4.8 1.5-5.5 4.2-.3 1-.1 2.8.8 3.7 1.1 1 3.7 1.4 7.4-1.9 1-.9 1.9-2 2.7-3.2.9 1.2 1.8 2.3 2.7 3.2 3.7 3.3 6.3 2.9 7.4 1.9.9-.9 1.1-2.7.8-3.7-.7-2.7-2.9-3.8-5.5-4.2-.1 0-.2-.1-.2-.2s.1-.2.2-.2c2.6.3 5.5-.8 6.3-4 .2-.8.4-2.2.4-3.1 0-.8-.1-1.8-.7-2.2-.5-.3-1.4-.7-3.7 1.2-2.4 1.9-5.3 5.6-6.4 7.6Z" />
  </svg>
);

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Publications />
      <Projects />
      <Resume />
      <footer className="border-t border-border py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} Konstantina Sokratous
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://scholar.google.com/citations?user=U9DSyLUAAAAJ&hl=en"
              aria-label="Google Scholar profile"
              title="Google Scholar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-500"
            >
              <GoogleScholarIcon />
            </a>
            <a
              href="https://bsky.app/profile/lazyneuron.bsky.social"
              aria-label="Bluesky profile"
              title="Bluesky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-500"
            >
              <BlueskyIcon />
            </a>
            {[
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "GitHub", href: "https://github.com" },
              { label: "Email", href: "mailto:ksokratous@missouri.edu" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
