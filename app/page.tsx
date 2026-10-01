import SiteFooter from "./component/siteFooter";
import HeroSection from "./component/HeroSection";
import PartnerLogos from "./component/PartnerLogos";
import CoursesSection from "./component/CoursesSection";
import LearningPathsSection from "./component/learning-paths-section";
import ProfessionalGrowthSection from "./component/professional-growth-section";
import CreatorCta from "./component/creator-cta";
import TestimonialsSection from "./component/testimonials-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PartnerLogos />
      <CoursesSection />
      <LearningPathsSection />
      <ProfessionalGrowthSection />
      <CreatorCta />
      <TestimonialsSection />
      <SiteFooter />
    </main>
  );
}
