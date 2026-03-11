"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 z-50 flex items-center gap-6 px-4 py-3 glass rounded-full w-max"
    >
      <div className="flex items-center gap-3 pr-2">
        <Avatar className="w-10 h-10 border border-white/20">
          <AvatarImage src="https://media.bio.site/sites/b6a680f5-7fdc-4c5f-9b5b-f25252ea668e/EeZiasQJHUJbTuzBPd2RvJ.jpg" alt="MJM" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <span className="text-white font-bold tracking-tight">Mind Digital</span>
      </div>

      <a
        href="https://arthur-santos.com/vsl-vda/?code=6x9c4wl&utm_medium=1--oti--oti_j4arvzp196mmkyqlae"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform"
      >
        Acesse Aqui
      </a>
    </motion.header>
  )
}
