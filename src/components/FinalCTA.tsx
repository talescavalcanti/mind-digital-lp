"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


export function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const btnRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })

      gsap.from(descRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })

      gsap.from(btnRef.current, {
        y: 20,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        delay: 0.3,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="w-full flex flex-col items-center py-10 px-6">
      <h3 ref={headingRef} className="text-2xl md:text-3xl font-bold text-white mb-4 text-center tracking-tight">
        Pronto para <span className="text-[#00c853]">automatizar</span> suas vendas? 🚀
      </h3>
      <p ref={descRef} className="text-white/50 text-base mb-8 text-center max-w-md">
        Assista à apresentação completa e descubra como o método VDA pode transformar seus resultados.
      </p>
      <a
        ref={btnRef}
        href="https://checkout.applyfy.com.br/ref/cmkju6a2l0520mz1rcz4yb6u9"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center gap-2 bg-white text-black py-4 px-10 rounded-xl font-extrabold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden hover:scale-[1.02] active:scale-[0.98]"
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        <span>QUERO COMEÇAR AGORA</span>
      </a>

      <div className="w-full h-px bg-white/5 my-10" />

    </div>
  )
}
