"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
  return (
    <section className="w-full max-w-3xl mx-auto py-24 px-6 relative z-10 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Perguntas Frequentes <span className="text-vda-gradient">VDA</span>
        </h2>
      </div>

      <div className="glass p-4 md:p-6 rounded-3xl">
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
