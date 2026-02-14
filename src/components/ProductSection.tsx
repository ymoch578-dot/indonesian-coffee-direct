import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import robustaDampit from "@/assets/robusta-dampit.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const specKeys = [
  { labelKey: "product.spec_origin", valueKey: "product.spec_origin_value" },
  { labelKey: "product.spec_species", valueKey: "product.spec_species_value" },
  { labelKey: "product.spec_type", valueKey: "product.spec_type_value" },
  { labelKey: "product.spec_process", valueKey: "product.spec_process_value" },
  { labelKey: "product.spec_altitude", valueKey: "product.spec_altitude_value" },
  { labelKey: "product.spec_moisture", valueKey: "product.spec_moisture_value" },
];

const ProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="product" className="section-padding" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-primary mb-4">
            {t("product.tagline")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            {t("product.title1")} <span className="text-gradient-gold">{t("product.title2")}</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            {t("product.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <img
              src={robustaDampit}
              alt="Dampit Robusta green coffee beans"
              className="rounded-lg w-full aspect-square object-cover border border-border/50"
            />
            <img
              src={coffeeBeans}
              alt="Green bean quality inspection"
              className="rounded-lg w-full aspect-[2/1] object-cover border border-border/50"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl font-bold mb-6">
              {t("product.specs_title")}
            </h3>
            <div className="space-y-0 rounded-lg overflow-hidden border border-border/50">
              {specKeys.map((spec, i) => (
                <div
                  key={spec.labelKey}
                  className={`flex justify-between items-start gap-4 px-5 py-4 ${
                    i % 2 === 0 ? "bg-card" : "bg-secondary/50"
                  }`}
                >
                  <span className="font-sans text-sm text-muted-foreground uppercase tracking-wide flex-shrink-0">
                    {t(spec.labelKey)}
                  </span>
                  <span className="font-sans text-sm text-foreground text-right">
                    {t(spec.valueKey)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 rounded-lg bg-primary/10 border border-primary/20">
              <p className="font-sans text-sm text-foreground leading-relaxed">
                <strong>{t("product.custom_grading")}</strong> {t("product.custom_grading_desc")}
              </p>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-sm tracking-wide uppercase rounded hover:bg-gold-light transition-colors"
            >
              {t("product.cta")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
