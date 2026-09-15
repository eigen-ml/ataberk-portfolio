export type NavItem = {
  label: string;
  href: string;
};

export type ProjectLink = {
  label: string;
  value: string;
};

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  metrics?: { value: string; label: string }[];
  details?: string[];
  links?: ProjectLink[];
  status?: string;
  layout: "wide" | "standard";
  featured?: boolean;
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
  technologies: string[];
  current?: boolean;
};

export type TechnologyGroup = {
  category: string;
  items: string[];
};

export type Certification = {
  title: string;
  focus: string;
};

export type BeyondEngineeringItem = {
  title: string;
  description: string;
};

export const portfolioData = {
  site: {
    url: "https://ataberkozturk.com",
    title: "Ata Berk Öztürk | Physics Engineer",
    description:
      "Physics Engineer focused on Computational Materials, Density Functional Theory, HPC and Scientific Computing.",
  },
  person: {
    name: "Ata Berk Öztürk",
    initials: "ABÖ",
    title: "Physics Engineer",
    location: "Ankara · Türkiye",
    specialism:
      "Computational Materials · DFT · HPC · Scientific Computing",
    summary:
      "M.Sc. student in Physics Engineering at Ankara University. I run DFT calculations on two-dimensional materials and build the data and HPC workflows around them.",
    availability:
      "Open to positions in computational science, materials modelling and HPC",
    links: {
      email: "ataberk.ozturk.eng@outlook.com",
      github: "https://github.com/eigen-ml",
      linkedin: "https://www.linkedin.com/in/ata-berk-ozturk/",
      cv: "/cv.pdf",
    },
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Research", href: "#research" },
    { label: "Tools & Technologies", href: "#technologies" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  projects: [
    {
      number: "01",
      title: "2D Magnetic Materials ML",
      category: "Materials Informatics · Machine Learning",
      description:
        "A machine-learning and data-processing pipeline for large-scale 2D magnetic materials data, built for my B.Sc. thesis and kept as a public repository.",
      metrics: [
        { value: "316,505", label: "source records processed" },
        { value: "2,231", label: "conflicting records removed" },
        { value: "127,024", label: "consensus compositions" },
      ],
      details: [
        "Deterministic data and validation pipeline",
        "Train, validation and independent test split",
        "Automated tests and continuous integration",
        "Reproducibility-oriented repository structure",
      ],
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "scikit-learn",
        "GitHub Actions",
        "Materials Informatics",
      ],
      links: [
        {
          label: "View source",
          value: "https://github.com/eigen-ml/2d-magnetic-materials-ml",
        },
      ],
      layout: "wide",
      featured: true,
    },
    {
      number: "02",
      title: "DFT Workflows",
      category: "Computational Materials",
      description:
        "Day-to-day VASP and Quantum ESPRESSO work on two-dimensional materials: building structures, generating inputs, running the calculations and processing the output.",
      details: [
        "Structure preparation and input generation",
        "Relaxation, band structure and density of states calculations",
        "Post-processing with VASPKIT and Python scripts",
      ],
      technologies: [
        "VASP",
        "Quantum ESPRESSO",
        "VASPKIT",
        "Python",
        "Linux",
      ],
      layout: "standard",
    },
    {
      number: "03",
      title: "HPC & Slurm Workflows",
      category: "High Performance Computing",
      description:
        "Running scientific software on Linux clusters — writing the job scripts, compiling the software stack and measuring what the hardware actually does.",
      details: [
        "Slurm job scripts, resource requests and queue handling",
        "Rocky Linux and OpenHPC cluster environments",
        "Node and core benchmarking, custom-compiled software stacks",
      ],
      technologies: ["Linux", "Slurm", "OpenHPC", "Bash", "Python"],
      layout: "standard",
    },
    {
      number: "04",
      title: "Halogen-Functionalised Janus Monolayers",
      category: "TÜBİTAK 2209-A · Researcher",
      description:
        "A completed TÜBİTAK 2209-A undergraduate research project on halogen functionalisation of Janus XSSe (X = Sn, Ti) monolayers and its effect on their electronic and magnetic properties.",
      details: [
        "Structure models for halogen-functionalised Janus monolayers",
        "DFT calculations of electronic and magnetic properties",
        "Project report and results written up with the research group",
      ],
      technologies: ["VASP", "DFT", "2D Materials", "Python", "Linux"],
      layout: "wide",
    },
  ] satisfies Project[],
  experience: [
    {
      role: "Researcher",
      organization: "Computational Condensed Matter Physics Group · Ankara University",
      period: "February 2024 — Present",
      description:
        "Conducting computational materials research involving DFT simulations of two-dimensional materials, with emphasis on electronic and magnetic properties and data-driven materials analysis.",
      technologies: [
        "VASP",
        "DFT",
        "Python",
        "Linux",
        "Computational Materials",
      ],
      current: true,
    },
    {
      role: "Engineering Intern",
      organization: "EDULINE IT",
      period: "July 2025 — August 2025",
      description:
        "Worked with Rocky Linux based HPC environments, node and core benchmarking, custom-compiled scientific software environments, and Python-based analysis workflows.",
      technologies: ["Linux", "HPC", "Python", "NumPy", "Pandas"],
    },
    {
      role: "Intern",
      organization: "Ankara University Institute of Nuclear Sciences",
      period: "August 2025 — September 2025",
      description:
        "Worked with nuclear-science computation environments and compiled scientific distributions using Geant4 and ROOT on Linux.",
      technologies: ["Geant4", "ROOT", "Linux"],
    },
  ] satisfies Experience[],
  research: [
    {
      title: "2D Magnetic Materials",
      description:
        "Magnetic ordering in two-dimensional materials, and how far composition alone can predict it.",
    },
    {
      title: "Janus Monolayers",
      description:
        "Functionalised Janus structures and the way surface chemistry shifts their electronic properties.",
    },
    {
      title: "Density Functional Theory",
      description:
        "Electronic structure calculations with VASP and Quantum ESPRESSO, and the convergence work behind them.",
    },
    {
      title: "Scientific Computing at Scale",
      description:
        "Getting these calculations to run reliably on clusters: scheduling, environments and data handling.",
    },
  ],
  technologies: [
    {
      category: "Computational Physics",
      items: [
        "VASP",
        "Quantum ESPRESSO",
        "VASPKIT",
        "DFT",
        "VESTA",
        "Geant4",
        "ROOT",
        "ANSYS Zemax / OpticStudio",
        "ANSYS SpaceClaim",
        "ANSYS Maxwell",
      ],
    },
    {
      category: "Scientific Computing",
      items: [
        "Python",
        "NumPy",
        "Pandas",
        "SciPy",
        "scikit-learn",
        "MATLAB",
        "C++",
        "Qiskit",
      ],
    },
    {
      category: "HPC & Systems",
      items: ["Linux", "Slurm", "OpenHPC", "Docker", "Bash", "WSL"],
    },
    {
      category: "Development",
      items: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "LaTeX",
        "Arduino",
        "ESP32",
      ],
    },
  ] satisfies TechnologyGroup[],
  education: [
    {
      degree: "M.Sc. Physics Engineering",
      institution: "Ankara University",
      status: "Ongoing",
      focus: "Computational Materials · DFT · HPC",
    },
    {
      degree: "B.Sc. Physics Engineering",
      institution: "Ankara University",
      status: "Completed",
      focus: "Physics Engineering",
    },
  ],
  certifications: [
    {
      title: "QBronze",
      focus: "Qiskit",
    },
    {
      title: "NUMESYS Optical Camp",
      focus: "ANSYS Zemax / Speos",
    },
    {
      title: "ARCHER2 HPC Driving Licence",
      focus: "High Performance Computing",
    },
    {
      title: "Defense Industry Academy",
      focus: "Career & Competency Programs",
    },
  ] satisfies Certification[],
  beyondEngineering: [
    {
      title: "Beatbox & Music Production",
      description:
        "I beatbox and produce electronic music, and I compete internationally — most recently at the Grand Beatbox Battle in Warsaw.",
    },
    {
      title: "Hardware & Prototyping",
      description:
        "Small Arduino and ESP32 builds, including a parking-sensor project.",
    },
  ] satisfies BeyondEngineeringItem[],
} as const;

export function isConfiguredLink(value: string) {
  return !value.startsWith("YOUR_");
}

export function getProfileHref(
  value: string,
  kind: "external" | "email" = "external",
) {
  if (!isConfiguredLink(value)) {
    return "#contact";
  }

  if (kind === "email" && !value.startsWith("mailto:")) {
    return "mailto:" + value;
  }

  return value;
}
