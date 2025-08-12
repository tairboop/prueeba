import type { Icons } from '@/global/icons'
import type { ReactNode } from 'react'
import Iconify from '../iconify/iconify'

type Props = {
  title: string
  description: string
  icon: Icons
  children: ReactNode
}

export default function TitleSection({ title, description, icon, children }: Props) {
  return (
    <div className="flex-1 h-full flex flex-col justify-center gap-3">
      <div className="rounded-md p-6 flex flex-col gap-2">
        <div className="flex itecems-center gap-2">
          <Iconify icon={icon} size={30} />
          <h1 className="text-foreground text-2xl font-bold">{title}</h1>
        </div>
        <p className="text-foreground text-opacity-50 text-sm">{description}</p>
      </div>
      <div className="flex-1 w-full bg-gradient rounded-md overflow-y-auto p-6">{children}</div>
    </div>
  )
}
