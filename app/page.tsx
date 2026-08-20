import { BeyondEngineering } from "@/components/beyond-engineering";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MotionObserver } from "@/components/motion-observer";
import { Navigation } from "@/components/navigation";
import { Projects } from "@/components/projects";
import { Research } from "@/components/research";
import { TechStack } from "@/components/tech-stack";
import { isConfiguredLink, portfolioData } from "@/data/portfolio";

export default function Home() {
  const socialProfiles = [
    portfolioData.person.links.github,
    portfolioData.person.links.linkedin,
  ].filter(isConfiguredLink);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.person.name,
    url: portfolioData.site.url,
    jobTitle: portfolioData.person.title,
    description: portfolioData.site.description,
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
      "Scientific Computing",
    ],
    sameAs: socialProfiles.length > 0 ? socialProfiles : undefined,
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navigation />
      <MotionObserver />
      <main id="main-content">
        <Hero />
        <Projects />
        <Experience />
        <Research />
        <TechStack />
        <Education />
        <Certifications />
        <BeyondEngineering />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
