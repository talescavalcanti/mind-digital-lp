"use client";

import React, { useEffect, useRef } from "react";
import { Typewriter } from "@/components/ui/typewriter-text";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MacbookScrollDemo() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);

            const ctx = gsap.context(() => {
                gsap.from(containerRef.current, {
                    y: 80,
                    opacity: 0,
                    duration: 1.4,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

            return () => ctx.revert();
        }
    }, []);

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden bg-transparent pb-20 pt-24">
            {/* Mobile Alternative - Simple Text */}
            <div className="block sm:hidden pb-16 pt-0 px-4 text-center mt-[-40px]">
                <h2 className="text-2xl font-bold text-white mb-4">
                    Por dentro da área de membros.
                </h2>
                <p className="text-gray-400 text-base mb-6"></p>
                <div className="relative mx-auto max-w-[300px] rounded-xl overflow-hidden border border-white/10">
                    <img
                        src="/macbook-screen.png"
                        alt="Mind Digital Preview"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Desktop MacBook Animation - Hidden on small mobile */}
            <div className="hidden sm:block mt-0">
                <MacbookScroll
                    title={
                        <Typewriter
                            text="Por dentro da área de membros."
                            speed={35}
                            cursor="_"
                            className="inline-block text-white"
                        />
                    }
                    badge={
                        <div className="h-10 w-10 -rotate-12 transform" />
                    }
                    src={`/macbook-screen.png`}
                    showGradient={true}
                />
            </div>
            {/* The Fog: Global Transition Overlay */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-50 h-40 bg-gradient-to-t from-black via-black to-transparent" />
        </div >
    );
}

