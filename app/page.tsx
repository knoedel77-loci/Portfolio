import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectTeaser from "@/components/sections/ProjectTeaserSection";
import QuoteSection from "@/components/sections/QuoteSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* weitere Sections folgen hier */}
      <QuoteSection />
      <ProjectTeaser />
      <ContactSection/>
    </>
  );
}

