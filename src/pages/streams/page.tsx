import Iconify from '@/core/components/iconify/iconify'
import TitleSection from '@/core/components/page/title-section'
import { Icons } from '@/global/icons'
import { Spacer, Tab, Tabs } from '@heroui/react'
import TestStream from './test-stream.page'
import ConfigStream from './config-stream.page'

export default function StreamsPage() {
  const title = 'Streams'
  const description = 'In this page you can see all the streams that you have created'

  return (
    <TitleSection title={title} description={description} icon={Icons.STREAMS}>
      <Tabs
        classNames={{
          tabContent: 'text-primary-500/80',
        }}
        aria-label="Tabs"
        variant="underlined"
        color="primary"
      >
        <Tab
          key="config-stream"
          title={
            <div className="flex items-center space-x-2">
              <Iconify icon={Icons.SETTINGS} />
              <span>Configure stream</span>
            </div>
          }
        >
          <Spacer y={5} />
          <ConfigStream />
        </Tab>
        <Tab
          key="test-stream"
          title={
            <div className="flex items-center space-x-2">
              <Iconify icon={Icons.TEST} />
              <span>Test stream</span>
            </div>
          }
        >
          <TestStream />
        </Tab>
      </Tabs>
    </TitleSection>
  )
}
