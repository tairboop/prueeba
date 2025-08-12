import Iconify from '@/core/components/iconify/iconify'
import type { Icons } from '@/global/icons'
import { Spacer } from '@heroui/react'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  icon: Icons
  href: string
}

export default function DashCard({ title, description, icon, href }: Props) {
  return (
    <Link to={href} className="hover:!bg-content2 content-blur transition-colors duration-300 hover:cursor-pointer min-h-40 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <p>{title}</p>
        <Iconify className="border rounded-full p-1 text-foreground text-opacity-60 border-foreground border-opacity-60" icon={icon} />
      </div>
      <p className="text-sm text-foreground text-opacity-60">{description}</p>
      <Spacer y={3} />
      <div className="relative w-full h-36 bg-gray-200 rounded-lg overflow-hidden">
        <img className="w-full h-full object-cover object-center" alt="Module 1" src="https://nipsedu.com/img/ma-1.jpg" />
      </div>
    </Link>
  )
}
