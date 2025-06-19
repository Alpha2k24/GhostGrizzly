// ---------- file: src/components/ContactForm.tsx
import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="py-32 px-6 max-w-3xl mx-auto text-white relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-indigo-400/20"
      >
        <h2 className="text-4xl sm:text-5xl font-orbitron text-indigo-300 text-center mb-10 drop-shadow">
          Fale Conosco
        </h2>

        <form className="space-y-6">
          <motion.input
            type="text"
            placeholder="Nome"
            className="w-full p-4 rounded-lg bg-indigo-950/60 placeholder-indigo-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg bg-indigo-950/60 placeholder-indigo-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            rows={5}
            placeholder="Sua mensagem"
            className="w-full p-4 rounded-lg bg-indigo-950/60 placeholder-indigo-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold text-lg transition shadow-lg"
          >
            Enviar Mensagem
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}