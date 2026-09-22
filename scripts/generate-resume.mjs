import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = resolve(root, "cv/Sokratous_Academic_CV_2026.md");
const buildDir = resolve(root, "tmp/resume-build");
const markdownPath = resolve(buildDir, "resume.md");
const fragmentPath = resolve(buildDir, "resume-fragment.html");
const htmlPath = resolve(buildDir, "resume.html");
const outputPath = resolve(root, "public/resume.pdf");

const header = `<header class="cv-header">
  <h1>Konstantina Sokratous</h1>
  <p class="role">Postdoctoral Fellow, University of Missouri</p>
  <p class="contact">
    <a href="mailto:ksokratous@missouri.edu">Email</a><span>•</span>
    <a href="https://www.lazyneuron.com">lazyneuron.com</a><span>•</span>
    <a href="https://github.com/ksokratous">GitHub</a><span>•</span>
    <a href="https://www.linkedin.com/in/ksokratous">LinkedIn</a><span>•</span>
    <a href="https://scholar.google.com/citations?user=U9DSyLUAAAAJ&amp;hl=en" aria-label="Google Scholar" title="Google Scholar">
      <svg viewBox="0 0 48 48" class="contact-icon" aria-hidden="true">
        <path fill="currentColor" d="M24 5 1.5 16.2 24 27.4l18-8.9v13.2h4V16.2L24 5Z" />
        <path fill="currentColor" opacity="0.58" d="M10 22.4v10.2c7.8 6.2 20.2 6.2 28 0V22.4l-14 6.9-14-6.9Z" />
      </svg>
    </a>
    <span>•</span>
    <a href="https://bsky.app/profile/lazyneuron.bsky.social" aria-label="Bluesky" title="Bluesky">
      <svg viewBox="0 0 24 24" class="contact-icon" aria-hidden="true">
        <path fill="currentColor" d="M12 10.7c-1.1-2-4-5.7-6.4-7.6C3.3 1.2 2.4 1.6 1.9 1.9c-.6.4-.7 1.4-.7 2.2 0 .9.2 2.3.4 3.1.8 3.2 3.7 4.3 6.3 4 .1 0 .2.1.2.2s-.1.2-.2.2c-2.6.4-4.8 1.5-5.5 4.2-.3 1-.1 2.8.8 3.7 1.1 1 3.7 1.4 7.4-1.9 1-.9 1.9-2 2.7-3.2.9 1.2 1.8 2.3 2.7 3.2 3.7 3.3 6.3 2.9 7.4 1.9.9-.9 1.1-2.7.8-3.7-.7-2.7-2.9-3.8-5.5-4.2-.1 0-.2-.1-.2-.2s.1-.2.2-.2c2.6.3 5.5-.8 6.3-4 .2-.8.4-2.2.4-3.1 0-.8-.1-1.8-.7-2.2-.5-.3-1.4-.7-3.7 1.2-2.4 1.9-5.3 5.6-6.4 7.6Z" />
      </svg>
    </a>
  </p>
  <p class="specialties">Computational Cognitive Modeling | Simulation-Based Inference | Machine Psychometrics | Human and Artificial Intelligence</p>
</header>`;

const css = `
@page { size: Letter; margin: 0.50in 0.66in 0.50in; }
* { box-sizing: border-box; }
html { font-family: Arial, Helvetica, sans-serif; color: #24212a; font-size: 8.3pt; line-height: 1.26; }
body { margin: 0; }
a { color: #644b7d; text-decoration: none; }
.cv-header { margin: 0 0 14px; border-bottom: 1px solid #7b5b95; padding-bottom: 10px; }
.cv-header h1 { margin: 0 0 2px; color: #2d2732; border: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 20pt; font-variant: small-caps; font-weight: 500; letter-spacing: .02em; }
.role { margin: 0 0 4px; font-size: 11pt; }
.contact { display: flex; flex-wrap: wrap; gap: 0 8px; margin: 0 0 5px; font-size: 8.2pt; }
.contact a { display: inline-flex; align-items: center; }
.contact-icon { width: 16px; height: 16px; color: #644b7d; }
.specialties { margin: 0; font-size: 8pt; font-weight: 700; color: #3d3543; }
h1 { break-after: avoid; margin: 14px 0 6px; border-bottom: .8px solid #866a9c; padding-bottom: 2px; color: #604575; font-size: 11.5pt; letter-spacing: .045em; }
#publications + p { break-after: avoid; }
h2 { break-after: avoid; margin: 10px 0 4px; color: #403448; font-size: 9.6pt; }
p { margin: 0 0 5px; }
p:has(> .date) { position: relative; padding-right: 105px; }
ul, ol { margin: 3px 0 7px; padding-left: 18px; }
li { margin: 0 0 2.5px; }
li::marker { color: #72558a; }
strong { color: #25202a; }
em { color: #39313f; }
.date { position: absolute; top: 0; right: 0; font-weight: 700; white-space: nowrap; }
`;

function locate(command, alternatives = []) {
  for (const candidate of [command, ...alternatives]) {
    try {
      execFileSync(candidate, ["--version"], { stdio: "ignore" });
      return candidate;
    } catch {}
  }
  throw new Error(`Could not find ${command}. Install it before generating the resume PDF.`);
}

let markdown = readFileSync(sourcePath, "utf8");
markdown = markdown.replace(/^---[\s\S]*?---\s*/m, "");
markdown = markdown.replace(/\\begin\{flushleft\}[\s\S]*?\\end\{flushleft\}\s*/m, `${header}\n\n`);
markdown = markdown
  .replace(/\\hfill\s+\\textbf\{([^}]+)\}/g, '<span class="date">$1</span>')
  .replace(/\\\*/g, "*")
  .replace(/\\\$/g, "$");

mkdirSync(buildDir, { recursive: true });
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(markdownPath, markdown);

const pandoc = locate("pandoc", ["/opt/anaconda3/bin/pandoc"]);
execFileSync(pandoc, [markdownPath, "--from=gfm+raw_html", "--to=html5", "--output", fragmentPath], { stdio: "inherit" });

const fragment = readFileSync(fragmentPath, "utf8");
writeFileSync(htmlPath, `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Konstantina Sokratous - Curriculum Vitae</title><style>${css}</style></head><body>${fragment}</body></html>`);

const chrome = locate("google-chrome", [
  "google-chrome-stable",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
]);
execFileSync(chrome, [
  "--headless=new",
  "--no-sandbox",
  "--disable-gpu",
  "--allow-file-access-from-files",
  "--no-pdf-header-footer",
  `--print-to-pdf=${outputPath}`,
  `file://${htmlPath}`,
], { stdio: "inherit" });

console.log(`Generated ${outputPath}`);
