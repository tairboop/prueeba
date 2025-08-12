import { cn } from '@heroui/theme'
import { Icon, type IconifyIconHTMLElement } from '@iconify-icon/react'
import { forwardRef, memo } from 'react'
import { type IconifyProps, iconifyColorMap } from './iconify.types'

function normalizeSize(size: number | string) {
  return typeof size === 'number' ? `${size}px` : size
}

const Iconify = forwardRef<IconifyIconHTMLElement, IconifyProps>((props, ref) => {
  const { icon, size = 20, color, className, ...rest } = props

  return (
    <Icon
      ref={ref}
      icon={icon}
      width={normalizeSize(size)}
      height={normalizeSize(size)}
      className={cn('pointer-events-none antialiased align-middle iconify-icon', color && iconifyColorMap[color], className)}
      {...rest}
    />
  )
})

Iconify.displayName = 'Iconify'

export default memo(Iconify)
