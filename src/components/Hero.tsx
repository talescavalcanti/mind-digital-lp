"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center px-4 pt-32 pb-4">


      {/* Main Container for Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[800px] mx-auto flex flex-col items-center text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-white/80 mb-6 uppercase tracking-wider backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#2BB673] animate-pulse" />
          MIND DIGITAL APRESENTA
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-2 text-center">
          <span className="text-[#00c853] border-b-2 border-[#2BB673]/30">MÉTODO VDA</span>
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl font-bold text-white/90 tracking-wide mb-6 text-center">
          Venda Direto no Automático💸
        </p>

        <p className="text-sm sm:text-lg leading-relaxed text-white/70 font-medium mb-6 sm:mb-8 px-2 sm:px-0">
          O sistema com IA que me faz vender <span className="text-white font-bold">TODOS OS DIAS</span> no automático e pode te gerar <span className="text-white font-bold">R$500 POR DIA</span> ainda essa semana.
        </p>

        {/* Primary CTA Button */}
        <motion.a
          href="https://checkout.applyfy.com.br/ref/cmkju6a2l0520mz1rcz4yb6u9"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full max-w-[320px] group relative flex items-center justify-center gap-2 bg-white text-black py-4 px-8 rounded-xl font-extrabold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          <span>ASSISTA O VÍDEO</span>
          <CheckCircle2 className="w-5 h-5" />
        </motion.a>

        <p className="text-xs text-white/50 mt-4 flex items-center justify-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-[#2BB673]" /> Assista à apresentação completa e libere a automação
        </p>
      </motion.div>
    </section>
  )
}
