import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import ProcessSection from "@/components/ProcessSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>PT. Sukses Ekspor Mandiri — Robusta Dampit Green Bean Exporter</title>
        <meta
          name="description"
          content="Direct exporter of premium Robusta Dampit green beans from East Java, Indonesia. Competitive pricing through direct sourcing from Dampit, Malang. Request a quote today."
        />
        <meta name="keywords" content="Robusta Dampit, green bean coffee, Indonesian coffee exporter, Dampit Malang, Robusta export, direct coffee sourcing, B2B green coffee" />
        <link rel="canonical" href="https://suksesekspormandiri.com" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <ProcessSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Index;
