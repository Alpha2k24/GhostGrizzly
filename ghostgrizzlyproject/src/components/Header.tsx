import React, { JSX } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpeg";

export default function Header(): JSX.Element {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="backdrop-blur-md bg-gray-900/80 text-white p-4 sm:p-6 shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-center sm:justify-start space-x-3">
          <motion.img
            src={logo}
            alt="Logo GhostGrizzly"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full border-2 border-indigo-500 shadow"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          />
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-xl bg-gradient-to-t from-indigo-500 to-white text-transparent bg-clip-text sm:text-2xl lg:text-3xl font-bold"
          >
            GhostGrizzly
          </motion.h1>
        </div>

        <nav className="mt-4 hidden sm:mt-0 sm:block">
          <ul className="flex flex-col sm:flex-row sm:space-x-6 text-center sm:text-left italic">
            {["Home", "About", "Contact"].map((label, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              >
                <a
                  href={`#${label.toLowerCase()}`}
                  className="group relative inline-block py-1 transition-all duration-300 ease-in-out hover:text-indigo-400"
                >
                  {label}
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-indigo-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
