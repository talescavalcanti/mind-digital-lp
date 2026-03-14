"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.5 }}
      style={{ left: "50%" }}
      className="fixed top-4 sm:top-6 z-50 flex items-center justify-between gap-4 sm:gap-6 px-4 py-2 sm:py-3 glass rounded-full w-[92%] sm:w-max max-w-sm sm:max-w-none shadow-[0_0_20px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/20 shrink-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://media.bio.site/sites/b6a680f5-7fdc-4c5f-9b5b-f25252ea668e/EeZiasQJHUJbTuzBPd2RvJ.jpg" 
            alt="Mind Digital Logo" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <span className="text-white font-bold tracking-tight text-sm sm:text-base truncate">Mind Digital</span>
      </div>

      <a
        href="https://vsl-minddigital.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-black text-xs sm:text-sm font-bold rounded-full hover:scale-105 transition-transform shrink-0"
      >
        Acesse Aqui
      </a>
    </motion.header>
  )
}
