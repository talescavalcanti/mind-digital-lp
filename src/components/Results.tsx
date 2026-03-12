"use client"

import React, { useEffect, useRef } from "react"
import { Star } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Results() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animate Header
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        }
      })

      // Animate Result Cards using a class selector to avoid ref array bugs
      gsap.fromTo(".result-card", 
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%", // try to trigger earlier
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full max-w-5xl mx-auto py-24 px-6 relative z-10">
      <div ref={headerRef} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A059]/30 text-xs font-semibold text-[#C5A059] mb-6 uppercase tracking-wider backdrop-blur-sm">
          <Star className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />
          Resultados Reais
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Pessoas Comuns <span className="text-[#00c853] border-b-2 border-[#2BB673]/30">Faturando Todos os Dias</span> 💵
        </h2>
      </div>

      {/* Professional 3-column layout with centered alignment */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl mx-auto justify-center items-center">
        {[
          "/social-proof/media__1773179066636.png",
          "/social-proof/media__1773179066693.png",
          "/social-proof/media__1773179066706.png"
        ].map((item, index) => (
          <div 
            key={index}
            className="result-card opacity-0 w-full max-w-[300px] rounded-[20px] overflow-hidden group transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 border border-white/10 hover:border-white/20 shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/60"
          >
            <img 
              src={item}
              alt={`Social Proof ${index + 1}`}
              className="block w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
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
