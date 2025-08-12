import { Chip, Spacer, Spinner } from '@heroui/react'
import { useEffect, useState } from 'react'
import { baseService } from '../../server/services/status.service'

export default function Footer() {
  const [isLoading, setIsLoading] = useState(true)
  const [status, setStatus] = useState(false)

  useEffect(() => {
    baseService
      .getStatus()
      .then(res => {
        res.status === 'success' ? setStatus(true) : setStatus(false)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <footer className="w-full flex items-center justify-center py-3">
      <p>© 2023 Chipoko Team -</p>
      {isLoading ? (
        <>
          <Spinner variant="wave" size="sm" color="current" />
          <Spacer x={1} />
          <p>System status</p>
        </>
      ) : (
        <Chip className="px-0 mx-0 text-md" color={status ? 'success' : 'danger'} variant="light">
          System status
        </Chip>
      )}
    </footer>
  )
}
