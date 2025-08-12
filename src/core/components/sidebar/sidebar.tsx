import { siteConfig } from '@/config/site'
import { Icons } from '@/global/icons'
import { Link } from '@heroui/link'
import { Avatar, Spacer, cn } from '@heroui/react'
import { useLocation } from 'react-router-dom'
import { Button } from '../forms/button/button'
import Iconify from '../iconify/iconify'

const Sidebar = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div className="w-64 flex flex-col bg-content1 rounded-xl p-4 px-2">
      <div className="flex items-center justify-between gap-1 px-2">
        <Link
          className="h-12 w-12 rounded bg-gradient-to-bl from-primary-400 to-primary-100 flex items-center justify-center"
          color="foreground"
          href="/"
        >
          <span>Logo</span>
        </Link>
        <Button isIconOnly startContent={<Iconify icon={Icons.SIDEBAR} />} />
      </div>
      <Spacer y={12} />
      <div className="flex flex-col justify-between flex-1">
        <nav>
          {siteConfig.navItems.map(item => {
            const isActive = currentPath === item.href
            return (
              <Link
                key={item.href}
                className={cn(
                  'text-lg text-opacity-disabled flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:bg-content2 cursor-pointer',
                  {
                    'bg-primary-500/20 text-opacity-100  text-primary-500': isActive,
                  }
                )}
                color="foreground"
                href={item.href}
              >
                <Iconify className={cn(isActive && 'text-primary-500')} icon={item.icon} size={28} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <nav>
          <Link
            className="text-lg text-opacity-disabled flex items-center gap-2 px-3 py-2 rounded-xl transition-colors hover:bg-content2 cursor-pointer"
            color="foreground"
          >
            <Iconify icon={Icons.SETTINGS} size={28} />
            Settings
          </Link>
          <div className="h-[3px] my-1 bg-content3" />
          <div className="flex items-center gap-2 w-full p-2 rounded-xl transition-colors cursor-pointer">
            <Avatar size="md" radius="sm" icon={<Iconify icon={Icons.USER} />} />
            <div className="text-sm flex-1">
              <p className="text-foreground ">Roy Ayala</p>
              <p className="text-foreground text-opacity-disabled">Admin</p>
            </div>
            <Button isIconOnly startContent={<Iconify icon={Icons.LOG_OUT} />} />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
