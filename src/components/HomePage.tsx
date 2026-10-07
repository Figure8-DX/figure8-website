/** Homepage sections, shared by the English (/) and Arabic (/ar) routes. */
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import ExpertiseSection from "./ExpertiseSection";
import Leadership from "./Leadership";
import Clients from "./Clients";
import ContactCTA from "./ContactCTA";
import Footer from "./Footer";
import ClientLogos from "./ClientLogos";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <ExpertiseSection />
      {/* <Leadership /> */}
      {/* <Clients /> */}
      <ClientLogos />
      <ContactCTA />
      <Footer />
    </div>
  );
}
