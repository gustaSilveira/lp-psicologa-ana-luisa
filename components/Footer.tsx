import { Instagram, MessageCircle, Mail } from 'lucide-react';

export function Footer() {
  // 1. AQUI VOCÊ LINKA O WHATSAPP
  // Coloque o número dela com DDD (apenas números, sem espaços ou traços)
  const whatsappNumber = "5519982012814"; 
  const whatsappMessage = encodeURIComponent("Olá! Acessei o site e gostaria de tirar algumas dúvidas sobre o atendimento.");
  const linkWhatsapp = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // 2. AQUI VOCÊ LINKA O INSTAGRAM
  // Coloque apenas o nome de usuário dela (sem o @)
  const instagramUser = "dra.analuisa"; 
  const linkInstagram = `https://instagram.com/${instagramUser}`;

  return (
    <footer className="bg-petrol-700 text-sand-50 py-12 border-t border-petrol-600">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Coluna 1: Nome e Resumo */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-wide">Dra. Ana Luisa</h3>
          <p className="text-petrol-100 text-sm leading-relaxed max-w-xs">
            Psicologia Clínica e Neuropsicologia. Promovendo autoconhecimento e bem-estar através de um atendimento ético e acolhedor.
          </p>
          <p className="text-sm font-semibold text-terracotta-400 pt-2">
            CRP: 06/229922
          </p>
        </div>

        {/* Coluna 2: Contato Direto */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-4">Contato</h4>
          <a 
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-petrol-100 hover:text-white transition-colors duration-200"
          >
            <MessageCircle size={20} />
            <span>(19) 98201-2814</span>
          </a>
          <a 
            href="mailto:contato@draanaluisa.com.br"
            className="flex items-center gap-3 text-petrol-100 hover:text-white transition-colors duration-200"
          >
            <Mail size={20} />
            <span>psi.analuisanovaes@gmail.com</span>
          </a>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-4">Me acompanhe</h4>
          <a 
            href='https://www.instagram.com/psi_analuisamoraes?igsh=c2NwamV1Njc5cmRh'
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-petrol-100 hover:text-white transition-colors duration-200 group"
          >
            <div className="bg-petrol-600 p-2 rounded-full group-hover:bg-terracotta-400 transition-colors duration-300">
              <Instagram size={20} />
            </div>
            <span>psi.analuisa</span>
          </a>
        </div>

      </div>

      {/* Direitos Autorais */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-petrol-600/50 text-center text-sm text-petrol-100/70">
        <p>© {new Date().getFullYear()} Dra. Ana Luisa - Psicologia Clínica. Todos os direitos reservados.</p>
        <p className="mt-1 text-xs">Desenvolvido com excelência técnica.</p>
      </div>
    </footer>
  );
}