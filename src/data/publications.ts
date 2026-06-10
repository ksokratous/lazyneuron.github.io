export interface Publication {
  year: string;
  journal: string;
  title: string;
  authors: string;
  link: string;
}

export const publications: Publication[] = [
   {
    year: "2026",
    journal: "",
    title: "Machine Psychometrics for Large Language Models",
    authors: "Sokratous, K., Vandekerckhove, J., & Davis-Stober, C.",
    link: "#",
  },

  {
    year: "2026 (In Press)",
    journal: "Journal of Choice Modeling",
    title: "Time flips and price dips: Modeling preference reversals between intertemporal choice and pricing",
    authors: "Sokratous K. & Kvam, P. D.",
    link: "https://doi.org/10.31219/osf.io/vhgm8",
  },
  {
    year: "2026",
    journal: "Cognition (Under Review)",
    title: "The Timing of Suboptimality: How Temporal Uncertainty Drives Procrastination Behavior",
    authors: "Sokratous, K., Hintze, A., Fitch, A., & Kvam, P. D.,",
    link: "https://osf.io/preprints/osf/trkv9_v3",
  },
  {
    year: "2024",
    journal: "Decision",
    title: "Using artificial intelligence to fit, compare, evaluate, and discover computational models of decision behavior",
    authors: "Kvam, P. D., Sokratous, K., Fitch, A., & Hintze, A.",
    link: "https://doi.org/10.1037/dec0000237",
  },
  {
    year: "2023",
    journal: "Journal of Choice Modeling",
    title: "How to ask twenty questions and win: Machine learning tools for assessing preferences from small samples of willingness-to-pay prices",
    authors: "Sokratous, K., Fitch, A. K., & Kvam, P. D.",
    link: "https://doi.org/10.1016/j.jocm.2023.100418",
  },
 
];
