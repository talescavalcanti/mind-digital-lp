"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<"loading" | "reveal">("loading")

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const interval = 20 // 20ms steps
    const steps = duration / interval
    let step = 0

    const timer = setInterval(() => {
      step++
      setProgress(Math.min(100, Math.floor((step / steps) * 100)))
      if (step >= steps) {
        clearInterval(timer)
        // Pequena pausa do 100% antes de revelar
        setTimeout(() => setPhase("reveal"), 400)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (phase === "reveal") {
      // Começa a transição e avisa o pai para montar o site
      onComplete()
    }
  }, [phase, onComplete])

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={phase === "reveal" ? { y: "-100vh" } : { y: 0 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} // Apple-like smooth bezier
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black rounded-b-[10vh] border-b border-white/10"
    >
      <div className="flex flex-col items-center -translate-y-10">
        <motion.div 
          animate={phase === "reveal" ? { scale: 0.5, opacity: 0, y: 100 } : { scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "anticipate" }}
          className="relative z-10 rounded-full overflow-hidden border border-white/20 w-32 h-32 mb-8 shadow-[0_0_50px_rgba(197,160,89,0.3)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://media.bio.site/sites/b6a680f5-7fdc-4c5f-9b5b-f25252ea668e/EeZiasQJHUJbTuzBPd2RvJ.jpg" 
            alt="Loading Logo" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="h-24 flex items-center justify-center">
          <AnimatePresence>
            {phase === "loading" && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)", scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="text-6xl sm:text-7xl font-extrabold text-vda-gradient tabular-nums tracking-tighter"
              >
                {progress}%
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
