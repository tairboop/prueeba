import { Table as HeroTable, type TableProps, cn } from '@heroui/react'
import { forwardRef } from 'react'

export const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { className, classNames = {}, ...rest } = props

  return (
    <HeroTable
      ref={ref}
      className={className}
      classNames={{
        ...classNames,
        th: cn('content-blur text-foreground font-bold', classNames?.th),
      }}
      {...rest}
    />
  )
})

Table.displayName = 'Table'
