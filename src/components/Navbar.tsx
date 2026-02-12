import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Product", href: "#product" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-xl md:text-2xl font-bold text-gradient-gold">
            SEM Coffee
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-primary text-primary-foreground font-sans text-sm font-semibold rounded tracking-wide uppercase hover:bg-gold-light transition-colors"
          >
            Request Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-glass border-b border-border/50 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-sans font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 bg-primary text-primary-foreground font-sans text-sm font-semibold rounded tracking-wide uppercase text-center"
              >
                Request Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
