import { WhatsAppButton } from "./WhatsAppButton";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-sand-100/95 backdrop-blur-sm shadow-sm border-b border-petrol-100/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Ana Luisa Moraes - Psicóloga"
            width={180}
            height={60}
            priority
            className="w-auto h-12"
          />
        </Link>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          <Link
            href="#especialidades"
            className="hover:text-petrol-600 transition-colors"
          >
            Especialidades
          </Link>

          <Link
            href="#sobre-mim"
            className="hover:text-petrol-600 transition-colors"
          >
            Sobre Mim
          </Link>

          <Link
            href="#duvidas"
            className="hover:text-petrol-600 transition-colors"
          >
            Dúvidas
          </Link>
        </nav>

        {/* Botão no Cabeçalho */}
        <div className="hidden md:block">
          <WhatsAppButton text="Agendar Consulta" />
        </div>

      </div>
    </header>
  );
};
