'use client'

interface MarqueeItem {
  label: string
  icon?: string
}

interface InfiniteMarqueeProps {
  items: MarqueeItem[]
  direction?: 'left' | 'right'
  speed?: 'slow' | 'normal' | 'fast'
  className?: string
}

export default function InfiniteMarquee({
  items,
  direction = 'left',
  speed = 'normal',
  className = '',
}: InfiniteMarqueeProps) {
  const durations = { slow: '45s', normal: '35s', fast: '20s' }
  const duration = durations[speed]

  // Duplicate items for seamless loop
  const doubled = [...items, ...items]

  const animationStyle =
    direction === 'left'
      ? {
          animation: `marquee ${duration} linear infinite`,
        }
      : {
          animation: `marquee-reverse ${duration} linear infinite`,
        }

  return (
    <div
      className={`overflow-hidden marquee-container ${className}`}
      aria-hidden="true"
    >
      <div className="flex" style={animationStyle}>
        {doubled.map((item, index) => (
          <span
            key={index}
            className="skill-badge inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 mr-3 flex-shrink-0"
          >
            {item.icon && (
              <span className="text-base leading-none">{item.icon}</span>
            )}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
