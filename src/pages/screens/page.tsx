import TitleSection from '@/core/components/page/title-section'
import { Icons } from '@/global/icons'
import { Spacer } from '@heroui/react'

export default function ScreensPage() {
  const title = 'Screens'
  const description = 'In this page you can create a new screen with the selected template'
  return (
    <TitleSection title={title} description={description} icon={Icons.SCREENS}>
      <h2 className="text-2xl">List of modules</h2>
      <Spacer y={5} />
    </TitleSection>
  )
}
