import SiteFooter from "./component/siteFooter";
import HeroSection from "./component/HeroSection";
import PartnerLogos from "./component/PartnerLogos";
import CoursesSection from "./component/CoursesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PartnerLogos />
      <CoursesSection />
      <SiteFooter />
    </main>
  );
}
