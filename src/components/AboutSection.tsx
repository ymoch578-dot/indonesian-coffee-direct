import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Handshake, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const stats = [
    { icon: Globe, label: t("about.stat_destinations"), value: t("about.stat_destinations_value") },
    { icon: Handshake, label: t("about.stat_sourcing"), value: t("about.stat_sourcing_value") },
    { icon: ShieldCheck, label: t("about.stat_quality"), value: t("about.stat_quality_value") },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-primary mb-4">
              {t("about.tagline")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              {t("about.title1")}{" "}
              <span className="text-gradient-gold">{t("about.title2")}</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              {t("about.desc1")}
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              {t("about.desc2")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-lg bg-card border border-border/50"
              >
                <stat.icon className="w-5 h-5 text-primary mb-2 mx-auto" />
                <p className="font-serif text-xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="font-sans text-xs text-muted-foreground tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
