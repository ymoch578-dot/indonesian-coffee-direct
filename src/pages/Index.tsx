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
        <title>PT. Sukses Ekspor Mandiri — Indonesian Robusta & Arabica Green Bean Exporter</title>
        <meta
          name="description"
          content="Direct exporter of premium Robusta and Arabica green beans from Indonesia. Competitive pricing through direct sourcing from Indonesia's finest coffee regions. Request a quote today."
        />
        <meta name="keywords" content="Indonesian coffee exporter, Robusta green bean, Arabica green bean, direct coffee sourcing, B2B green coffee, Indonesia coffee export" />
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
