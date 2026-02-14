import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, ClipboardCheck, Package, Ship } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const steps = [
    { icon: MessageSquare, step: "01", title: t("process.step1_title"), desc: t("process.step1_desc") },
    { icon: ClipboardCheck, step: "02", title: t("process.step2_title"), desc: t("process.step2_desc") },
    { icon: Package, step: "03", title: t("process.step3_title"), desc: t("process.step3_desc") },
    { icon: Ship, step: "04", title: t("process.step4_title"), desc: t("process.step4_desc") },
  ];

  return (
    <section id="process" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-primary mb-4">
            {t("process.tagline")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            {t("process.title1")} <span className="text-gradient-gold">{t("process.title2")}</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            {t("process.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="relative p-6 rounded-lg bg-card border border-border/50"
            >
              <span className="font-serif text-5xl font-bold text-primary/10 absolute top-4 right-4">
                {step.step}
              </span>
              <step.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
