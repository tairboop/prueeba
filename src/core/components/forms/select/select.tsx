import { Select as HeroSelect, type SelectProps, cn } from '@heroui/react'
import { forwardRef } from 'react'

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, classNames = {}, ...props }, ref) => {
  return (
    <HeroSelect
      ref={ref}
      className={className}
      classNames={{
        ...classNames,
        trigger: cn('content-blur', classNames?.trigger),
        popoverContent: cn('popover-blur', classNames?.popoverContent),
      }}
      {...props}
    />
  )
})

Select.displayName = 'Select'
