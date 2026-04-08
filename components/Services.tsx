import { Brain, Wind, Target, FileText } from "lucide-react";

const specialities = [
  {
    title: "Avaliação Neuropsicológica",
    icon: <Brain size={40} />,
    description: "Investigação detalhada das funções cognitivas (memória, atenção, raciocínio) para auxiliar em diagnósticos precisos."
  },
  {
    title: "Ansiedade e Estresse",
    icon: <Wind size={40} />,
    description: "Espaço seguro para entender gatilhos e desenvolver estratégias de enfrentamento para uma rotina mais leve."
  },
  {
    title: "Desenvolvimento Pessoal",
    icon: <Target size={40} />,
    description: "Foco no autoconhecimento para melhorar relações interpessoais, autoestima e tomada de decisões."
  },
  {
    title: "Transtornos do Neurodesenvolvimento",
    icon: <FileText size={40} />,
    description: "Acompanhamento e suporte direcionado para demandas como TDAH e outras condições neurodivergentes."
  }
];

export const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        {/* Título com a cor azul escuro da paleta */}
        <h2 className="text-3xl font-bold text-nevoa-dark mb-4">Especialidades</h2>
        <p className="text-texto">Clique nos cards para saber mais sobre cada área</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {specialities.map((item, index) => (
          <div key={index} className="group h-64 [perspective:1000px] cursor-pointer">
            {/* O CARD QUE GIRA */}
            <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-active:[transform:rotateY(180deg)] lg:group-hover:[transform:rotateY(180deg)] shadow-md">
              
              {/* LADO DA FRENTE (Símbolo e Título) */}
              {/* Usamos bg-white para dar contraste com o fundo Areia da seção */}
              <div className="absolute inset-0 h-full w-full rounded-2xl bg-white flex flex-col items-center justify-center p-6 [backface-visibility:hidden]">
                <div className="text-nevoa-dark mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-texto text-center">{item.title}</h3>
              </div>

              {/* LADO DE TRÁS (Texto explicativo) */}
              {/* Aqui usamos o Azul Névoa (bg-nevoa) para destacar bem quando o card vira */}
              <div className="absolute inset-0 h-full w-full rounded-2xl bg-nevoa p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center border-2 border-nevoa-light">
                <p className="text-sm text-center font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};