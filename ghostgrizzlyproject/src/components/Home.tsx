import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-32 sm:py-48 max-w-5xl mx-auto bg-gradient-to-br from-black/40 to-gray-900/30 backdrop-blur-md rounded-2xl shadow-2xl border border-cyan-500/10"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-orbitron text-4xl sm:text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-white text-transparent bg-clip-text drop-shadow-lg"
      >
        Construindo o Futuro Digital
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="font-inter text-lg sm:text-xl max-w-2xl mb-8 text-white/90"
      >
        Na GhostGrizzly, desenvolvemos experiências digitais imersivas com tecnologia de ponta, performance e impacto visual.
      </motion.p>

      <motion.a
        href="#services"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold shadow-lg transition-all duration-300"
      >
        Conheça nossos serviços
      </motion.a>
    </section>
  );
}
