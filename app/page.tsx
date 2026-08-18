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
    <main className="min-h-screen bg-areia-light text-texto font-sans relative pt-20">

      {/* =========================
          HEADER
      ========================== */}

      <Header />

      {/* =========================
          HERO
      ========================== */}

      <section
        className="
          relative
          w-full
          max-w-7xl
          mx-auto
          px-6
          py-12
          lg:py-20
          flex
          flex-col-reverse
          lg:flex-row
          items-center
          gap-12
          lg:gap-16
        "
      >

        {/* =========================
    TEXTO DO HERO
========================= */}

<div className="flex-1 space-y-6 text-center lg:text-left">

  <span className="text-nevoa-dark font-semibold tracking-wider text-sm uppercase">
    Psicologia Clínica & Neuropsicologia
  </span>

  <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-nevoa-dark">
    Um espaço de acolhimento para o seu desenvolvimento
  </h1>

  <p className="text-lg opacity-90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
    Compreendendo o funcionamento da sua mente para promover bem-estar,
    autonomia e qualidade de vida. Atendimento especializado para
    jovens e adultos.
  </p>

  <div className="pt-4 flex justify-center lg:justify-start">
    <WhatsAppButton />
  </div>

</div>

        {/* =========================
    MOEDA 3D
========================= */}

<div className="flex-1 flex justify-center items-center w-full">

  <div
    className="relative w-[290px] h-[290px] sm:w-[330px] sm:h-[330px] lg:w-[390px] lg:h-[390px]"
    style={{ perspective: "1200px" }}
  >

    {/* Moeda */}

    <div className="coin-flip relative w-full h-full">

      {/* =========================
          FRENTE — FOTO
      ========================== */}

      <div
        className="
          coin-face
          overflow-hidden
          border-[8px]
          border-areia
          shadow-2xl
          bg-areia
        "
      >

        <Image
          src="/ana_luisa_foto1.jpg"
          alt="Dra. Ana Luisa"
          fill
          className="object-cover"
          priority
        />

      </div>

      {/* =========================
          VERSO — LOGO
      ========================== */}

      <div
        className="
          coin-face
          coin-back
          bg-areia-light
          border-[8px]
          border-areia
          shadow-2xl
          flex
          items-center
          justify-center
        "
      >

        <div className="w-[94%] h-[94%] rounded-full flex items-center justify-center">

          <Image
            src="/logo.svg"
            alt="Logo Ana Luisa Moraes"
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />

        </div>

      </div>

    </div>

  </div>

</div>

      </section>

      {/* =========================
          ESPECIALIDADES
      ========================== */}

      <section
        id="especialidades"
        className="
          w-full
          bg-areia
          py-16
          lg:py-24
          border-y
          border-nevoa-light/40
          shadow-inner
        "
      >
        <Services />
      </section>

      {/* =========================
          SOBRE MIM
      ========================== */}

      <section
        id="sobre-mim"
        className="
          w-full
          py-16
          lg:py-24
        "
      >
        <About />
      </section>

      {/* =========================
          DÚVIDAS
      ========================== */}

      <section
        id="duvidas"
        className="
          w-full
          bg-areia
          py-16
          lg:py-24
          border-t
          border-nevoa-light/40
          shadow-inner
        "
      >
        <FAQ />
      </section>

      {/* =========================
          FOOTER
      ========================== */}

      <Footer />

      {/* =========================
          WHATSAPP FLUTUANTE
      ========================== */}

      <FloatingWhatsApp />

    </main>
  );
}