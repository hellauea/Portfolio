import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "919606664929";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Prathap, I want a website / AI solution.");

const Hero = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-aurora overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight">
          <span className="block animate-fade-up opacity-0">I BUILD WEBSITES</span>
          <span className="block mt-2 text-gradient animate-fade-up opacity-0 stagger-2">
            POWERED BY AI
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground animate-fade-up opacity-0 stagger-3">
          Web. AI. Automation. Anything you imagine.
        </p>

        {/* CTA Button */}
        <div className="mt-10 md:mt-12 animate-fade-up opacity-0 stagger-4">
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground glow-border rounded-full transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WHATSAPP ME
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
