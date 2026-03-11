import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mind Digital | Bio Site",
  description: "Copie e Cole esse sistema feito com Ia e descubra como pessoas comuns estão faturando no digital sem aparecer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.className} antialiased min-h-screen relative selection:bg-white/20 selection:text-white`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
