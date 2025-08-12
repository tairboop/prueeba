import { type ButtonProps, Button as HeroButton, cn } from '@heroui/react'
import { forwardRef } from 'react'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, ...rest } = props

  return <HeroButton ref={ref} className={cn('content-blur', className)} {...rest} />
})

Button.displayName = 'Button'
