import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SignalTrace from "@/components/SignalTrace";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { personal } from "@/lib/data";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.role,
    email: personal.email,
    url: "https://pratyushpangotra.dev",
    sameAs: [personal.linkedin, personal.github],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SignalTrace />
      <Nav />
      <main className="scanlines">
        <Hero />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
