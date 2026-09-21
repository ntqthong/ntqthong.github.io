import { useEffect, useRef } from 'react'
import './Background.css'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  targetAlpha: number
  color: string
}

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = window.innerWidth
    let height = window.innerHeight
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    // Google 4-color signature palette: Blue, Red, Yellow, Green
    const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853']
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const maxDistance = 130
    const mouseRadius = 160

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    resize()

    // Responsive particle count (approx 1 per 22k pixels, clamped between 25 and 70)
    const particleCount = Math.min(Math.max(Math.floor((width * height) / 22000), 25), 70)
    const particles: Particle[] = []

    const baseSpeed = isReducedMotion ? 0.08 : 0.4

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * baseSpeed,
        vy: (Math.random() - 0.5) * baseSpeed,
        radius: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.4 + 0.2,
        targetAlpha: Math.random() * 0.4 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const mouse = { x: -1000, y: -1000, active: false }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }

    const onMouseLeave = () => {
      mouse.active = false
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', resize)

    let isVisible = true
    const onVisibilityChange = () => {
      isVisible = !document.hidden
      if (isVisible) {
        animationFrameId = requestAnimationFrame(loop)
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    const loop = () => {
      if (!isVisible) return

      ctx.clearRect(0, 0, width, height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy

        // Wrap around viewport edges
        if (p.x < -15) p.x = width + 15
        else if (p.x > width + 15) p.x = -15
        if (p.y < -15) p.y = height + 15
        else if (p.y > height + 15) p.y = -15

        // Mouse connection
        if (mouse.active) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy)
          if (dist < mouseRadius) {
            const mouseAlpha = (1 - dist / mouseRadius) * 0.35
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(66, 133, 244, ${mouseAlpha})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }

        // Draw particle node
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
        ctx.globalAlpha = 1

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.hypot(dx, dy)

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.16
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(168, 199, 250, ${lineAlpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  return <canvas ref={canvasRef} className="animated-background-canvas" aria-hidden="true" />
}

export default Background
