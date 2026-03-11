"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

export function Results() {
  return (
    <section className="w-full max-w-5xl mx-auto py-24 px-6 relative z-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A059]/30 text-xs font-semibold text-[#C5A059] mb-6 uppercase tracking-wider backdrop-blur-sm">
          <Star className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />
          Resultados Reais
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Pessoas Comuns <span className="text-vda-gradient border-b-2 border-[#2BB673]/30">Faturando Todos os Dias</span> 💵
        </h2>
      </div>

      {/* Grid for exactly 3 items side-by-side */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto justify-items-center">
        {[
          "/social-proof/media__1773179066636.png",
          "/social-proof/media__1773179066693.png",
          "/social-proof/media__1773179066706.png"
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="h-[500px] w-full max-w-[320px] glass rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center relative"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={item}
              alt={`Social Proof ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500 rounded-2xl"
            />
          </motion.div>
        ))}
      </div>
      
      <div className="w-full text-center mt-12">
        <p className="text-sm text-white/40">
          Junte-se a milhares de alunos que já automatizaram suas vendas.
        </p>
      </div>
    </section>
  )
}
