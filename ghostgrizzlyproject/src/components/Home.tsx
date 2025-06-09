import React, { JSX } from "react";

export default function Home(): JSX.Element {
    return (
        <>
            {/* Hero Section */}
            <section id="Home" className="flex flex-col items-center justify-center text-center px-4 py-28 sm:py-40 max-w-5xl mx-auto bg-black/60 backdrop-blur-sm rounded-xl mt-10 shadow-xl">
                <h1 className="font-orbitron text-5xl sm:text-6xl mb-6 bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent drop-shadow-md">
                    Construindo o futuro digital
                </h1>
                <p className="font-inter text-lg sm:text-xl max-w-2xl mb-8 text-white/90">
                    Na GhostGrizzly, desenvolvemos sites e apps modernos, rápidos e com design impactante para sua empresa.
                </p>
                <a
                    href="#services"
                    className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition-all duration-300"
                >
                    Conheça nossos serviços
                </a>
            </section>
        </>
    );
}
