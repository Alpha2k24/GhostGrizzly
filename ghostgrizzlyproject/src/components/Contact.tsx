import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-[rgba(0,20,50,0.7)] backdrop-blur-md">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-200 mb-8 text-center font-orbitron drop-shadow-lg">
          Fale Conosco
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Nome"
            className="w-full p-4 rounded-lg bg-blue-900 bg-opacity-70 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg bg-blue-900 bg-opacity-70 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <textarea
            rows={5}
            placeholder="Sua mensagem"
            className="w-full p-4 rounded-lg bg-blue-900 bg-opacity-70 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold text-lg transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
