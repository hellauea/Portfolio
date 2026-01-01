import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919606664929";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Prathap, I want a website / AI solution.");

const Footer = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          V PRATHAP
        </h3>
        <p className="text-muted-foreground mb-6">
          Web Developer • AI Engineer
        </p>
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">WhatsApp</span>
        </button>
        <p className="mt-8 text-sm text-muted-foreground/60">
          © {new Date().getFullYear()} V Prathap. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
