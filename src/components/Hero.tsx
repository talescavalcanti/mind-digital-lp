"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-16 px-4">

      {/* Background Banner */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="https://media.bio.site/sites/b6a680f5-7fdc-4c5f-9b5b-f25252ea668e/NYey6SFYvmgYRfBskZ9hK6.png"
          alt="Hero Banner"
          fill
          priority
          className="object-cover opacity-60 mix-blend-overlay"
        />
        {/* Soft gradient to blend with the rest of the dark page */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
      </div>

      {/* Main Glassmorphic Container for Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[600px] glass p-8 sm:p-10 rounded-3xl flex flex-col items-center text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-white/80 mb-6 uppercase tracking-wider backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#2BB673] animate-pulse" />
          MIND DIGITAL APRESENTA
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white leading-tight">
          <span className="text-vda-gradient border-b-2 border-[#2BB673]/30">VDA</span>, o método que vai mudar a sua vida 💸
        </h1>

        <p className="text-sm sm:text-lg leading-relaxed text-white/70 font-medium mb-6 sm:mb-8 px-2 sm:px-0">
          Aprenda o exato fluxo para atrair, nutrir e fechar leads no automático usando Inteligência Artificial. Sem aparecer e sem sobrecarga. 💰
        </p>

        {/* Primary CTA Button */}
        <motion.a
          href="https://arthur-santos.com/vsl-vda/?code=6x9c4wl&utm_medium=1--oti--oti_j4arvzp196mmkyqlae"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full group relative flex items-center justify-center gap-2 bg-white text-black py-5 px-8 rounded-xl font-extrabold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden"
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
