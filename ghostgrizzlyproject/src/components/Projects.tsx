import React from "react";

const projects = [
  {
    title: "Landing Page para Aulas de Apoio",
    image: "/assets/SolaNzila.png",
  },
  {
    title: "E-commerce de Roupas",
    image: "/assets/SolaNzila.png",
  },
  {
    title: "Portfólio Profissional",
    image: "/assets/SolaNzila.png",
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
