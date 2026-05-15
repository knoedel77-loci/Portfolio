import { about } from "@/data/about";

import AboutHero from "@/components/about/AboutHero";
import AboutInterests from "@/components/about/AboutInterests";
import AboutWork from "@/components/about/AboutWork";
import AboutCV from "@/components/about/AboutCV";
import AboutExperiments from "@/components/about/AboutExperiments";

export default function AboutPage() {
  return (
    <main>
      <AboutHero hero={about.hero} />
      <AboutInterests data={about.interests} />
      <AboutWork data={about.work} />
      <AboutCV data={about.cv} />
      <AboutExperiments experiments={about.experiments} />
      
    </main>
  );
}