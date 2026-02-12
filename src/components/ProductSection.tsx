import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import robustaDampit from "@/assets/robusta-dampit.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const specs = [
  { label: "Origin", value: "Dampit, Malang, East Java" },
  { label: "Species", value: "Robusta (Coffea canephora)" },
  { label: "Type", value: "Green Bean (unroasted)" },
  { label: "Process", value: "Natural / Dry Process" },
  { label: "Altitude", value: "400–800 masl" },
  { label: "Flavor Profile", value: "Bold, earthy, low acidity, woody & caramel notes" },
  { label: "Moisture", value: "Max. 13%" },
  { label: "Screen Size", value: "Available upon request" },
];

const ProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Our Product
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Dampit Robusta <span className="text-gradient-gold">Green Bean</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Dampit is one of Indonesia's premier Robusta-producing regions,
            known for its volcanic soil and ideal growing conditions in the
            highlands of East Java.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Images */}
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

          {/* Specs */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl font-bold mb-6">
              Product Specifications
            </h3>
            <div className="space-y-0 rounded-lg overflow-hidden border border-border/50">
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex justify-between items-start gap-4 px-5 py-4 ${
                    i % 2 === 0 ? "bg-card" : "bg-secondary/50"
                  }`}
                >
                  <span className="font-sans text-sm text-muted-foreground uppercase tracking-wide flex-shrink-0">
                    {spec.label}
                  </span>
                  <span className="font-sans text-sm text-foreground text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 rounded-lg bg-primary/10 border border-primary/20">
              <p className="font-sans text-sm text-foreground leading-relaxed">
                <strong>Custom grading available.</strong> We can accommodate specific
                screen size, moisture content, and defect count requirements based
                on your market needs. Contact us to discuss your specifications.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-sm tracking-wide uppercase rounded hover:bg-gold-light transition-colors"
            >
              Request Sample & Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
