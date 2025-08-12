import type { Icons } from '@/global/icons'

export type IconifyProps = {
  icon: Icons
  size?: number
  color?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'default'
    | 'slate'
    | 'gray'
    | 'zinc'
    | 'neutral'
    | 'stone'
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose'
    | 'foreground'
    | 'white'
    | 'black'
  className?: string
}

export const iconifyColorMap: Record<string, string> = {
  primary: 'text-primary-500',
  secondary: 'text-secondary-500 dark:text-secondary-400',
  danger: 'text-danger-500 dark:text-danger-400',
  warning: 'text-warning-500',
  success: 'text-success-500',
  default: 'text-default-500 dark:text-default-600',
  slate: 'text-slate-500',
  gray: 'text-gray-600 dark:text-gray-400',
  zinc: 'text-zinc-500',
  neutral: 'text-neutral-500',
  stone: 'text-stone-500',
  red: 'text-red-500',
  orange: 'text-orange-500',
  amber: 'text-amber-500',
  yellow: 'text-yellow-500',
  lime: 'text-lime-500',
  green: 'text-green-500',
  emerald: 'text-emerald-500',
  teal: 'text-teal-500',
  cyan: 'text-cyan-500',
  sky: 'text-sky-500',
  blue: 'text-blue-500',
  indigo: 'text-indigo-500',
  violet: 'text-violet-500',
  purple: 'text-purple-500',
  fuchsia: 'text-fuchsia-500',
  pink: 'text-pink-500',
  rose: 'text-rose-500',
  foreground: 'text-default-500 dark:text-default-600',
  white: 'text-white',
  black: 'text-black',
}
