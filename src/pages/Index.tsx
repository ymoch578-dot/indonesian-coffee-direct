import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ProcessSection from "@/components/ProcessSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>PT. Sukses Ekspor Mandiri — Premium Indonesian Coffee Direct Exporter</title>
        <meta
          name="description"
          content="Direct Indonesian coffee exporter offering premium Arabica and Robusta beans from Sumatra, Java, and Sulawesi. Competitive pricing through direct sourcing. Request a quote today."
        />
        <meta name="keywords" content="Indonesian coffee exporter, green coffee beans, Sumatra Arabica, Java coffee, Robusta export, direct coffee sourcing, B2B coffee supply" />
        <link rel="canonical" href="https://suksesekspormandiri.com" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ProcessSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Index;
