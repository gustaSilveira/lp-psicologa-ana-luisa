import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-sand-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-petrol-700/10 z-10 rounded-3xl mix-blend-overlay"></div>
            <Image 
              src="/foto-perfil-v2.jpg"
              alt="Dra. Ana Luisa no consultório" 
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <span className="text-terracotta-400 font-semibold tracking-wider text-sm uppercase">
            Conheça a Profissional
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Psi. Ana Luisa
          </h2>
          
          <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
            <p>
              Sou psicóloga clínica apaixonada por compreender a complexidade da mente humana. Meu objetivo é proporcionar um ambiente ético, seguro e acolhedor para que você possa explorar suas emoções e potenciais.
            </p>
            <p>
              Atualmente, dedico meus estudos à <strong>Pós-graduação em Neuropsicologia</strong>. Essa especialização me permite ir além, integrando o conhecimento sobre o funcionamento do cérebro com o comportamento e as emoções.
            </p>
            <p>
              Acredito em uma psicologia baseada em evidências, onde o acolhimento humano caminha lado a lado com o rigor científico, oferecendo um tratamento moderno e eficaz para cada paciente.
            </p>
          </div>

          <div className="pt-6">
            <div className="inline-block bg-white px-6 py-4 rounded-2xl shadow-sm border border-sand-100">
              <p className="text-sm font-medium text-slate-800">CRP: <span className="text-petrol-600 font-normal">06/229922</span></p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}