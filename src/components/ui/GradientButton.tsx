'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gradient' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  (
    {
      className,
      variant = 'gradient',
      size = 'md',
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const base =
      'relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 disabled:opacity-60 disabled:cursor-not-allowed'

    const variants = {
      gradient:
        'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]',
      ghost:
        'bg-transparent text-gray-100 border border-white/20 hover:bg-white/[0.06] hover:border-white/30 active:scale-[0.98]',
      outline:
        'bg-transparent text-blue-400 border border-blue-500/40 hover:bg-blue-500/10 hover:border-blue-500/60 active:scale-[0.98]',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={twMerge(clsx(base, sizes[size], variants[variant]), className)}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span>Enviando...</span>
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

GradientButton.displayName = 'GradientButton'

export default GradientButton
