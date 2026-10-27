export const experience = [
  {
    company: "C-CORE",
    role: "AI/ML Research Intern",
    period: "Aug 2026 — Present",
    location: "St. John’s, NL",
    summary:
      "Building reliable machine-learning workflows for maritime intelligence across research and production environments.",
    bullets: [
      "Develop and debug Python ML workflows that correlate satellite imagery, AIS, and RF data.",
      "Improve inference reliability through model-artifact verification, reproducibility checks, and structured failure tracking.",
      "Collaborate with engineers and researchers on Docker-based inference workflows and cloud deployment validation.",
    ],
    current: true,
  },
  {
    company: "DeepSense",
    role: "Machine Learning Engineer (Co-op)",
    period: "Jan 2026 — May 2026",
    location: "Halifax · Remote",
    summary:
      "Applied computer vision and geospatial engineering to automated coastal monitoring in Nova Scotia.",
    bullets: [
      "Built end-to-end pipelines that extracted shoreline and vegetation boundaries from Sentinel-2 imagery.",
      "Retrained classification models for seasonal variation, improving vegetation-line detection accuracy by 14%.",
      "Refined geospatial preprocessing with spatial buffering and filtering to improve model-output quality.",
    ],
  },
  {
    company: "Lakecrest Independent School",
    role: "IT Head",
    period: "Jun 2025 — Aug 2026",
    location: "St. John’s, NL",
    summary:
      "Owned practical software and technology improvements for daily academic operations.",
    bullets: [
      "Developed and maintained features for school web applications and supported reliable access for staff and students.",
      "Worked with faculty to translate school needs into useful software solutions.",
      "Mentored students in programming, debugging, and structured problem-solving.",
    ],
  },
  {
    company: "Kaar Tech",
    role: "Student Software Developer",
    period: "Jan 2023 — Jul 2023",
    location: "Chennai, India",
    summary:
      "Combined forecasting, data pipelines, and full-stack development in a business-facing product.",
    bullets: [
      "Built a sales-forecasting application using Prophet to analyze historical data and support planning decisions.",
      "Developed ingestion and preprocessing workflows for repeatable time-series analysis.",
      "Integrated React visualizations to make trends and forecasts easier to interpret.",
    ],
  },
];

export const projects = [
  {
    eyebrow: "Featured work · DeepSense",
    title: "Coastal Intelligence Pipelines",
    description:
      "Production-oriented computer-vision workflows that turn multispectral satellite imagery into shoreline and vegetation boundaries for coastal change analysis.",
    impact: "14% improvement in vegetation-line detection accuracy",
    tags: ["Python", "Computer Vision", "Sentinel-2", "Geospatial ML"],
    visual: "coast",
    featured: true,
  },
  {
    eyebrow: "Founder project · Live product",
    title: "ThineBook",
    description:
      "A full-stack AI planner that converts natural-language instructions into structured, schema-validated planner edits while preserving manual control.",
    tags: ["LLMs", "Applied NLP", "Full Stack", "Schema Validation"],
    href: "https://thine-book.vercel.app/",
    linkLabel: "View live product",
    visual: "planner",
  },
  {
    eyebrow: "Published research",
    title: "Skin Cancer Classification",
    description:
      "A deep-learning system for dermatoscopic image analysis using YOLOv5 and TensorFlow, presented at the 2024 International Conference on Green Computing for Communication Technologies.",
    tags: ["YOLOv5", "TensorFlow", "Deep Learning", "Research"],
    href:
      "https://pubs.aip.org/aip/acp/article/3279/1/020111/3341731/A-deep-learning-approach-for-skin-cancer",
    linkLabel: "Read the paper",
    visual: "vision",
  },
  {
    eyebrow: "Machine learning · Cybersecurity",
    title: "Low-Rate DDoS Detection",
    description:
      "A Python preprocessing and evaluation pipeline for PCAP traffic, comparing tuned KNN, Random Forest, and SVM models using F1-score.",
    tags: ["Python", "Scapy", "Wireshark", "Model Evaluation"],
    visual: "network",
  },
];

export const skillGroups = [
  {
    index: "01",
    title: "Machine learning",
    copy: "From data preparation and model evaluation to dependable inference workflows.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Computer Vision",
      "Applied NLP",
      "LLMs",
      "Model Evaluation",
    ],
  },
  {
    index: "02",
    title: "Software engineering",
    copy: "Production-minded systems with clear interfaces, tests, and maintainable code.",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "REST APIs",
      "SQL",
    ],
  },
  {
    index: "03",
    title: "Data & infrastructure",
    copy: "The tooling that gets models and products from a notebook into real use.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "AWS",
      "Git",
      "CI/CD",
      "Geospatial Data",
    ],
  },
];

export const education = [
  {
    school: "Memorial University of Newfoundland",
    degree: "Master of Science in Computer Science",
    detail: "GPA 4.0 / 4.0 · Expected Dec 2026",
  },
  {
    school: "Sona College of Technology",
    degree: "Bachelor of Engineering in Computer Engineering",
    detail: "GPA 8.81 / 10 · First Class with Distinction · 2020–2024",
  },
];
