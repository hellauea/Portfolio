import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919606664929";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Prathap, I want a website / AI solution.");

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg animate-pulse-glow transition-transform duration-300 hover:scale-110 active:scale-95"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;
