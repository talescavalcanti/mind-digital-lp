"use client"

import React, { useEffect, useRef } from "react"

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    // Adjust these values to control the density and speed of the particles
    const particleCount = 70 // Subtle amount
    const particleSpeed = 0.3 // Very slow, calm movement
    const particleColor = "rgba(255, 255, 255, 0.4)" // Subtle white
    const particleAlphaRange = [0.1, 0.6] // Between 10% and 60% opacity max
    const particleRadiusRange = [0.5, 2] // Small specs of dust/stars

    class Particle {
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      alpha: number
      canvasWidth: number
      canvasHeight: number

      constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        
        // Random size within range
        this.radius = particleRadiusRange[0] + Math.random() * (particleRadiusRange[1] - particleRadiusRange[0])
        
        // Random drift (mostly upwards with slight horizontal sway)
        this.vx = (Math.random() - 0.5) * particleSpeed
        this.vy = -(Math.random() * particleSpeed + 0.1) // Always float up slightly
        
        // Random initial opacity
        this.alpha = particleAlphaRange[0] + Math.random() * (particleAlphaRange[1] - particleAlphaRange[0])
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Wrap around the edges
        if (this.x < 0) this.x = this.canvasWidth
        if (this.x > this.canvasWidth) this.x = 0
        
        // If particle moves off top, respawn at bottom seamlessly
        if (this.y < -10) {
          this.y = this.canvasHeight + 10
          this.x = Math.random() * this.canvasWidth
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`
        ctx.fill()
      }
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height))
      }
    }

    const render = () => {
      // Clear the canvas each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw each particle
      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx)
      })

      animationFrameId = requestAnimationFrame(render)
    }

    const handleResize = () => {
      // Update canvas dimensions to match window
      // Using window dimensions ensure it covers the fixed background properly
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Re-init particles to fit new dimensions
      initParticles()
    }

    // Initial setup
    handleResize()
    
    // Start animation loop
    render()

    // Listen for resize events
    window.addEventListener("resize", handleResize)

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-2]"
      style={{ background: "transparent" }}
    />
  )
}
