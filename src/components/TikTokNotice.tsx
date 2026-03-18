import { motion } from "framer-motion"
import { ExternalLink, Smartphone, AlertCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { isTikTokBrowser } from "@/lib/tiktok"

export function TikTokNotice() {
  const [isTikTok, setIsTikTok] = useState(false)

  useEffect(() => {
    setIsTikTok(isTikTokBrowser())
  }, [])

  if (!isTikTok) return <div id="tiktok-notice" className="sr-only" />

  return (
    <section
      id="tiktok-notice"
      className="w-full py-16 px-4 bg-gradient-to-b from-transparent to-white/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden"
      >
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-[#00c853]/10 rounded-full blur-[80px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
            <Smartphone className="w-8 h-8 text-[#00c853]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Atenção usuários do <span className="text-[#fe2c55]">TikTok</span> ⚠️
          </h2>

          <p className="text-white/70 text-lg mb-8 max-w-2xl">
            Parece que você está acessando pelo navegador interno do TikTok. Para garantir que você abra o link corretamente e com segurança, siga os passos abaixo:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left mb-10">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00c853] text-black text-xs font-bold">1</span>
                <span className="font-bold text-white">Clique nos três pontos (...)</span>
              </div>
              <p className="text-sm text-white/50">Toque no ícone de três pontos no canto superior direito da sua tela.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00c853] text-black text-xs font-bold">2</span>
                <span className="font-bold text-white">Abrir no Navegador</span>
              </div>
              <p className="text-sm text-white/50">Selecione a opção "Abrir no Navegador" ou "Abrir no Safari/Chrome".</p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8">
            <AlertCircle className="w-4 h-4" />
            Navegadores internos podem bloquear o acesso a links externos.
          </div>

          <a
            href="https://checkout.applyfy.com.br/ref/cmkju6a2l0520mz1rcz4yb6u9"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-2 bg-white text-black py-4 px-10 rounded-xl font-extrabold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span>TENTAR LINK DIRETO</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
