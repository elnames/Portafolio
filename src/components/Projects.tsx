'use client'

import { motion } from 'framer-motion'
import GlassCard from './ui/GlassCard'

interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  url?: string
  status?: 'live' | 'in-progress' | 'personal'
  featured?: boolean
  accent: 'blue' | 'violet' | 'emerald' | 'amber'
}

const projects: Project[] = [
  {
    id: 'speedrun-delivery',
    title: 'Speedrun Delivery',
    description:
      'Plataforma de logística de alto rendimiento con tracking en tiempo real.',
    longDescription:
      'Sistema completo de delivery de bicicletas con roles de cliente, courier y admin. Seguimiento en tiempo real vía WebSockets, gestión de órdenes, evidencias fotográficas y dashboard de administración.',
    tags: ['Next.js', 'NestJS', 'WebSockets', 'TypeScript', 'Docker'],
    url: 'https://speedrun.nmsdev.tech',
    status: 'live',
    featured: true,
    accent: 'violet',
  },
  {
    id: 'portalti',
    title: 'PortalTI',
    description:
      'Sistema de gestión de activos TI, usuarios, tickets de soporte y documentación empresarial.',
    longDescription:
      'Aplicación web para gestión integral de TI: activos, usuarios, tickets de soporte y documentación. Construida con React 18 y ASP.NET Core 8, pensada para empresas que necesitan control total de su infraestructura tecnológica.',
    tags: ['React 18', 'ASP.NET Core 8', 'JavaScript', 'SQL Server'],
    status: 'live',
    featured: true,
    accent: 'blue',
  },
  {
    id: 'finance-pro',
    title: 'Finance Pro',
    description: 'Dashboard de gestión financiera personal con seguimiento de gastos y presupuesto.',
    tags: ['Next.js', 'NestJS', 'Prisma', 'Docker'],
    url: 'https://finance.nmsdev.tech',
    status: 'live',
    accent: 'emerald',
  },
  {
    id: 'celiapp',
    title: 'CeliApp',
    description:
      'App móvil que ayuda a personas celíacas a encontrar productos y tiendas libres de gluten.',
    tags: ['Flutter', 'Dart', 'Supabase', 'Mobile'],
    status: 'live',
    accent: 'amber',
  },
]

const accentStyles = {
  blue: {
    tag: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]',
    dot: 'bg-blue-400',
    badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    gradient: 'from-blue-500/10 to-transparent',
  },
  violet: {
    tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    glow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]',
    dot: 'bg-violet-400',
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    gradient: 'from-violet-500/10 to-transparent',
  },
  emerald: {
    tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    glow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]',
    dot: 'bg-emerald-400',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    gradient: 'from-emerald-500/10 to-transparent',
  },
  amber: {
    tag: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    glow: 'hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]',
    dot: 'bg-amber-400',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    gradient: 'from-amber-500/10 to-transparent',
  },
}

const statusLabels = {
  live: 'En producción',
  'in-progress': 'En desarrollo',
  personal: 'Personal',
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
}

interface ProjectCardProps {
  project: Project
  large?: boolean
}

function ProjectCard({ project, large = false }: ProjectCardProps) {
  const styles = accentStyles[project.accent]

  return (
    <motion.div variants={cardVariants} className="h-full">
      <GlassCard
        className={`relative overflow-hidden h-full flex flex-col bento-card group transition-all duration-300 border border-white/[0.08] ${styles.glow} ${large ? 'p-7 sm:p-8' : 'p-6'}`}
      >
        {/* Top gradient decoration */}
        <div
          className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${styles.gradient} opacity-60 pointer-events-none`}
        />

        {/* Corner grid decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-4 h-full">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-1.5">
              {/* Status badge */}
              {project.status && (
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${styles.dot} animate-pulse`}
                  />
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border ${styles.badge}`}
                  >
                    {statusLabels[project.status]}
                  </span>
                </div>
              )}
              <h3
                className={`font-heading font-bold text-white group-hover:text-white/90 transition-colors ${large ? 'text-2xl' : 'text-lg'}`}
              >
                {project.title}
              </h3>
            </div>

            {/* External link */}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-gray-500 hover:text-white hover:bg-white/[0.1] hover:border-white/20 transition-all"
                aria-label={`Open ${project.title}`}
              >
                <ExternalLinkIcon />
              </a>
            )}
          </div>

          {/* Description */}
          <p className={`text-gray-400 leading-relaxed ${large ? 'text-base' : 'text-sm'}`}>
            {large && project.longDescription
              ? project.longDescription
              : project.description}
          </p>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-1 rounded-md text-xs font-mono border ${styles.tag}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}

export default function Projects() {
  const [featured, small] = [
    projects.filter((p) => p.featured),
    projects.filter((p) => !p.featured),
  ]

  return (
    <section id="projects" className="relative py-24 sm:py-32">
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
          <p className="section-label mb-3">Proyectos</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Lo que hemos{' '}
            <span className="gradient-text">construido</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl">
            Soluciones fullstack en producción, desde el diseño hasta el deploy.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
        >
          {/* Featured large cards */}
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} large />
          ))}

          {/* Small cards */}
          {small.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
