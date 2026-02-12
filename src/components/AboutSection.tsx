import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Handshake, TrendingDown, ShieldCheck } from "lucide-react";
import coffeeBeans from "@/assets/coffee-beans.jpg";

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={coffeeBeans}
              alt="Premium green coffee beans quality inspection"
              className="rounded-lg w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 rounded-lg border border-primary/20" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
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
              sources coffee beans straight from farming communities across the
              archipelago. By cutting out intermediaries, we deliver authentic
              Indonesian coffee at prices that give your business a real
              competitive edge.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              Our team works on the ground with producers in Sumatra, Java,
              Sulawesi, and beyond — ensuring every shipment meets the quality
              standards your market demands.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-lg bg-card border border-border/50"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-2" />
                  <p className="font-serif text-xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
