import { Header } from "../components/Header";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { FAQ } from "../components/FAQ";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Footer } from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    // O fundo bg-sand-50 aqui garante o fundo "off-white" super clarinho base do site
    <main className="min-h-screen bg-sand-50 font-sans relative pt-20">
      
      {/* CABEÇALHO */}
      <Header />

      {/* 1. SEÇÃO PRINCIPAL (HERO) - Fundo claro base */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-12 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <span className="text-petrol-600 font-semibold tracking-wider text-sm uppercase">
            Psicologia Clínica & Neuropsicologia
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
            Um espaço de acolhimento para o seu desenvolvimento
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Compreendendo o funcionamento da sua mente para promover bem-estar, autonomia e qualidade de vida. Atendimento especializado para jovens e adultos.
          </p>
          <div className="pt-4 flex justify-center lg:justify-start">
            <WhatsAppButton />
          </div>
        </div>

        {/* Círculo da Foto */}
        <div className="flex-1 flex justify-center w-full">
          <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-8 border-sand-100 shadow-2xl">
            {/* Lembre-se de colocar o nome exato da sua foto ali no src, ex: '/ana.jpg' */}
            <Image src="/perfil.jpg" alt="Dra. Ana Luisa" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE ESPECIALIDADES (Fundo Bege) */}
      {/* A mágica acontece aqui: A section com bg-sand-100 vai de ponta a ponta na tela */}
      <section id="especialidades" className="w-full bg-sand-100 py-16 lg:py-24 border-y border-petrol-100/40 shadow-inner">
        <Services />
      </section>

      {/* 3. SEÇÃO SOBRE MIM (Volta para o fundo claro) */}
      <section id="sobre-mim" className="w-full py-16 lg:py-24">
        <About />
      </section>

      {/* 4. SEÇÃO DE DÚVIDAS (Fundo Bege novamente) */}
      <section id="duvidas" className="w-full bg-sand-100 py-16 lg:py-24 border-t border-petrol-100/40 shadow-inner">
        <FAQ />
      </section>

      {/* RODAPÉ E BOTÃO FLUTUANTE */}
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}