export type Locale = "en" | "tr";

export const locales: Locale[] = ["en", "tr"];

export const site = {
  url: "https://ataberkozturk.com",
  name: "Ata Berk Öztürk",
  email: "ataberk.ozturk.eng@outlook.com",
  github: "https://github.com/eigen-ml",
  linkedin: "https://www.linkedin.com/in/ata-berk-ozturk/",
  cv: "/cv.pdf",
  cvTr: "/cv-tr.pdf",
  sourceRepo: "https://github.com/eigen-ml/2d-magnetic-materials-ml",
};

export type ToolGroup = "firstPrinciples" | "computing" | "systems";

export type Tool = {
  symbol: string;
  name: string;
  group: ToolGroup;
};

/** Language-independent: tool names are proper nouns in both locales. */
export const tools: Tool[] = [
  { symbol: "Va", name: "VASP", group: "firstPrinciples" },
  { symbol: "Qe", name: "Quantum ESPRESSO", group: "firstPrinciples" },
  { symbol: "Vk", name: "VASPKIT", group: "firstPrinciples" },
  { symbol: "Ve", name: "VESTA", group: "firstPrinciples" },
  { symbol: "G4", name: "Geant4", group: "firstPrinciples" },
  { symbol: "Rt", name: "ROOT", group: "firstPrinciples" },
  { symbol: "Df", name: "DFT", group: "firstPrinciples" },
  { symbol: "Zx", name: "ANSYS Zemax", group: "firstPrinciples" },
  { symbol: "Py", name: "Python", group: "computing" },
  { symbol: "Np", name: "NumPy", group: "computing" },
  { symbol: "Pd", name: "pandas", group: "computing" },
  { symbol: "Sp", name: "SciPy", group: "computing" },
  { symbol: "Sk", name: "scikit-learn", group: "computing" },
  { symbol: "Mt", name: "MATLAB", group: "computing" },
  { symbol: "Cp", name: "C++", group: "computing" },
  { symbol: "Qk", name: "Qiskit", group: "computing" },
  { symbol: "Lx", name: "Linux", group: "systems" },
  { symbol: "Sl", name: "Slurm", group: "systems" },
  { symbol: "Oh", name: "OpenHPC", group: "systems" },
  { symbol: "Dk", name: "Docker", group: "systems" },
  { symbol: "Ba", name: "Bash", group: "systems" },
  { symbol: "Gi", name: "Git", group: "systems" },
  { symbol: "Ga", name: "GitHub Actions", group: "systems" },
  { symbol: "Tx", name: "LaTeX", group: "systems" },
];

export type WorkItem = {
  title: string;
  summary: string;
  meta: string;
  note: string;
  href?: string;
  linkLabel?: string;
};

export type TrajectoryItem = {
  period: string;
  role: string;
  place: string;
  summary?: string;
  current?: boolean;
};

export type TrainingItem = {
  title: string;
  focus: string;
};

export type Content = {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { work: string; experience: string; cv: string; contact: string; menu: string };
  cvFile: { href: string; downloadName: string };
  hero: {
    eyebrow: string;
    headlineLead: string;
    headlineAccent: string;
    summary: string;
    cv: string;
    work: string;
    skip: string;
  };
  band: { index: string; heading: string; body: string; energyAxis: string };
  spins: {
    index: string;
    heading: string;
    body: string;
    metrics: { value: string; label: string; accent?: boolean }[];
  };
  work: { index: string; items: WorkItem[] };
  trajectory: { index: string; heading: string; items: TrajectoryItem[] };
  toolkit: {
    index: string;
    heading: string;
    legend: Record<ToolGroup, string>;
  };
  training: { index: string; items: TrainingItem[] };
  contact: { heading: string; body: string; aside: string; emailLabel: string };
  footer: { rights: string };
};

