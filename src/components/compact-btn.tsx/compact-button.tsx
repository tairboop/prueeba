import { useBreakpoint } from '@/hooks/useBreakpoint'
import { Button, type ButtonProps } from '@heroui/button'
import { forwardRef } from 'react'

export const CompactButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, children, ...rest } = props
  const { isMobile } = useBreakpoint()

  return (
    <Button ref={ref} className={className} isIconOnly={isMobile} {...rest}>
      {isMobile ? null : children}
    </Button>
  )
})

CompactButton.displayName = 'CompactButton'
