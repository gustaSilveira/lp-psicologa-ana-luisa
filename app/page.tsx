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
    // Fundo base do site agora usa o areia claro e o texto com a cor neutra
    <main className="min-h-screen bg-areia-light text-texto font-sans relative pt-20">
      
      {/* CABEÇALHO */}
      <Header />

      {/* 1. SEÇÃO PRINCIPAL (HERO) */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-12 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <span className="text-nevoa-dark font-semibold tracking-wider text-sm uppercase">
            Psicologia Clínica & Neuropsicologia
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-nevoa-dark">
            Um espaço de acolhimento para o seu desenvolvimento
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Compreendendo o funcionamento da sua mente para promover bem-estar, autonomia e qualidade de vida. Atendimento especializado para jovens e adultos.
          </p>
          <div className="pt-4 flex justify-center lg:justify-start">
            <WhatsAppButton />
          </div>
        </div>

        {/* Círculo da Foto */}
        <div className="flex-1 flex justify-center w-full">
          <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-8 border-areia shadow-2xl">
            {/* Foto atualizada apontando para a pasta public */}
            <Image src="/ana_luisa_foto.jpg" alt="Dra. Ana Luisa" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE ESPECIALIDADES (Fundo Areia Base) */}
      <section id="especialidades" className="w-full bg-areia py-16 lg:py-24 border-y border-nevoa-light/40 shadow-inner">
        <Services />
      </section>

      {/* 3. SEÇÃO SOBRE MIM (Volta para o fundo claro) */}
      <section id="sobre-mim" className="w-full py-16 lg:py-24">
        <About />
      </section>

      {/* 4. SEÇÃO DE DÚVIDAS (Fundo Areia Base novamente) */}
      <section id="duvidas" className="w-full bg-areia py-16 lg:py-24 border-t border-nevoa-light/40 shadow-inner">
        <FAQ />
      </section>

      {/* RODAPÉ E BOTÃO FLUTUANTE */}
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}