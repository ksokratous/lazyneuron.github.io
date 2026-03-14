export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  methods?: string[];
  relatedPublications?: string[];
}

export const projects: Project[] = [
  {
    slug: "deep-learning-parameter-estimation",
    number: "01",
    title: "Deep Learning for Parameter Estimation and Model Comparison",
    category: "Deep Learning",
    description:
      "Developing deep learning approaches to estimate parameters of cognitive models and compare competing theoretical accounts of decision-making behavior. This work leverages neural networks to bypass traditional optimization bottlenecks in computational modeling.",
    methods: ["Neural Networks", "Parameter Recovery", "Model Comparison", "Bayesian Inference"],
  },
  {
    slug: "variational-autoencoders-latent-structures",
    number: "02",
    title: "Variational Autoencoders for Latent Structures",
    category: "Deep Learning",
    description:
      "Using variational autoencoders to uncover latent psychological structures from behavioral data. This project explores how generative models can reveal hidden dimensions of cognition that traditional methods might miss.",
    methods: ["VAEs", "Generative Models", "Latent Space Analysis", "Representation Learning"],
  },
  {
    slug: "modeling-anticipatory-timing",
    number: "03",
    title: "Modeling Anticipatory Timing",
    category: "Cognitive Modeling",
    description:
      "Building computational models of how people anticipate and time their responses to future events. This research bridges cognitive science and motor control to understand temporal prediction in the brain.",
    methods: ["Drift-Diffusion Models", "Temporal Cognition", "Motor Timing", "Bayesian Models"],
  },
  {
    slug: "modeling-pricing-valuation",
    number: "04",
    title: "Modeling Pricing and Valuation",
    category: "Cognitive Modeling",
    description:
      "Investigating how people assign value to goods and services through computational modeling of pricing decisions. This work connects cognitive models of choice with economic behavior and consumer psychology.",
    methods: ["Decision Models", "Willingness-to-Pay", "Machine Learning", "Consumer Behavior"],
  },
];
