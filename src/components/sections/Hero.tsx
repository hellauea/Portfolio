import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new projects
          </div>

          {/* Name */}
          <h1 className="fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            V Prathap
          </h1>

          {/* Title */}
          <p className="fade-in-up delay-200 text-xl sm:text-2xl text-primary font-medium mb-6">
            Freelance Web Developer
          </p>

          {/* Tagline */}
          <p className="fade-in-up delay-300 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            I design and develop clean, fast, mobile-responsive websites for local 
            businesses and institutions—focused on clarity, trust, and conversions.
          </p>

          {/* CTAs */}
          <div className="fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 px-8">
              <a
                href="https://wa.me/919606664929"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
                WhatsApp Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 px-8">
              <a href="#projects">
                View My Work
                <ArrowDown size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <a
          href="#services"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};
