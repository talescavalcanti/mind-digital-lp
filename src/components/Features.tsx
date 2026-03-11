"use client"

import React, { useRef, useState, useEffect } from "react"
import { Clock, TrendingUp, Bot, MessageCircle } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.08), transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}

const features = [
  {
    title: "Vendas no Automático",
    description: "Sua estrutura roda 24h por dia atraindo e fechando leads, enquanto você tem tempo livre.",
    icon: TrendingUp,
  },
  {
    title: "Automação Humanizada",
    description: "Envie áudios como se fossem gravados na hora usando IA. O cliente nunca saberá que é um robô.",
    icon: MessageCircle,
  },
  {
    title: "Fim da Sobrecarga",
    description: "Chega de perder horas respondendo manualmente no WhatsApp. A Máquina de Vendas faz o trabalho pesado.",
    icon: Clock,
  },
  {
    title: "Tráfego para IA",
    description: "Aprenda a criar anúncios que levam leads qualificados direto para o seu funil de conversão automático.",
    icon: Bot,
  },
]

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animate Header
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      })

      // Stacking Cards Logic Custom logic using Trigger Scrub and Sticky Position
      const cards = cardsRef.current;
      cards.forEach((card, index) => {
        if (!card) return;

        // Animate all cards except the last one out of sequence
        if (index < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 20%",
            endTrigger: cards[index + 1],
            end: "top 20%",
            scrub: true,
            animation: gsap.to(card, {
              scale: 0.9 - (0.02 * (cards.length - index)), 
              opacity: 0.3,
              y: -20, // subtle upward movement push
              ease: "none"
            })
          });
        }
      });
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full relative z-10 pt-0 pb-[30vh]">
      {/* Smooth gradient transition from MacbookScrollDemo */}
      <div className="w-full h-40 bg-gradient-to-b from-black to-transparent" />
      <div className="max-w-5xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16 opacity-100">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Por que a Máquina de Vendas <span className="text-[#00c853]">VDA</span>? 💸
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            O método definitivo para quem quer resultados no digital sem precisar aparecer ou ser escravo do celular. 💰
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:gap-24 relative w-full items-center">
          {features.map((feat, index) => (
            <div 
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="sticky top-[20%] w-full max-w-4xl origin-top"
            >
              <SpotlightCard className="glass p-8 md:p-12 rounded-3xl h-full w-full border-t border-t-[#C5A059]/20 hover:border-t-[#2BB673]/40 bg-[#111]">
                <div className="relative z-10 flex flex-col justify-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C5A059]/10 to-[#2BB673]/10 border border-[#C5A059]/30 rounded-2xl flex items-center justify-center mb-6 text-white transition-all">
                    <feat.icon className="w-6 h-6 text-[#C5A059] transition-colors" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{feat.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed font-medium">
                    {feat.description}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
