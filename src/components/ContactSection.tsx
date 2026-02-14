import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: t("contact.toast_title"),
        description: t("contact.toast_desc"),
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-primary mb-4">
              {t("contact.tagline")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              {t("contact.title1")}{" "}
              <span className="text-gradient-gold">{t("contact.title2")}</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              {t("contact.description")}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-sans text-foreground">
                  sales@coffee.suksesekspormandiri.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="https://wa.me/6285124480871"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-foreground hover:text-primary transition-colors"
                >
                  +62 851-2448-0871 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-sans text-foreground">Indonesia</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-lg bg-card border border-border/50 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-1 block">
                    {t("contact.label_name")} *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground font-sans text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder={t("contact.placeholder_name")}
                  />
                </div>
                <div>
                  <label className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-1 block">
                    {t("contact.label_company")} *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground font-sans text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder={t("contact.placeholder_company")}
                  />
                </div>
              </div>
              <div>
                <label className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-1 block">
                  {t("contact.label_email")} *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground font-sans text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder={t("contact.placeholder_email")}
                />
              </div>
              <div>
                <label className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-1 block">
                  {t("contact.label_country")}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground font-sans text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder={t("contact.placeholder_country")}
                />
              </div>
              <div>
                <label className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-1 block">
                  {t("contact.label_message")} *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground font-sans text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder={t("contact.placeholder_message")}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-sans font-semibold text-sm tracking-wide uppercase rounded hover:bg-gold-light transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {loading ? t("contact.sending") : t("contact.submit")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
