import React from "react";
import SolaNzila from "./../assets/SolaNzila.png";
import PortfolioMini from "./../assets/Portfolio.png";
import Carrinho from "./../assets/Carrinho.png";

const projects = [
  {
    title: "Landing Page para Aulas de Apoio",
    image: SolaNzila,
    link: "https://alpha2k24.github.io/SolaNzila/"
  },
  {
    title: "Mini Portfólio Animado",
    image: PortfolioMini,
    link: "https://alpha2k24.github.io/ReactEstudo/"
  },
  {
    title: "Carrinho de Compras",
    image: Carrinho,
    link: "https://alpha2k24.github.io/CarrinhoDeCompras/"
  },
];

export default function Portfolio() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Portfólio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-lg font-bold">{project.title}</p>
                {project.link && (
                  <a
                    href={project.link}
                    className="absolute inset-0 w-full h-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
