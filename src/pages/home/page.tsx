import DashCard from '@/components/cards/dash-card'
import { siteConfig } from '@/config/site'
import TitleSection from '@/core/components/page/title-section'
import { Icons } from '@/global/icons'
import { Spacer } from '@heroui/react'

export default function DashboardPage() {
  const title = 'Dashboard'
  const description = 'Welcome to the dashboard, here you can see all modules that you have created'
  return (
    <TitleSection title={title} description={description} icon={Icons.DASHBOARD}>
      <h2 className="text-2xl">List of moduless</h2>
      <Spacer y={5} />
      <div className="grid grid-cols-3 gap-5">
        {siteConfig.navItems.map(item => (
          <DashCard key={item.href} title={item.label} description={item.description} icon={item.icon} href={item.href} />
        ))}
      </div>
    </TitleSection>
  )
}
