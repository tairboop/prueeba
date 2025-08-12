import type { NavigateOptions } from 'react-router-dom'

import { ToastProvider } from '@heroui/react'
import { HeroUIProvider } from '@heroui/system'
import type { ReactNode } from 'react'
import { useHref, useNavigate } from 'react-router-dom'
import { ThemeProvider } from './styles/theme/theme-provider'

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NavigateOptions
  }
}

export function Provider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <ThemeProvider>
        <ToastProvider />
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  )
}
