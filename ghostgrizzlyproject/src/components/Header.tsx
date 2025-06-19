import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpeg";

/**
 * Cabeçalho minimalista neon futurista que combina com o cenário GhostGrizzly.
 */
export default function Header() {
  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-20 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-xl rounded-b-2xl border-b border-cyan-400/30 pointer-events-auto">
        {/* Logo + title */}
        <div className="flex items-center space-x-3">
          <motion.img
            src={logo}
            alt="GhostGrizzly logo"
            className="w-10 h-10 object-cover rounded-full border-2 border-cyan-400 shadow-lg"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          />
          <motion.h1
            className="font-extrabold text-transparent text-2xl sm:text-3xl bg-gradient-to-r from-cyan-400 via-indigo-400 to-white bg-clip-text drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          >
            GhostGrizzly
          </motion.h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-sm uppercase tracking-wide">
            {nav.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.4 }}
              >
                <a
                  href={`#${item.id}`}
                  className="relative px-1 py-0.5 text-white/80 hover:text-cyan-300 transition-colors duration-300"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
