import SiteFooter from "./component/siteFooter";
import SiteHeader from "./component/SiteHeader";
import NavBar from "./component/SiteHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* <NavBar /> */}
      <SiteHeader/>
      <SiteFooter />
    </main>
  );
}
