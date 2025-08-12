import { Icons } from '@/global/icons'
import { type SwitchProps, useSwitch } from '@heroui/switch'
import { useTheme } from '@heroui/use-theme'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import clsx from 'clsx'
import { type FC, useEffect, useMemo, useState } from 'react'
import Iconify from '../core/components/iconify/iconify'

export interface ThemeSwitchProps {
  className?: string
  classNames?: SwitchProps['classNames']
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className, classNames }) => {
  const [isMounted, setIsMounted] = useState(false)

  const { theme, setTheme } = useTheme()

  const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } = useSwitch({
    isSelected: theme === 'light',
    onChange: () => setTheme(theme === 'light' ? 'dark' : 'light'),
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const icon = useMemo(() => (isSelected ? Icons.MOON : Icons.SUN), [isSelected])

  if (!isMounted) return <div className="w-6 h-6" />

  return (
    <Component
      aria-label={isSelected ? 'Switch to dark mode' : 'Switch to light mode'}
      {...getBaseProps({
        className: clsx('px-px transition-opacity hover:opacity-80 cursor-pointer', className, classNames?.base),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              'w-auto h-auto',
              'bg-transparent',
              'rounded-lg',
              'flex items-center justify-center',
              'group-data-[selected=true]:bg-transparent',
              '!text-default-500',
              'pt-px',
              'px-0',
              'mx-0',
            ],
            classNames?.wrapper
          ),
        })}
      >
        <Iconify className="text-foreground" icon={icon} />
      </div>
    </Component>
  )
}
