import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappNumber = "5519982012814"; 
  const whatsappMessage = encodeURIComponent("Olá! Estou no site e gostaria de agendar uma consulta.");
  const linkWhatsapp = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={linkWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      aria-label="Contactar pelo WhatsApp"
    >
      {/* O ícone do WhatsApp */}
      <MessageCircle size={28} />
      
      {/* Animação de pulso à volta do botão */}
      <span className="absolute w-full h-full rounded-full bg-green-500 opacity-20 animate-ping group-hover:hidden"></span>
    </a>
  );
}