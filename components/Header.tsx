"use client";

import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-sand-100/95 backdrop-blur-sm shadow-sm border-b border-petrol-100/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/logo.svg"
            alt="Ana Luisa Moraes - Psicóloga"
            width={180}
            height={60}
            priority
            className="w-auto h-12"
          />
        </Link>

        {/* =========================
            MENU DESKTOP
        ========================== */}
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

        {/* =========================
            BOTÃO DESKTOP
        ========================== */}
        <div className="hidden md:block">
          <WhatsAppButton text="Agendar Consulta" />
        </div>

        {/* =========================
            BOTÃO MENU MOBILE
        ========================== */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 text-petrol-600"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* =========================
          MENU MOBILE
      ========================== */}
      <div
        className={`
          md:hidden
          absolute
          top-20
          left-0
          w-full
          bg-sand-100/98
          backdrop-blur-sm
          border-t
          border-petrol-100/30
          shadow-lg
          transition-all
          duration-300
          overflow-hidden
          ${
            menuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }
        `}
      >
        <nav className="flex flex-col px-6 py-5 gap-1 text-slate-600 font-medium">

          <Link
            href="#especialidades"
            onClick={closeMenu}
            className="py-4 border-b border-petrol-100/20 hover:text-petrol-600 transition-colors"
          >
            Especialidades
          </Link>

          <Link
            href="#sobre-mim"
            onClick={closeMenu}
            className="py-4 border-b border-petrol-100/20 hover:text-petrol-600 transition-colors"
          >
            Sobre Mim
          </Link>

          <Link
            href="#duvidas"
            onClick={closeMenu}
            className="py-4 border-b border-petrol-100/20 hover:text-petrol-600 transition-colors"
          >
            Dúvidas
          </Link>

          <div className="pt-4 pb-2">
            <WhatsAppButton
              text="Agendar Consulta"
            />
          </div>

        </nav>
      </div>
    </header>
  );
};