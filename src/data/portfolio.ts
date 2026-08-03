export interface Link {
  label: string;
  href: string;
  note?: string;
}

export interface Publication extends Link {
  journal: string;
  year: string;
}

export interface Experience {
  organization: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
  publications?: Publication[];
}

export interface Project {
  title: string;
  period: string;
  summary: string;
  technologies: string[];
  image?: string;
  links?: Link[];
  featured: boolean;
}

export const navigation: Link[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: Link[] = [
  { label: "GitHub", href: "https://github.com/mithunkar", note: "mithunkar" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mithunkarth", note: "mithunkarth" },
  { label: "Email", href: "mailto:mithunkar2004@gmail.com", note: "mithunkar2004@gmail.com" },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "C / C++", "Java", "TypeScript", "SQL", "R"],
  },
  {
    label: "AI & data",
    items: ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "SciPy", "ChromaDB"],
  },
  {
    label: "Product engineering",
    items: ["React", "Node.js", "FastAPI", "Flask", "AWS", "GitHub Actions"],
  },
  {
    label: "Systems & research",
    items: ["Linux / Unix", "OpenMP", "CUDA", "HPC", "NMR analysis", "LaTeX"],
  },
];

export const experiences: Experience[] = [
  {
    organization: "Oregon State University",
    role: "Graduate Teaching Assistant",
    location: "Corvallis, Oregon",
    period: "Sep 2025 - Jun 2026",
    summary: "Taught and mentored across systems, open-source software, and senior capstone courses.",
    bullets: [
      "Supported graduate students building and debugging xv6 kernel features for Operating Systems II.",
      "Mentored open-source contributors on Git workflows, pull-request review, licensing, modular design, testing, and CI.",
      "Advised senior capstone teams from requirements through deployment, with an emphasis on architecture, documentation, and delivery.",
    ],
  },
  {
    organization: "Osborn Popp Lab, Oregon State University",
    role: "Research Assistant",
    location: "Corvallis, Oregon",
    period: "Sep 2023 - Jun 2026",
    summary: "Built open-source scientific software and contributed to peer-reviewed high-pressure NMR research.",
    bullets: [
      "Developed NMR Plotter, a Python GUI for publication-quality multi-spectrum figures with reusable plotting settings.",
      "Created a Python tool for simulating and fitting CODEX decay data to extract phospholipid diffusion coefficients.",
      "Improved research workflows through reliable data processing, error handling, visualization, and reproducible software practices.",
    ],
    publications: [
      {
        label: "Metallized, 3D-printed radiofrequency coils",
        href: "https://doi.org/10.1016/j.jmr.2026.108057",
        journal: "Journal of Magnetic Resonance",
        year: "2026",
      },
      {
        label: "NMR_Plotter: A Python GUI for Generating Figures from NMR Spectra",
        href: "https://doi.org/10.5334/jors.617",
        journal: "Journal of Open Research Software",
        year: "2025",
      },
      {
        label: "Measurement of phospholipid lateral diffusion at high pressure by in situ magic-angle spinning NMR spectroscopy",
        href: "https://doi.org/10.1038/s42004-025-01449-7",
        journal: "Communications Chemistry",
        year: "2025",
      },
    ],
  },
  {
    organization: "RUSD Solutions",
    role: "Web Development Intern",
    location: "Remote",
    period: "Jun 2023 - Sep 2023",
    summary: "Contributed to e-commerce delivery, WordPress experimentation, and workflow automation.",
    bullets: [
      "Supported the deployment of an e-commerce site and contributed practical design recommendations.",
      "Integrated and troubleshot an AI Engine plugin in a WordPress test environment.",
      "Automated Adobe Acrobat form-filling workflows to reduce repetitive manual work.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SmartTap",
    period: "2026",
    summary: "A natural-language evidence system that turns questions about Oregon agricultural and weather data into charts, summaries, previews, and inspectable validation artifacts.",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "Pandas"],
    image: "/images/projects/smarttap.png",
    links: [
      { label: "View repository", href: "https://github.com/mithunkar/SmartTap" },
      { label: "View presentation", href: "/documents/smarttap-presentation.pdf" },
    ],
    featured: true,
  },
  {
    title: "Mocki",
    period: "Apr 2025",
    summary: "A first-place BeaverHacks project, now live as a resume-aware interview practice platform with a rotating AI panel, voice practice, and actionable debriefs.",
    technologies: ["React", "TypeScript", "NVIDIA Nemotron", "Multi-agent systems"],
    image: "/images/projects/mocki.png",
    links: [
      { label: "Visit live site", href: "https://mocki.dev" },
      { label: "View repository", href: "https://github.com/Abhishek21g/Mocki" },
    ],
    featured: true,
  },
  {
    title: "LLM Agents at the Edge",
    period: "Sep 2024 - Jun 2025",
    summary: "An HP-sponsored RAG system for Oregon State engineering students, backed by a data pipeline, vector retrieval, and scalable AWS infrastructure.",
    technologies: ["Python", "AWS", "ChromaDB", "RAG", "BeautifulSoup"],
    image: "/images/projects/llm-agents.png",
    links: [
      { label: "View team repository", href: "https://github.com/OSU-LLM-Agents-ATE/ETL" },
      { label: "View project poster", href: "/documents/llm-agents-edge-poster.pdf" },
    ],
    featured: true,
  },
  {
    title: "NMR Plotter",
    period: "Jan 2024 - Apr 2025",
    summary: "An open-source desktop application for creating publication-quality NMR spectra figures with multi-spectrum layouts and reusable styling controls.",
    technologies: ["Python", "Matplotlib", "Tkinter", "Scientific software"],
    image: "/images/projects/nmr-plotter.png",
    links: [
      { label: "View repository", href: "https://github.com/2top/NMR_Plotter" },
      { label: "Read publication", href: "https://doi.org/10.5334/jors.617" },
    ],
    featured: true,
  },
  {
    title: "Dog Emotion Detection",
    period: "2025",
    summary: "A transfer-learning study comparing ResNet-18 and ResNet-50 across fine-tuning and augmentation strategies, reaching 86.2% validation accuracy.",
    technologies: ["PyTorch", "ResNet", "Grad-CAM", "Weights & Biases"],
    image: "/images/projects/dog-emotion.png",
    links: [
      { label: "View repository", href: "https://github.com/nguyphu2/Emotion-Detection" },
      { label: "View presentation", href: "/documents/dog-emotion-detection-presentation.pdf" },
    ],
    featured: true,
  },
  {
    title: "Roll Call Brawl",
    period: "Apr 2025",
    summary: "A 24-hour hackathon project that turned classroom attendance into a competitive, geolocation-validated check-in experience.",
    technologies: ["React", "TypeScript", "Node.js", "Geolocation APIs"],
    links: [{ label: "View on Devpost", href: "https://devpost.com/software/roll-call-brawl" }],
    featured: false,
  },
  {
    title: "CODEX Decay Curve Fitting GUI",
    period: "Apr 2024 - Sep 2024",
    summary: "An open-source scientific tool for simulating and fitting CODEX decay data used in high-pressure NMR diffusion research.",
    technologies: ["Python", "NumPy", "SciPy", "Data visualization"],
    links: [
      { label: "View repository", href: "https://github.com/2top/CODEX_LateralDiffusion_PythonGUI" },
      { label: "Read publication", href: "https://www.nature.com/articles/s42004-025-01449-7#code-availability" },
    ],
    featured: false,
  },
];
