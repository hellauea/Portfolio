import { useState, useCallback } from "react";
import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import AIPlans from "@/components/AIPlans";
import About from "@/components/About";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      <main className={showSplash ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <AIPlans />
        <About />
        <Footer />
      </main>

      {!showSplash && <WhatsAppButton />}
    </>
  );
};

export default Index;
