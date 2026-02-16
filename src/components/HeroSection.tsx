import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-coffee-plantation.jpg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dampit coffee plantation, Malang, East Java"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-6"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6"
        >
          {t("hero.title1")}
          <br />
          <span className="text-gradient-gold">{t("hero.title2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          {t("hero.description")}
        </motion.p>

      </div>
    </section>
  );
};

export default HeroSection;
