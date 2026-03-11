"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Clock, TrendingUp, Bot, MessageCircle } from "lucide-react"

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
  return (
    <section className="w-full relative z-10 pt-0">
      {/* Smooth gradient transition from MacbookScrollDemo */}
      <div className="w-full h-40 bg-gradient-to-b from-black to-transparent" />
      <div className="max-w-5xl mx-auto pb-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Por que a Máquina de Vendas <span className="text-vda-gradient">VDA</span>? 💸
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          O método definitivo para quem quer resultados no digital sem precisar aparecer ou ser escravo do celular. 💰
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <SpotlightCard className="glass p-8 rounded-3xl group transition-colors h-full w-full border-t border-t-[#C5A059]/20 hover:border-t-[#2BB673]/40">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#C5A059]/10 to-[#2BB673]/10 border border-[#C5A059]/30 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:border-[#2BB673]/50 transition-all">
                  <feat.icon className="w-6 h-6 text-[#C5A059] group-hover:text-[#2BB673] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2BB673] transition-colors">{feat.title}</h3>
                <p className="text-white/70 leading-relaxed font-medium">
                  {feat.description}
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  )
}
