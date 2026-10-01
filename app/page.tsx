import SiteFooter from "./component/siteFooter";
import HeroSection from "./component/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <SiteFooter />
    </main>
  );
}
