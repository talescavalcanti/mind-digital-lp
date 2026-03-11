"use client"

import React, { useEffect, useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const faqs = [
  {
    question: "Preciso aparecer para vender?",
    answer: "Não. A Máquina de Vendas ensina exatamente como criar uma estrutura anônima e persuasiva, utilizando a automação para falar pelo seu produto.",
  },
  {
    question: "O Zapvoice é difícil de configurar?",
    answer: "É extremamente simples. O curso conta com um módulo de configuração passo a passo e nós disponibilizamos os scripts em áudio que usamos para você importar facilmente.",
  },
  {
    question: "Serve para iniciantes?",
    answer: "Sim! Se você nunca fez uma venda na vida ou se já tentou de tudo e se frustrou, esse método te entrega os funis de atração e ferramentas prontos para uso.",
  },
  {
    question: "Como vou receber o meu acesso?",
    answer: "Assim que o pagamento for aprovado, você receberá instantaneamente no seu e-mail cadastrado o link de acesso à área de membros exclusiva com todas as aulas e bônus.",
  },
]

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const faqContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      })

      gsap.from(faqContainerRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full max-w-3xl mx-auto py-24 px-6 relative z-10 mb-20">
      <div ref={headerRef} className="text-center mb-12 opacity-100">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Perguntas Frequentes <span className="text-[#00c853]">VDA</span>
        </h2>
      </div>

      <div ref={faqContainerRef} className="glass p-4 md:p-6 rounded-3xl opacity-100">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
              <AccordionTrigger className="text-white hover:text-white/80 hover:no-underline text-left font-medium text-base sm:text-lg py-3">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/60 font-medium leading-relaxed pb-4 text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
