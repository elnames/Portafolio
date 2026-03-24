'use client'

import { motion } from 'framer-motion'
import GlassCard from './ui/GlassCard'

const stats = [
  { number: '2025', label: 'Fundada en Santiago', icon: '📍' },
  { number: '4+', label: 'Productos en producción', icon: '🚀' },
  { number: '100%', label: 'Ciclo completo propio', icon: '⚡' },
  { number: 'SCL', label: 'Base de operaciones', icon: '🌎' },
]

const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Desarrollo Fullstack',
    description: 'Frontend con Next.js y React, backend con NestJS y ASP.NET Core. Un solo equipo, stack cohesionado de punta a punta.',
    accent: 'text-blue-400',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/[0.06]',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" x2="12" y1="22.08" y2="12" />
      </svg>
    ),
    title: 'Infraestructura & DevOps',
    description: 'Docker, Nginx, Cloudflare Tunnel y servidores propios. Desplegamos, mantenemos y escalamos sin depender de terceros.',
    accent: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/[0.06]',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 2 7l10 5 10-5-10-5z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
    title: 'Productos Propios',
    description: 'No solo desarrollamos para clientes — creamos y operamos nuestros propios productos: Speedrun Delivery, Finance Pro, CeliApp.',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/[0.06]',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Sobre nosotros</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Quiénes{' '}
            <span className="gradient-text">somos</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl">
            Una empresa de software fundada en Santiago, Chile, comprometida con construir productos que funcionan de verdad.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — identity + bio + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Company identity card */}
            <GlassCard className="relative overflow-hidden p-6 flex flex-col gap-5">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(59,130,246,0.07) 0%, rgba(139,92,246,0.07) 60%, transparent 100%)',
                }}
              />
              <div className="absolute top-0 right-0 w-32 h-32 grid-pattern opacity-20 pointer-events-none" />

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-xl gradient-text">nms</span>
                </div>
                <div>
                  <p className="text-white font-semibold font-heading text-lg">NMS Tech Group</p>
                  <p className="text-gray-500 text-sm">nmsdev.tech · Santiago, Chile</p>
                </div>
              </div>

              {/* Mission statement */}
              <div className="relative z-10 border-t border-white/[0.06] pt-5">
                <p className="text-xs text-blue-400 font-semibold tracking-wider uppercase mb-2">Nuestra misión</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Crear software que resuelve problemas reales. Desde la arquitectura hasta el servidor en producción, somos responsables del ciclo completo.
                </p>
              </div>

              {/* Tags */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {['Fundada Ago 2025', 'Open to work', 'Full-cycle team'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Bio */}
            <div className="flex flex-col gap-4">
              <p className="text-gray-300 leading-relaxed text-base">
                <span className="text-white font-medium">NMS Tech Group</span> es una empresa de desarrollo de software con sede en Santiago, Chile. Trabajamos con empresas y emprendedores para construir productos digitales robustos, escalables y listos para producción.
              </p>
              <p className="text-gray-400 leading-relaxed text-base">
                También operamos nuestros propios productos:{' '}
                <span className="text-violet-400 font-medium">Speedrun Delivery</span>,{' '}
                <span className="text-blue-400 font-medium">PortalTI</span>,{' '}
                <span className="text-emerald-400 font-medium">Finance Pro</span> y{' '}
                <span className="text-amber-400 font-medium">CeliApp</span> — sistemas fullstack que construimos, desplegamos y mantenemos.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-shadow text-sm font-semibold"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Trabajemos juntos
                </a>
                <a
                  href="mailto:contacto@nmsdev.tech"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all text-sm font-medium"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  contacto@nmsdev.tech
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — stats + pillars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={itemVariants}>
                  <GlassCard hover className="p-5 flex flex-col gap-2 h-full">
                    <span className="text-xl" role="img" aria-label={stat.label}>
                      {stat.icon}
                    </span>
                    <span className="stat-number text-3xl sm:text-4xl">
                      {stat.number}
                    </span>
                    <span className="text-gray-400 text-xs leading-snug">
                      {stat.label}
                    </span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Pillars */}
            {pillars.map((pillar) => (
              <motion.div key={pillar.title} variants={itemVariants}>
                <GlassCard hover className={`p-5 border ${pillar.border} ${pillar.bg}`}>
                  <div className="flex items-start gap-4">
                    <div className={`mt-0.5 flex-shrink-0 ${pillar.accent}`}>
                      {pillar.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className={`font-semibold text-sm text-white`}>{pillar.title}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
