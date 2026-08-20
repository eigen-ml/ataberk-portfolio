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
  code: string;
  items: string[];
};

export type Certification = {
  title: string;
  focus: string;
};

export type BeyondEngineeringItem = {
  title: string;
  code: string;
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
      "Ankara University Physics Engineering graduate and M.Sc. student working across electronic structure calculations, materials informatics and reproducible scientific workflows.",
    availability:
      "Open to computational science, materials modelling and HPC opportunities",
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
        "A reproducible machine-learning and data-processing workflow for analysing large-scale 2D magnetic materials data.",
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
        "Practical first-principles workflows spanning structure preparation, input generation, electronic structure calculations and post-processing.",
      details: [
        "VASP and Quantum ESPRESSO calculation workflows",
        "Structure and simulation input preparation",
        "VASPKIT-assisted analysis and post-processing",
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
        "Hands-on exploration of Linux-based scientific environments, job scheduling and reproducible batch-computing workflows.",
      details: [
        "Slurm job submission and resource requests",
        "OpenHPC environment experimentation",
        "Batch workload organisation for scientific computing",
      ],
      technologies: ["Linux", "Slurm", "OpenHPC", "Bash", "Python"],
      layout: "standard",
    },
    {
      number: "04",
      title: "Scientific Workflow Automation",
      category: "Scientific Software",
      description:
        "Tools and experiments aimed at reducing repetitive work in VASP, Quantum ESPRESSO and HPC workflows.",
      details: [
        "Convergence automation and input generation",
        "Output parsing and result summarisation",
        "Slurm submission, failure detection and restart concepts",
      ],
      technologies: ["Python", "Bash", "VASP", "Quantum ESPRESSO", "Slurm"],
      status: "In Development",
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
      title: "Density Functional Theory",
      description:
        "Electronic structure and computational materials modelling using first-principles methods.",
      code: "DFT",
    },
    {
      title: "Computational Materials",
      description:
        "Data-driven and numerical approaches to understanding materials properties.",
      code: "MAT",
    },
    {
      title: "High Performance Computing",
      description:
        "Scientific workflows, scheduling and reproducible computational environments.",
      code: "HPC",
    },
    {
      title: "Scientific Automation",
      description:
        "Tools that reduce repetitive simulation setup, monitoring and post-processing.",
      code: "AUT",
    },
  ],
  technologies: [
    {
      category: "Computational Physics",
      code: "CP-01",
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
      code: "SC-02",
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
      code: "HS-03",
      items: ["Linux", "Slurm", "OpenHPC", "Docker", "Bash", "WSL"],
    },
    {
      category: "Development",
      code: "DV-04",
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
      title: "Music Production",
      code: "AUDIO-01",
      description:
        "I create and experiment with electronic music, combining technical sound design with creative production.",
    },
    {
      title: "Hardware & Prototyping",
      code: "PROTO-02",
      description:
        "I have built simple prototyping projects with Arduino and ESP32, including a basic parking-sensor project.",
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
