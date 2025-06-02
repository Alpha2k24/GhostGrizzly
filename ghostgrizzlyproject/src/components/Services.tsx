import React from "react";

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 px-4 max-w-6xl mx-auto w-full"
    >
      <h2 className="font-orbitron text-3xl sm:text-4xl mb-10 text-center text-indigo-300 drop-shadow-md">
        Serviços
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
        {[
          {
            title: "Criação de Sites com React",
            desc: "Desenvolvimento de interfaces modernas e funcionais usando React, HTML, CSS e JavaScript.",
          },
          {
            title: "Landing Pages e Portfólios",
            desc: "Criação de páginas institucionais, pessoais e de portfólio com design limpo, responsivo e profissional.",
          },
          {
            title: "Manutenção e Atualizações",
            desc: "Correções, melhorias de layout, ajustes em funcionalidades e atualizações em sites já existentes.",
          },
          {
            title: "Ajuda com Hospedagem (cPanel)",
            desc: "Configuração de sites no cPanel, upload de arquivos, ajustes em domínio e email profissional.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-black/50 backdrop-blur-md shadow-lg border border-indigo-500/20 hover:shadow-indigo-400 transition duration-300"
          >
            <h3 className="font-inter text-xl sm:text-2xl mb-3 text-white drop-shadow">
              {service.title}
            </h3>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
