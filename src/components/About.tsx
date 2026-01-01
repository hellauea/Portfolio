import { useEffect, useRef, useState } from "react";

const aboutLines = [
  "I'm V Prathap.",
  "I build modern websites and AI-powered systems.",
  "Fast. Scalable. Professional.",
];

const About = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          aboutLines.forEach((_, index) => {
            setTimeout(() => {
              setVisibleLines((prev) => [...prev, index]);
            }, index * 300);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-display-sm md:text-display-md font-bold mb-12 md:mb-16">
          About
        </h2>

        <div className="space-y-4 md:space-y-6">
          {aboutLines.map((line, index) => (
            <p
              key={index}
              className={`text-xl md:text-2xl lg:text-3xl font-medium transition-all duration-500 ${
                visibleLines.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } ${index === 0 ? "text-foreground" : index === 2 ? "text-primary" : "text-muted-foreground"}`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
