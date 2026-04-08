"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona a primeira sessão?",
    answer: "A primeira consulta é dedicada a conhecer a sua história, compreender os motivos que o(a) trouxeram à terapia e definir os objetivos do acompanhamento. É um momento de acolhimento e escuta sem julgamentos."
  },
  {
    question: "Trabalha com planos de saúde?",
    answer: "Atualmente, os atendimentos são realizados de forma particular. No entanto, emito recibos com os dados necessários para que você possa solicitar o reembolso junto ao seu plano de saúde, dependendo das condições do seu contrato."
  },
  {
    question: "Qual a duração de cada consulta?",
    answer: "As sessões de psicoterapia têm a duração padrão de 50 minutos e ocorrem, geralmente, uma vez por semana, podendo a frequência ser ajustada de acordo com as necessidades de cada paciente."
  },
  {
    question: "Como é feita a avaliação neuropsicológica?",
    answer: "A avaliação é um processo estruturado que envolve entrevistas clínicas e a aplicação de testes padronizados. O processo leva a uma extensa avaliaçao conforme as sessões e resulta na entrega de um laudo detalhado."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    // ID "faq" e scroll-mt-20 adicionados aqui
    <section id="faq" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-slate-600">
            Respostas para as dúvidas mais comuns sobre o início do processo terapêutico.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-sand-100 rounded-2xl overflow-hidden bg-sand-50/50 transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-800">{faq.question}</span>
                <ChevronDown 
                  className={`text-petrol-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                  size={20} 
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-48 opacity-100 pb-5' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}