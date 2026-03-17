import { WhatsAppButton } from "./WhatsAppButton";
import Link from 'next/link';

export const Header = () => {
  return (
    // O bg-sand-100/90 deixa o bege levemente transparente para um efeito moderno
    <header className="fixed top-0 left-0 w-full z-50 bg-sand-100/95 backdrop-blur-sm shadow-sm border-b border-petrol-100/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo / Nome */}
        <Link href="/" className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tight">
          Ana Luisa Moraes<span className="text-petrol-600">.</span>
        </Link>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          <Link href="#especialidades" className="hover:text-petrol-600 transition-colors">Especialidades</Link>
          <Link href="#sobre-mim" className="hover:text-petrol-600 transition-colors">Sobre Mim</Link>
          <Link href="#duvidas" className="hover:text-petrol-600 transition-colors">Dúvidas</Link>
        </nav>

        {/* Botão no Cabeçalho atualizado */}
        <div className="hidden md:block">
          {/* Remova o <a> antigo e coloque este: */}
          <WhatsAppButton text="Agendar Consulta" />
        </div>

      </div>
    </header>
  );
};