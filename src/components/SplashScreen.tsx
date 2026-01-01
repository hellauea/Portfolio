import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [showSubtext, setShowSubtext] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const subtextTimer = setTimeout(() => setShowSubtext(true), 400);
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const completeTimer = setTimeout(() => onComplete(), 1500);

    return () => {
      clearTimeout(subtextTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-300 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="animate-fade-in text-display-md md:text-display-lg font-extrabold tracking-tight text-foreground">
        V PRATHAP
      </h1>
      <p
        className={`mt-4 text-lg md:text-xl tracking-widest text-muted-foreground transition-opacity duration-300 ${
          showSubtext ? "opacity-100" : "opacity-0"
        }`}
      >
        Web • AI • Systems
      </p>
    </div>
  );
};

export default SplashScreen;
