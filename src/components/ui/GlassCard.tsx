'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'strong' | 'subtle'
  hover?: boolean
  glow?: 'blue' | 'violet' | 'none'
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', hover = false, glow = 'none', children, ...props }, ref) => {
    const base = 'rounded-2xl'

    const variants = {
      default:
        'bg-white/[0.04] backdrop-blur-xl border border-white/[0.08]',
      strong:
        'bg-white/[0.07] backdrop-blur-2xl border border-white/[0.12]',
      subtle:
        'bg-white/[0.02] backdrop-blur-lg border border-white/[0.05]',
    }

    const glowStyles = {
      blue: 'shadow-[0_0_30px_rgba(59,130,246,0.15)]',
      violet: 'shadow-[0_0_30px_rgba(139,92,246,0.15)]',
      none: '',
    }

    const hoverStyle = hover
      ? 'transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]'
      : ''

    return (
      <div
        ref={ref}
        className={twMerge(
          clsx(base, variants[variant], glowStyles[glow], hoverStyle),
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassCard.displayName = 'GlassCard'

export default GlassCard
