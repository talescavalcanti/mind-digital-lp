"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import MacbookScrollDemo from "@/components/MacbookScrollDemo"
import ModulesCarousel from "@/components/ModulesCarousel"
import { Features } from "@/components/Features"
import { Results } from "@/components/Results"
import { FAQ } from "@/components/FAQ"
import { Preloader } from "@/components/Preloader"
import { AnimatePresence, motion } from "framer-motion"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <main className="min-h-screen w-full relative flex flex-col items-center overflow-x-hidden">
      
      {/* Background Decorative Elements */}
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none z-[-1]" />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none z-[-1]" />

      {!isLoading && (
        <Navbar />
      )}

      <div className={`w-full flex flex-col items-center transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <MacbookScrollDemo />
        <ModulesCarousel />
        <Features />
        <Results />
        <FAQ />

        {/* Footer */}
        <footer className="w-full py-8 text-center text-white/30 text-xs border-t border-white/5 mt-10">
          <p>© {new Date().getFullYear()} Mind Digital. Todos os direitos reservados.</p>
          <p className="mt-2 text-white/20">Este site não tem afiliação com o Facebook ou qualquer de suas entidades.</p>
        </footer>
      </div>

      <AnimatePresence>
        {isLoading && (
          <Preloader 
            key="preloader" 
            onComplete={() => {
              // Wait for the slide-up animation to finish before removing from DOM
              setTimeout(() => setIsLoading(false), 800)
            }} 
          />
        )}
      </AnimatePresence>
    </main>
  )
}
