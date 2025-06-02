import React, { useState } from "react";
import { motion } from "framer-motion";

const priceLevels = [
    {
        level: 1,
        title: "Landing Page Básica",
        priceRange: "70.000 – 150.000 AOA",
        includes: [
            "Página única responsiva (HTML, CSS, JS ou React).",
            "Informações básicas: apresentação, serviços e contato.",
            "Design simples, leve e direto.",
        ],
        factors: [
            "Se for usado React ao invés de HTML puro.",
            "Se o cliente pedir versão mobile mais refinada.",
            "Adição de imagens ou vídeos personalizados.",
        ],
    },
    {
        level: 2,
        title: "Landing Page Premium",
        priceRange: "150.000 – 300.000 AOA",
        includes: [
            "Página única mais sofisticada com:",
            "Animações.",
            "Formulários com validação.",
            "Integração com APIs como Mailchimp ou WhatsApp.",
        ],
        factors: [
            "Complexidade das animações.",
            "Integrações externas (ex.: agendamento automático).",
            "Necessidade de copywriting ou branding adicional.",
        ],
    },
    {
        level: 3,
        title: "Site Institucional Simples",
        priceRange: "300.000 – 600.000 AOA",
        includes: [
            "3 a 5 páginas (Home, Sobre, Serviços, Contato, etc.).",
            "CMS básico como WordPress.",
            "Design leve e foco em conteúdo institucional.",
        ],
        factors: [
            "Se for feito em WordPress ou código puro (React).",
            "Se o cliente pedir ajuda com conteúdo.",
            "Traduções multilíngues.",
        ],
    },
    {
        level: 4,
        title: "Site Institucional Avançado",
        priceRange: "600.000 – 1.200.000 AOA",
        includes: [
            "Até 10 páginas.",
            "Design customizado, SEO básico.",
            "Integração com redes sociais, formulários.",
        ],
        factors: [
            "SEO mais avançado.",
            "Requisição de painel administrativo.",
            "Integração com chatbots ou ferramentas como Google Analytics.",
        ],
    },
    {
        level: 5,
        title: "E-commerce Básico",
        priceRange: "1.200.000 – 2.500.000 AOA",
        includes: [
            "Loja com até 20 produtos.",
            "Checkout simples com PayPal/MPesa.",
            "Tema pronto.",
        ],
        factors: [
            "Quantidade de produtos (catálogo maior).",
            "Integração com gateways locais.",
            "Logística (cálculo de frete, estoque).",
        ],
    },
    {
        level: 6,
        title: "E-commerce Personalizado",
        priceRange: "2.500.000 – 5.000.000 AOA",
        includes: [
            "Design exclusivo.",
            "Carrinho customizado.",
            "Gateways angolanos como Pagar.me, BancoSol.",
        ],
        factors: [
            "Necessidade de painel de gestão de estoque.",
            "Variação de preço por produto/tamanho.",
            "Responsividade + versões para desktop/mobile refinadas.",
        ],
    },
    {
        level: 7,
        title: "Aplicação Web (Frontend)",
        priceRange: "5.000.000 – 8.000.000 AOA",
        includes: [
            "SPA (React, Vue).",
            "Autenticação de usuário.",
            "Dashboard e conexão com API externa.",
        ],
        factors: [
            "Quantidade de rotas/telas.",
            "Nível de interatividade nos componentes.",
            "Segurança (login com verificação 2FA, etc.).",
        ],
    },
    {
        level: 8,
        title: "Aplicação Fullstack",
        priceRange: "8.000.000 – 15.000.000 AOA",
        includes: [
            "Frontend + Backend.",
            "Exemplo: mini rede social, ERP.",
            "Banco de dados, autenticação, painel administrativo.",
        ],
        factors: [
            "Escalabilidade exigida.",
            "Tipo de backend (Node, Laravel, Django...).",
            "Integrações com serviços externos.",
        ],
    },
    {
        level: 9,
        title: "Plataforma Complexa",
        priceRange: "15.000.000 – 30.000.000 AOA",
        includes: [
            "SaaS com múltiplos usuários.",
            "Planos pagos, dashboards avançados.",
            "Escalabilidade e segurança de alto nível.",
        ],
        factors: [
            "Gestão de assinaturas e faturas.",
            "Análises em tempo real.",
            "Suporte a múltiplos idiomas e moedas.",
        ],
    },
    {
        level: 10,
        title: "Sistema Empresarial",
        priceRange: "30.000.000+ AOA",
        includes: [
            "Solução personalizada para grandes empresas.",
            "Ex: banco, seguradora, logística, hospital.",
            "Integração com sistemas internos e protocolos de segurança.",
        ],
        factors: [
            "Requisitos de compliance (ex.: LGPD, segurança bancária).",
            "Infraestrutura robusta (AWS, servidores dedicados).",
            "Equipe de suporte e manutenção técnica incluída.",
        ],
    },
];

export default function PriceTable() {
    const [showAll, setShowAll] = useState(false);

    // Se não estiver mostrando tudo e a tela for pequena, mostrar só 3 cards
    // Aqui assumimos que sempre mostra 3 ou todos — o controle da responsividade fica no CSS
    const displayedCards = showAll ? priceLevels : priceLevels.slice(0, 3);

    return (
        <div className="max-w-7xl mx-auto p-6 font-inter text-gray-100 bg-black/50 backdrop-blur-md shadow-lg my-32 min-h-screen">
            <motion.h1
                className="text-4xl font-orbitron text-indigo-400 mb-12 text-center py-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Tabela de Preços por Nível de Complexidade – Detalhada
            </motion.h1>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                {displayedCards.map(({ level, title, priceRange, includes, factors }, index) => (
                    <motion.div
                        key={level}
                        className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col hover:scale-[1.03] transition-transform duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "easeOut",
                        }}
                    >
                        <h2 className="text-indigo-300 font-orbitron text-xl mb-2">
                            Nível {level} - {title}
                        </h2>
                        <p className="text-indigo-500 font-mono font-semibold mb-4">
                            {priceRange}
                        </p>

                        <div className="mb-4 flex-grow">
                            <h3 className="font-bold text-lg mb-1 text-gray-300">Inclui:</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                {includes.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-1 text-gray-400">
                                Fatores que fazem o preço variar:
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                                {factors.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Botão Ver Mais / Ver Menos */}
            <div className="flex justify-center mt-8">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAll(!showAll)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
                >
                    {showAll ? "Ver menos" : "Ver mais"}
                </motion.button>
            </div>
        </div>
    );
}
