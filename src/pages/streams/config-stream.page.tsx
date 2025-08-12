import React, { useState, useCallback } from 'react'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, addToast } from '@heroui/react'

import { Input } from '@/core/components/forms/input/input'
import { Button } from '@/core/components/forms/button/button'
import Iconify from '@/core/components/iconify/iconify'
import { Icons } from '@/global/icons'

function generateRandomId(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

interface ModalContentBodyProps {
  onClose: () => void
  title: string
  slug: string
  generatedUrl: string
  handleCopy: () => void
  handleCloseModal: () => void
}

const CopyButton = React.memo(({ onCopy }: { onCopy: () => void }) => (
  <Button isIconOnly onPress={onCopy} startContent={<Iconify icon={Icons.COPY} />} />
))

function ModalContentBody({ onClose, title, slug, generatedUrl, handleCopy, handleCloseModal }: ModalContentBodyProps) {
  return (
    <>
      <ModalHeader className="flex flex-col gap-1">Stream created</ModalHeader>
      <ModalBody>
        <p className="text-sm text-muted-foreground mb-2">
          <strong>Title:</strong> {title}
          <br />
          <strong>Key Stream:</strong> {slug}
        </p>
        <div className="w-full flex justify-center items-center gap-2">
          <Input className="w-full max-w-3xl" type="text" value={generatedUrl} readOnly />
          <CopyButton onCopy={handleCopy} />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="danger"
          variant="flat"
          onPress={() => {
            onClose()
            handleCloseModal()
          }}
        >
          Close
        </Button>
      </ModalFooter>
    </>
  )
}

export default function ConfigStream() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [generatedUrl, setGeneratedUrl] = useState('')
  const [slug, setSlug] = useState('')

  const handleGenerate = useCallback(() => {
    if (!title.trim() || !description.trim()) {
      addToast({
        title: 'Missing fields',
        description: 'Please enter both title and description.',
        color: 'danger',
        timeout: 2000,
      })
      return
    }

    const id = generateRandomId(10)
    const newSlug = `${title.trim().replace(/\s+/g, '-').toLowerCase()}-${id}`
    const url = `http://5.252.54.69:8080/hls/${newSlug}/index.m3u8`

    setSlug(newSlug)
    setGeneratedUrl(url)
    setIsModalOpen(true)

    addToast({
      title: 'Stream created',
      description: 'You can now copy and share your stream URL.',
      color: 'success',
      timeout: 2500,
      shouldShowTimeoutProgress: true,
    })
  }, [title, description])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(generatedUrl)
    addToast({
      title: 'Copied',
      description: 'Stream URL copied to clipboard.',
      color: 'primary',
      timeout: 2000,
    })
  }, [generatedUrl])

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold mb-6">Create New Stream</h3>
        <div className="flex flex-col items-center w-full max-w-md gap-6 p-8 rounded-lg shadow-md">
          <Input className="w-full" label="Title" placeholder="Stream 1" required value={title} onChange={e => setTitle(e.target.value)} />
          <Textarea
            className="w-full"
            label="Description"
            required
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={4}
          />
          <Button className="w-full max-w-xs !bg-primary-500" onClick={handleGenerate}>
            Save
          </Button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
        <ModalContent>
          {onClose => (
            <ModalContentBody
              onClose={onClose}
              title={title}
              slug={slug}
              generatedUrl={generatedUrl}
              handleCopy={handleCopy}
              handleCloseModal={handleCloseModal}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
