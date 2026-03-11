"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    { image: "/modulo-façagrana.jpg", text: "Faça Grana" },
    { image: "/modulo-ganhemdolar.jpg", text: "Ganhe em Dólar" },
    { image: "/modulo-trafegopago.jpg", text: "Tráfego Pago" },
    { image: "/modulo-trafegodireto.jpg", text: "Tráfego Direto" },
    { image: "/modulo-viradadechave.jpg", text: "Virada de Chave" },
    { image: "/modulo-trafegoorganico.jpg", text: "Tráfego Orgânico" },
    { image: "/modulo-zonadeconversao.jpg", text: "Zona de Conversão" },
    { image: "/modulo-estrategiaruyter.jpg", text: "Estratégia Ruyter" },
    { image: "/acessoacomunidade.jpg", text: "Acesso à Comunidade" },
];

export default function ModulesCarousel() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const galleryContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(headerRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            gsap.from(galleryContainerRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 50%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full bg-transparent py-16 overflow-hidden z-10">
            <div ref={headerRef} className="text-center mb-8 opacity-100">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Módulos do <span className="text-[#00c853]">Método</span>
                </h2>
                <p className="text-white/60 text-lg mt-3 max-w-2xl mx-auto">
                    Conteúdo completo para transformar seu negócio digital.
                </p>
            </div>
            <div ref={galleryContainerRef} className="w-full h-[500px] md:h-[900px] relative opacity-100">
                <CircularGallery
                    items={moduleItems}
                    bend={1}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    font="bold 16px sans-serif"
                    scrollSpeed={2}
                    scrollEase={0.05}
                />
            </div>
        </section>
    );
}
