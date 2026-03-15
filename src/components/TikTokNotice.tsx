"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, MoreVertical, ExternalLink } from "lucide-react"

export function TikTokNotice() {
  const [isTikTok, setIsTikTok] = useState(false)

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase()
    const isTikTokUA = ua.includes("tiktok") || ua.includes("bytedancewebview") || ua.includes("musical_ly")
    setIsTikTok(isTikTokUA)
  }, [])

  return (
    <AnimatePresence>
      {isTikTok && (
        <motion.div
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          className="w-full max-w-[600px] mt-2 overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl shadow-black/50 relative"
        >
          <div className="bg-[#2BB673]/20 px-4 py-3 flex items-center gap-3 border-b border-white/5">
            <AlertCircle className="w-5 h-5 text-[#2BB673]" />
            <span className="text-sm font-bold text-white tracking-wide uppercase text-left">
              ATENÇÃO: Caso o vídeo não Abra siga esses passos 🚨
            </span>
          </div>
          
          <div className="p-5 flex flex-col gap-4">
            <div className="flex items-start gap-4 group">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/5 text-white font-bold text-sm">
                1
              </div>
              <div className="flex flex-col gap-1 text-left">
                <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed">
                  Clique nos <span className="text-white font-extrabold underline decoration-[#2BB673]/50">3 pontinhos</span> no canto superior direito
                </p>
                <div className="mt-1 flex items-center gap-2 text-white/40 text-xs">
                  <MoreVertical className="w-3 h-3" />
                  <span>Menu do TikTok</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/5 text-white font-bold text-sm">
                2
              </div>
              <div className="flex flex-col gap-1 text-left">
                <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed">
                  E selecione <span className="text-white font-extrabold underline decoration-[#2BB673]/50">Abra no navegador</span>
                </p>
                <div className="mt-1 flex items-center gap-2 text-white/40 text-xs">
                  <ExternalLink className="w-3 h-3" />
                  <span>Navegador Externo</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual indicator of the dots position */}
          <div className="absolute top-2 right-4 -z-10 opacity-20 hidden sm:block">
            <div className="animate-pulse">
               <MoreVertical className="w-8 h-8 text-[#2BB673]" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