const en: Content = {
  htmlLang: "en",
  cvFile: { href: site.cv, downloadName: "Ata-Berk-Ozturk-CV.pdf" },
  meta: {
    title: "Ata Berk Öztürk | Physics Engineer",
    description:
      "Physics engineer working on density functional theory, two-dimensional materials and high performance computing at Ankara University.",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    cv: "CV",
    contact: "Contact",
    menu: "Menu",
  },
  hero: {
    eyebrow: "Physics engineer · Computational materials",
    headlineLead: "I calculate what materials do",
    headlineAccent: "before anyone builds them.",
    summary:
      "Density functional theory on two-dimensional materials at Ankara University — and the cluster and data workflows that keep those calculations honest.",
    cv: "Download CV",
    work: "Selected work",
    skip: "Skip to main content",
  },
  band: {
    index: "01 — Electronic structure",
    heading: "Where the gap opens",
    body:
      "Band structures along Γ–M–K–Γ, run with VASP and Quantum ESPRESSO. Functionalising a Janus surface moves these bands — that shift is the whole point of the work.",
    energyAxis: "Energy (eV)",
  },
  spins: {
    index: "02 — Magnetic order",
    heading: "Which way the spins point",
    body:
      "My thesis asks how far composition alone predicts magnetic ordering in 2D materials — 316,505 records cleaned down to 127,024 compositions the models can actually be trusted on.",
    metrics: [
      { value: "316,505", label: "Records" },
      { value: "127,024", label: "Compositions" },
      { value: "2,231", label: "Dropped", accent: true },
    ],
  },
  work: {
    index: "03 — Selected work",
    items: [
      {
        title: "2D Magnetic Materials ML",
        summary:
          "Deterministic cleaning, an independent test split and continuous integration, so the thesis numbers can be reproduced straight from the repository.",
        meta: "Python · scikit-learn",
        note: "B.Sc. thesis",
        href: site.sourceRepo,
        linkLabel: "View source",
      },
      {
        title: "Halogen-functionalised Janus monolayers",
        summary:
          "A completed TÜBİTAK 2209-A project on XSSe (X = Sn, Ti): structure models and DFT calculations of the electronic and magnetic response.",
        meta: "VASP · DFT",
        note: "Researcher",
      },
      {
        title: "Clusters, Slurm and the software stack",
        summary:
          "Compiling scientific software on Rocky Linux and OpenHPC, writing the job scripts and benchmarking nodes and cores.",
        meta: "Slurm · OpenHPC",
        note: "2025",
      },
    ],
  },
  trajectory: {
    index: "04 — Trajectory",
    heading: "Where the work happened",
    items: [
      {
        period: "2026 —",
        role: "M.Sc. Physics Engineering",
        place: "Ankara University · in progress",
        summary:
          "Thesis on predicting magnetic ordering in two-dimensional materials from composition, combining DFT results with machine learning.",
        current: true,
      },
      {
        period: "2024 —",
        role: "Researcher",
        place: "Computational Condensed Matter Physics Group, Ankara University",
        summary:
          "DFT calculations on two-dimensional materials, focused on electronic and magnetic properties and on the data side of materials analysis.",
        current: true,
      },
      {
        period: "2025",
        role: "Intern",
        place: "Institute of Nuclear Sciences, Ankara University",
        summary:
          "Nuclear-science computing environments; compiling and running Geant4 and ROOT on Linux.",
      },
      {
        period: "2025",
        role: "Engineering Intern",
        place: "EDULINE IT",
        summary:
          "Rocky Linux HPC environments, node and core benchmarking, custom-compiled scientific software stacks.",
      },
      {
        period: "2022–26",
        role: "B.Sc. Physics Engineering",
        place: "Ankara University · English track",
      },
    ],
  },
  toolkit: {
    index: "05 — Toolkit",
    heading: "What I actually run",
    legend: {
      firstPrinciples: "First principles",
      computing: "Computing",
      systems: "Systems",
    },
  },
  training: {
    index: "06 — Training",
    items: [
      { title: "ARCHER2 HPC Driving Licence", focus: "High performance computing" },
      { title: "QBronze", focus: "Quantum computing · Qiskit" },
      { title: "NUMESYS Optical Camp", focus: "ANSYS Zemax · Speos" },
      { title: "Defence Industry Academy", focus: "Career and competency programs" },
    ],
  },
  contact: {
    heading: "Let's talk about the calculation.",
    body:
      "Ankara, Türkiye — open to computational science, materials modelling and HPC roles.",
    aside: "Away from the cluster I produce electronic music.",
    emailLabel: "Email",
  },
  footer: { rights: "Ata Berk Öztürk" },
};

