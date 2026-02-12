import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Users, Coffee, FileCheck } from "lucide-react";

const trustItems = [
  {
    icon: MapPin,
    title: "Indonesia-Based Operations",
    desc: "Headquartered in Indonesia with direct access to major coffee-producing regions across the archipelago.",
  },
  {
    icon: Users,
    title: "Experienced Trade Team",
    desc: "Our team brings deep expertise in Indonesian coffee sourcing, quality assessment, and international logistics.",
  },
  {
    icon: Coffee,
    title: "Origin Transparency",
    desc: "Full traceability from farm to port. We provide detailed origin information and processing methods for every lot.",
  },
  {
    icon: FileCheck,
    title: "Proper Export Documentation",
    desc: "All shipments include complete export documentation: Certificate of Origin, Phytosanitary Certificate, and ICO certificates.",
  },
];

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Built on <span className="text-gradient-gold">Transparency</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            We earn your trust through honest communication, consistent quality, and
            reliable service — not inflated claims.
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
