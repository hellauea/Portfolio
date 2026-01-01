import { Bot, Rocket, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "919606664929";

const aiPlans = [
  {
    icon: Bot,
    name: "AI Integration",
    price: "₹9,999",
    description: "Add AI chatbots, automation, and smart features to your website",
    features: ["AI Chatbot", "Smart forms", "Basic automation", "Analytics integration"],
    message: "Hi Prathap, I'm interested in AI Integration (₹9,999) for my website.",
    cta: "Add AI",
  },
  {
    icon: Rocket,
    name: "Advanced AI Systems",
    price: "₹14,999",
    description: "Full-scale AI solutions for complex business needs",
    features: ["Custom AI models", "Advanced automation", "API integrations", "Ongoing optimization"],
    message: "Hi Prathap, I want to discuss Advanced AI Systems (₹14,999) for my business.",
    cta: "Build Custom AI",
  },
];

const AIPlans = () => {
  const handleWhatsApp = (message: string) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-20 md:py-28 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            🤖 AI FOR BUSINESS
          </span>
          <h2 className="text-display-sm md:text-display-md font-bold mb-4">
            Turn Your Website Into a Smart System
          </h2>
          <p className="text-muted-foreground text-lg">
            Automation. Intelligence. Results.
          </p>
        </div>

        <div className="space-y-6">
          {aiPlans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-6 md:p-8 bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary shrink-0 self-start">
                  <plan.icon className="w-8 h-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground mt-1">{plan.description}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {plan.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
                  <div className="text-3xl md:text-4xl font-bold text-gradient">{plan.price}</div>
                  <Button
                    onClick={() => handleWhatsApp(plan.message)}
                    size="lg"
                    className="w-full md:w-auto h-12 px-6 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {plan.cta}
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

export default AIPlans;
