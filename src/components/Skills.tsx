'use client'

import { motion } from 'framer-motion'
import InfiniteMarquee from './ui/InfiniteMarquee'
import GlassCard from './ui/GlassCard'

const row1 = [
  { label: 'Next.js', icon: '▲' },
  { label: 'React', icon: '⚛' },
  { label: 'TypeScript', icon: 'TS' },
  { label: 'NestJS', icon: '🏠' },
  { label: 'Node.js', icon: '⬡' },
  { label: 'Python', icon: '🐍' },
  { label: 'Prisma', icon: '◆' },
  { label: 'PostgreSQL', icon: '🐘' },
  { label: 'Supabase', icon: '⚡' },
  { label: 'ASP.NET Core', icon: '🔵' },
]

const row2 = [
  { label: 'Docker', icon: '🐳' },
  { label: 'Nginx', icon: '🔷' },
  { label: 'Linux', icon: '🐧' },
  { label: 'AWS', icon: '☁' },
  { label: 'GCP', icon: '🌐' },
  { label: 'Cloudflare', icon: '🛡' },
  { label: 'Tailwind CSS', icon: '💨' },
  { label: 'Flutter', icon: '📱' },
  { label: 'Git', icon: '🌿' },
  { label: 'JWT Auth', icon: '🔑' },
]

const competencies = [
  {
    title: 'Frontend de Alta Fidelidad',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    description:
      'Interfaces premium con Next.js, React y Tailwind. Animaciones con Framer Motion y diseño responsivo pixel-perfect para cada cliente.',
    skills: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    accent: 'blue',
  },
  {
    title: 'Backend Robusto',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    ),
    description:
      'APIs escalables con NestJS y Prisma. Autenticación JWT, WebSockets en tiempo real y arquitecturas modulares.',
    skills: ['NestJS', 'Prisma', 'REST APIs', 'JWT', 'WebSockets'],
    accent: 'violet',
  },
  {
    title: 'DevOps & Deploy',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
    description:
      'Contenedores Docker, reverse proxy con Nginx y tunneling con Cloudflare. Gestionamos la infraestructura completa en producción.',
    skills: ['Docker', 'Nginx', 'Cloudflare', 'Linux', 'CI/CD'],
    accent: 'emerald',
  },
]

const accentMap = {
  blue: {
    icon: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    skill: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  },
  violet: {
    icon: 'text-violet-400',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    skill: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  },
  emerald: {
    icon: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    skill: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
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
          <p className="section-label mb-3">Skills</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Tecnologías con las que{' '}
            <span className="gradient-text">trabajo</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl">
            Herramientas y tecnologías que usamos para construir
            productos completos, de principio a fin.
          </p>
        </motion.div>

        {/* Marquees */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-3 mb-16"
        >
          <InfiniteMarquee items={row1} direction="left" />
          <InfiniteMarquee items={row2} direction="right" />
        </motion.div>

        {/* Competency cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {competencies.map((comp) => {
            const styles = accentMap[comp.accent as keyof typeof accentMap]
            return (
              <motion.div key={comp.title} variants={itemVariants}>
                <GlassCard hover className="p-6 flex flex-col gap-5 h-full">
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center ${styles.iconBg} ${styles.icon}`}
                  >
                    {comp.icon}
                  </div>

                  {/* Title + description */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading font-bold text-white text-lg">
                      {comp.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {comp.description}
                    </p>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {comp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-md text-xs font-mono border ${styles.skill}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
