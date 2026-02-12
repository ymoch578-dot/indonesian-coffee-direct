import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import coffeeSumatra from "@/assets/coffee-sumatra.jpg";
import coffeeJava from "@/assets/coffee-java.jpg";
import coffeeRobusta from "@/assets/coffee-robusta.jpg";

const products = [
  {
    name: "Sumatra Arabica",
    origin: "North Sumatra & Aceh",
    profile: "Full-bodied, earthy, low acidity with herbal and dark chocolate notes",
    process: "Wet-hulled (Giling Basah)",
    image: coffeeSumatra,
  },
  {
    name: "Java Arabica",
    origin: "East Java Highlands",
    profile: "Clean, bright, medium body with nutty sweetness and subtle spice",
    process: "Fully washed",
    image: coffeeJava,
  },
  {
    name: "Indonesian Robusta",
    origin: "Lampung & Bengkulu",
    profile: "Bold, strong, low acidity with woody and caramel undertones",
    process: "Natural / dry process",
    image: coffeeRobusta,
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-primary mb-4">
            Our Origins
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Indonesian Coffee <span className="text-gradient-gold">Selection</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Indonesia is the world's 4th largest coffee producer. We bring you
            direct access to its most sought-after origins.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group rounded-lg overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <p className="absolute bottom-4 left-4 font-sans text-xs tracking-[0.2em] uppercase text-primary">
                  {product.origin}
                </p>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-3">
                  {product.profile}
                </p>
                <p className="font-sans text-xs text-primary tracking-wide uppercase">
                  Process: {product.process}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground font-sans text-sm mt-10"
        >
          Custom specifications, grades, and blends available upon request.{" "}
          <a href="#contact" className="text-primary hover:underline">
            Talk to our team →
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default ProductsSection;