const tr: Content = {
  htmlLang: "tr",
  cvFile: { href: site.cvTr, downloadName: "Ata-Berk-Ozturk-Ozgecmis.pdf" },
  meta: {
    title: "Ata Berk Öztürk | Fizik Mühendisi",
    description:
      "Fizik mühendisi. Ankara Üniversitesi'nde yoğunluk fonksiyoneli teorisi, iki boyutlu malzemeler ve yüksek başarımlı hesaplama üzerine çalışıyor.",
  },
  nav: {
    work: "Çalışmalar",
    experience: "Deneyim",
    cv: "Özgeçmiş",
    contact: "İletişim",
    menu: "Menü",
  },
  hero: {
    eyebrow: "Fizik mühendisi · Hesaplamalı malzeme bilimi",
    headlineLead: "İki boyutlu malzemelerde",
    headlineAccent: "elektronik yapı ve manyetizma.",
    summary:
      "Ankara Üniversitesi Fizik Mühendisliği yüksek lisans öğrencisiyim. Yoğunluk fonksiyoneli teorisiyle iki boyutlu malzemeler üzerine hesap yapıyorum; bu hesapların koştuğu küme ortamını ve veri işini de kendim kuruyorum.",
    cv: "Özgeçmişi indir",
    work: "Çalışmalar",
    skip: "Ana içeriğe geç",
  },
  band: {
    index: "01 — Elektronik yapı",
    heading: "Bant yapısı",
    body:
      "Γ–M–K–Γ hattı boyunca bant hesapları, VASP ve Quantum ESPRESSO ile yapılıyor. Janus yüzeyine halojen eklendiğinde bantlar kayıyor ve bant aralığı değişiyor; çalışmanın konusu bu değişim.",
    energyAxis: "Enerji (eV)",
  },
  spins: {
    index: "02 — Manyetizma",
    heading: "Manyetik sıralanma",
    body:
      "Tez konum, iki boyutlu malzemelerde manyetik sıralanmanın yalnızca bileşime bakarak ne kadar tahmin edilebildiği. 316.505 kayıt temizlenerek 127.024 bileşime indirildi.",
    metrics: [
      { value: "316.505", label: "Kayıt" },
      { value: "127.024", label: "Bileşim" },
      { value: "2.231", label: "Elenen", accent: true },
    ],
  },
  work: {
    index: "03 — Çalışmalar",
    items: [
      {
        title: "2B manyetik malzemelerde makine öğrenmesi",
        summary:
          "Aynı girdiden hep aynı sonucu veren bir veri temizliği, ayrı tutulan bir test kümesi ve otomatik testler. Tezdeki sayılar depodan yeniden üretilebiliyor.",
        meta: "Python · scikit-learn",
        note: "Lisans tezi",
        href: site.sourceRepo,
        linkLabel: "Kaynak kodu",
      },
      {
        title: "Halojenle fonksiyonelleştirilmiş Janus tek katmanları",
        summary:
          "Tamamlanan TÜBİTAK 2209-A projesi. XSSe (X = Sn, Ti) yapıları kuruldu, elektronik ve manyetik özellikleri DFT ile hesaplandı.",
        meta: "VASP · DFT",
        note: "Araştırmacı",
      },
      {
        title: "Kümeler, Slurm ve yazılım yığını",
        summary:
          "Rocky Linux ve OpenHPC üzerinde bilimsel yazılımların derlenmesi, iş betiklerinin yazılması, düğüm ve çekirdek başarımının ölçülmesi.",
        meta: "Slurm · OpenHPC",
        note: "2025",
      },
    ],
  },
  trajectory: {
    index: "04 — Deneyim",
    heading: "Deneyim ve eğitim",
    items: [
      {
        period: "2026 —",
        role: "Fizik Mühendisliği yüksek lisansı",
        place: "Ankara Üniversitesi · devam ediyor",
        summary:
          "Tez konusu: iki boyutlu malzemelerde manyetik sıralanmanın bileşimden tahmini. DFT sonuçları ile makine öğrenmesi birlikte kullanılıyor.",
        current: true,
      },
      {
        period: "2024 —",
        role: "Araştırmacı",
        place: "Hesaplamalı Yoğun Madde Fiziği Grubu, Ankara Üniversitesi",
        summary:
          "İki boyutlu malzemelerde DFT hesapları. Elektronik ve manyetik özellikler ile malzeme verisinin işlenmesi üzerine çalışıyorum.",
        current: true,
      },
      {
        period: "2025",
        role: "Stajyer",
        place: "Nükleer Bilimler Enstitüsü, Ankara Üniversitesi",
        summary:
          "Nükleer bilimler hesaplama ortamları. Linux üzerinde Geant4 ve ROOT derlendi ve çalıştırıldı.",
      },
      {
        period: "2025",
        role: "Mühendislik stajyeri",
        place: "EDULINE IT",
        summary:
          "Rocky Linux tabanlı yüksek başarımlı hesaplama ortamları, düğüm ve çekirdek başarım ölçümleri, elle derlenen bilimsel yazılım kurulumları.",
      },
      {
        period: "2022–26",
        role: "Fizik Mühendisliği lisansı",
        place: "Ankara Üniversitesi · %100 İngilizce",
      },
    ],
  },
  toolkit: {
    index: "05 — Araçlar",
    heading: "Kullandığım araçlar",
    legend: {
      firstPrinciples: "İlk prensipler",
      computing: "Hesaplama",
      systems: "Sistem",
    },
  },
  training: {
    index: "06 — Eğitimler",
    items: [
      { title: "ARCHER2 HPC Driving Licence", focus: "Yüksek başarımlı hesaplama" },
      { title: "QBronze", focus: "Kuantum hesaplama · Qiskit" },
      { title: "NUMESYS Optical Camp", focus: "ANSYS Zemax · Speos" },
      { title: "Savunma Sanayii Akademisi", focus: "Kariyer ve yetkinlik programları" },
    ],
  },
  contact: {
    heading: "İletişim",
    body:
      "Ankara'da yaşıyorum. Hesaplamalı bilim, malzeme modelleme ve yüksek başarımlı hesaplama alanındaki pozisyonlara açığım.",
    aside: "Boş zamanlarımda elektronik müzik üretiyorum.",
    emailLabel: "E-posta",
  },
  footer: { rights: "Ata Berk Öztürk" },
};

export const content: Record<Locale, Content> = { en, tr };

export function getContent(locale: Locale): Content {
  return content[locale];
}

export function pathFor(locale: Locale): string {
  return locale === "tr" ? "/tr" : "/";
}
