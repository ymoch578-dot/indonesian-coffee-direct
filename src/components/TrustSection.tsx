import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Users, Coffee, FileCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const trustItems = [
    { icon: MapPin, title: t("trust.item1_title"), desc: t("trust.item1_desc") },
    { icon: Users, title: t("trust.item2_title"), desc: t("trust.item2_desc") },
    { icon: Coffee, title: t("trust.item3_title"), desc: t("trust.item3_desc") },
    { icon: FileCheck, title: t("trust.item4_title"), desc: t("trust.item4_desc") },
  ];

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-primary mb-4">
            {t("trust.tagline")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            {t("trust.title1")} <span className="text-gradient-gold">{t("trust.title2")}</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            {t("trust.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex gap-4 p-6 rounded-lg bg-card border border-border/50"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
