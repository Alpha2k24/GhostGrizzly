import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import PriceTable from "./components/TabelaPreco";
import FadeInOnScroll from "./components/FadeInScroll";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Projects";
import ContactForm from "./components/Contact";

export default function App() {
  return (
    <div className="App min-h-screen bg-gray-900 text-white flex flex-col" >
      <FadeInOnScroll delay={0}><Header /></FadeInOnScroll>
      <FadeInOnScroll delay={0.2}><Home /></FadeInOnScroll>
      <FadeInOnScroll delay={0.3}><About /></FadeInOnScroll>
      <FadeInOnScroll delay={0.4}><Services /></FadeInOnScroll>
      <FadeInOnScroll delay={0.5}><Portfolio /></FadeInOnScroll>
      <FadeInOnScroll delay={0.7}><PriceTable /></FadeInOnScroll>
      <FadeInOnScroll delay={0.8}><ContactForm /></FadeInOnScroll>
      <footer className="mt-auto bg-[rgba(0,20,50,0.8)] text-center text-blue-200 py-6 font-mono text-sm select-none">
        <p>© 2025 GhostGrizzly. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
