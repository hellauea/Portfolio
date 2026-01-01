import { Check, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "919606664929";

const plans = [
  {
    name: "Basic Website",
    price: "₹3,499",
    description: "Perfect for getting started online",
    features: ["Responsive design", "Up to 5 pages", "Contact form", "Basic SEO"],
    message: "Hi Prathap, I'm interested in the Basic Website plan (₹3,499).",
    popular: false,
  },
  {
    name: "Premium Website",
    price: "₹4,999",
    description: "For businesses that want to stand out",
    features: [
      "Everything in Basic",
      "Up to 10 pages",
      "Advanced animations",
      "Performance optimization",
      "Priority support",
    ],
    message: "Hi Prathap, I'm interested in the Premium Website plan (₹4,999).",
    popular: true,
  },
  {
    name: "Custom / WordPress",
    price: "Let's Talk",
    description: "Tailored solutions for unique needs",
    features: ["Custom functionality", "CMS integration", "E-commerce ready", "Ongoing support"],
    message: "Hi Prathap, I need a custom website / WordPress solution. Let's discuss!",
    popular: false,
  },
];

const Pricing = () => {
  const handleWhatsApp = (message: string) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-display-sm md:text-display-md text-center font-bold mb-4">
          Website Plans
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 md:mb-16">
          Simple pricing. Premium results.
        </p>

        <div className="space-y-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-card border-2 border-primary glow-border"
                  : "bg-card border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  MOST CHOSEN
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground mt-1">{plan.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {plan.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-primary" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{plan.price}</div>
                  <Button
                    onClick={() => handleWhatsApp(plan.message)}
                    size="lg"
                    className={`w-full md:w-auto h-12 px-6 font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {plan.popular ? "Start Premium" : "WhatsApp Me"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
