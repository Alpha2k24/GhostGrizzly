import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center bg-black/60 backdrop-blur-md p-10 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-white drop-shadow">
          Quem Somos
        </h2>
        <p className="text-white/90 text-lg leading-relaxed">
          Somos apaixonados por tecnologia e design. Nosso objetivo é transformar ideias em experiências digitais incríveis.
          <br />
          <br />
          A GhostGrizzly foi criada para ajudar empresas e criadores a se destacarem na internet com soluções modernas, rápidas e responsivas.
        </p>
      </div>
    </section>
  );
}
