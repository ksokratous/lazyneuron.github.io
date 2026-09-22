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
  <p class="contact"><a href="mailto:ksokratouspro@gmail.com">ksokratouspro@gmail.com</a><span>•</span><a href="https://www.lazyneuron.com">lazyneuron.com</a><span>•</span><a href="https://github.com/ksokratous">GitHub</a><span>•</span><a href="https://www.linkedin.com/in/ksokratous">LinkedIn</a></p>
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
