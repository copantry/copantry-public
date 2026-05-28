import { ChefHat } from 'lucide-react'
import { Link } from 'react-router-dom'

const SIZE = {
  sm:  { icon: 20, text: 'text-lg' },
  md:  { icon: 26, text: 'text-xl' },
  lg:  { icon: 30, text: 'text-2xl' },
  xl:  { icon: 36, text: 'text-[1.875rem]' },
}

export default function Logo({ size = 'md', asLink = true, className = '' }) {
  const { icon, text } = SIZE[size] ?? SIZE.md

  const inner = (
    <span className={`flex items-center gap-2 select-none ${className}`}>
      <ChefHat size={icon} className="text-orange-500 shrink-0" />
      <span
        className={`${text} leading-none text-gray-900`}
        style={{ fontFamily: 'var(--font-logo)', letterSpacing: 'var(--logo-tracking)' }}
      >
        <span style={{ fontWeight: 600 }}>Co</span>
        <span style={{ fontWeight: 400 }}>Pantry</span>
      </span>
    </span>
  )

  if (asLink) {
    return <Link to="/" className="hover:opacity-80 transition-opacity">{inner}</Link>
  }
  return inner
}
