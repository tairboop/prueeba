import { Input as HeroInput, type InputProps } from '@heroui/react'
import { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <HeroInput
      ref={ref}
      className={className}
      classNames={{
        inputWrapper: 'content-blur',
        label: '!text-foreground/60',
      }}
      {...rest}
    />
  )
})

Input.displayName = 'Input'
