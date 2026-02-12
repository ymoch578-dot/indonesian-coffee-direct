import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Handshake, TrendingDown, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Globe, label: "Export Destinations", value: "Global" },
  { icon: Handshake, label: "Sourcing Model", value: "Direct" },
  { icon: TrendingDown, label: "Middlemen", value: "Zero" },
  { icon: ShieldCheck, label: "Quality Control", value: "Rigorous" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              Why Direct Sourcing
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              Premium Quality,{" "}
              <span className="text-gradient-gold">Competitive Pricing</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              As a direct exporter based in Indonesia, PT. Sukses Ekspor Mandiri
              sources Robusta green beans straight from farming communities in
              Dampit, Malang — one of East Java's most productive coffee regions.
              By cutting out intermediaries, we deliver authentic Indonesian
              Robusta at prices that give your business a real competitive edge.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              Our team works on the ground with local producers, ensuring every
              shipment of green beans meets the quality standards your market demands.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
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
