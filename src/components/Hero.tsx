'use client'

import { motion } from 'framer-motion'
import GradientButton from './ui/GradientButton'

const codeLines = [
  { indent: 0, content: 'const company = {', color: 'text-gray-300' },
  { indent: 1, content: "name: 'NMS Tech Group',", color: 'text-blue-400' },
  { indent: 1, content: "founded: 'Aug 2025',", color: 'text-violet-400' },
  { indent: 1, content: "location: 'Santiago, Chile',", color: 'text-gray-400' },
  { indent: 1, content: 'products: [', color: 'text-gray-300' },
  { indent: 2, content: "'Speedrun Delivery',", color: 'text-emerald-400' },
  { indent: 2, content: "'PortalTI', 'Finance Pro',", color: 'text-emerald-400' },
  { indent: 1, content: '],', color: 'text-gray-300' },
  { indent: 1, content: "mission: 'Software que importa',", color: 'text-amber-400' },
  { indent: 1, content: "open: true,", color: 'text-green-400' },
  { indent: 0, content: '}', color: 'text-gray-300' },
]

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb-1 absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.05) 50%, transparent 70%)',
            filter: 'blur(1px)',
          }}
        />
        <div
          className="orb-2 absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.05) 50%, transparent 70%)',
            filter: 'blur(1px)',
          }}
        />
        <div
          className="orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left column — text */}
        <div className="flex flex-col gap-6">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 w-fit"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Aceptando nuevos proyectos
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              Construimos software{' '}
              <span className="gradient-text">que importa</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg text-gray-400 leading-relaxed max-w-lg"
          >
            Empresa de software desde Santiago, Chile. Creamos{' '}
            <span className="text-blue-400 font-medium">Speedrun Delivery</span>,{' '}
            <span className="text-violet-400 font-medium">PortalTI</span>,{' '}
            <span className="text-blue-400 font-medium">Finance Pro</span> y más —
            sistemas fullstack que escalan.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 mt-2"
          >
            <GradientButton
              variant="gradient"
              size="lg"
              onClick={() => handleScroll('#projects')}
              className="font-heading"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              <span>Ver nuestros proyectos</span>
            </GradientButton>

            <GradientButton
              variant="ghost"
              size="lg"
              onClick={() => handleScroll('#contact')}
              className="font-heading"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>Contactar</span>
            </GradientButton>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-2 pt-2"
          >
            {['Next.js 15', 'NestJS', 'TypeScript', 'Docker', 'Prisma'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-gray-400 text-xs font-mono"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* Right column — terminal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
        >
          {/* Glow behind terminal */}
          <div
            className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
            style={{
              background:
                'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3))',
            }}
          />

          {/* Terminal window */}
          <div className="relative terminal-glow rounded-2xl overflow-hidden bg-[#0d0d0d] border border-white/10">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-auto text-xs text-gray-600 font-mono">
                developer.ts
              </span>
            </div>

            {/* Code content */}
            <div className="p-5 font-mono text-sm leading-7 overflow-hidden">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.07 }}
                  className="flex"
                >
                  <span className="w-6 text-gray-700 text-xs select-none mr-4 text-right flex-shrink-0">
                    {i + 1}
                  </span>
                  <span
                    className={line.color}
                    style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                  >
                    {line.content}
                  </span>
                </motion.div>
              ))}

              {/* Blinking cursor line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="flex mt-1"
              >
                <span className="w-6 text-gray-700 text-xs select-none mr-4 text-right flex-shrink-0">
                  {codeLines.length + 1}
                </span>
                <span className="text-blue-400">
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1.1 }}
                    className="inline-block w-2 h-4 bg-blue-400 align-middle"
                  />
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => handleScroll('#about')}
        role="button"
        aria-label="Scroll to about section"
      >
        <span className="text-xs text-gray-600 tracking-widest uppercase font-mono">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-5 text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
