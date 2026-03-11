"use client";

import React from "react";
import dynamic from "next/dynamic";

const CircularGallery = dynamic(
    () => import("@/components/ui/circular-gallery"),
    { ssr: false }
);

const moduleItems = [
    { image: "/sejabem-vindo-modulo.jpg", text: "Seja Bem-Vindo" },
    { image: "/mentalidade-modulo.jpg", text: "Mentalidade" },
    { image: "/conhecimentoessencial-modulo.jpg", text: "Conhecimento Essencial" },
    { image: "/anonimato-modulo.jpg", text: "Anonimato" },
    { image: "/sejaumafiliado-modulo.jpg", text: "Seja um Top Afiliado" },
];

export default function ModulesCarousel() {
    return (
        <section className="relative w-full bg-black py-16 overflow-hidden">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Módulos do Método
                </h2>
                <p className="text-white/60 text-lg mt-3 max-w-2xl mx-auto">
                    Conteúdo completo para transformar seu negócio digital.
                </p>
            </div>
            <div className="w-full h-[900px] relative">
                <CircularGallery
                    items={moduleItems}
                    bend={3}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    font="bold 24px sans-serif"
                    scrollSpeed={2}
                    scrollEase={0.05}
                />
            </div>
        </section>
    );
}
