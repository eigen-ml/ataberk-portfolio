import { BandStructure } from "@/components/band-structure";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { ScrollEffects } from "@/components/scroll-effects";
import { SpinOrder } from "@/components/spin-order";
import { Toolkit } from "@/components/toolkit";
import { Trajectory } from "@/components/trajectory";
import { Training } from "@/components/training";
import { Work } from "@/components/work";
import { getContent, site, type Locale } from "@/data/content";

export function Site({ locale }: { locale: Locale }) {
  const copy = getContent(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: locale === "tr" ? "Fizik Mühendisi" : "Physics Engineer",
    description: copy.meta.description,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Ankara University",
    },
    knowsAbout: [
      "Density Functional Theory",
      "Computational Materials Science",
      "Electronic Structure Calculations",
      "Materials Informatics",
      "High Performance Computing",
    ],
    sameAs: [site.github, site.linkedin],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        {copy.hero.skip}
      </a>
      <Nav locale={locale} copy={copy} />
      <ScrollEffects />

      <main id="main-content">
        <Hero copy={copy} />
        <BandStructure copy={copy} />
        <SpinOrder copy={copy} />
        <Work copy={copy} />
        <Trajectory copy={copy} />
        <Toolkit copy={copy} />
        <Training copy={copy} />
        <Contact copy={copy} />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
