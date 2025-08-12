import { Icons } from '@/global/icons'

import { Button } from '@/core/components/forms/button/button'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react'
import { type ReactNode, useState } from 'react'
import Iconify from '../../core/components/iconify/iconify'

type Props = {
  title?: string
  icon?: Icons
  children: ReactNode
}

export default function ModalBox({ title, icon, children }: Props) {
  const { isDesktop } = useBreakpoint()
  const [open, setOpen] = useState(false)

  if (isDesktop) {
    return <>{children}</>
  }

  return (
    <>
      <Button variant="flat" onPress={() => setOpen(true)} isIconOnly>
        <Iconify icon={Icons.LINE_POINT} />
      </Button>
      <Modal className="bg-content2" isOpen={open} onOpenChange={setOpen}>
        <ModalContent className="bg-gradient">
          <ModalHeader>
            <div className="flex items-center justify-center gap-2">
              <Iconify icon={icon ? icon : Icons.POINT} />
              {title ? title : 'Options'}
            </div>
          </ModalHeader>
          <ModalBody className="overflow-y-auto mx-6 my-2 mb-1 p-0 pb-2">{children}</ModalBody>
          <ModalFooter className="flex justify-center">
            <Button className="w-full max-w-36 !bg-primary-500" color="primary" onPress={() => setOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
