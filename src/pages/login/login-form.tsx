import { Button } from '@/core/components/forms/button/button'
import { Input } from '@/core/components/forms/input/input'
import Iconify from '@/core/components/iconify/iconify'
import { Icons } from '@/global/icons'
import { useState } from 'react'

import { authSchema } from '@/schema/auth/auth.schema'
import type { FormLogin } from '@/types/auth/auth.types'
import { Form, addToast } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { authService } from '../../../server/services/auth.service'

export default function LoginForm() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>({
    resolver: zodResolver(authSchema),
  })

  const onSubmit = async (data: FormLogin) => {
    try {
      setIsLoading(true)
      const res = await authService.login(data)

      addToast({
        title: res.status === 'success' ? 'Login successful' : 'Error on login',
        description: res.message,
        color: res.status === 'success' ? 'success' : 'danger',
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      })

      res.status === 'success' && setTimeout(() => navigate('/items'), 3000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form className="flex flex-col items-center w-full gap-5" onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('username')}
        className="w-full max-w-sm"
        label="Username"
        name="username"
        required
        startContent={<Iconify icon={Icons.USER} />}
        errorMessage={errors.username?.message}
      />
      <Input
        {...register('password')}
        className="w-full max-w-sm"
        label="Password"
        name="password"
        type={isVisible ? 'text' : 'password'}
        required
        startContent={<Iconify icon={Icons.LOCK} />}
        errorMessage={errors.password?.message}
        endContent={
          <Button
            aria-label="toggle password visibility"
            className="focus:outline-none !bg-transparent"
            type="button"
            onClick={toggleVisibility}
            isIconOnly
          >
            <Iconify icon={isVisible ? Icons.EYE_OPEN : Icons.EYE_CLOSE} />
          </Button>
        }
      />
      <Button
        className="!bg-primary w-full max-w-56"
        type="submit"
        color="primary"
        isLoading={isLoading}
        startContent={!isLoading && <Iconify icon={Icons.LOG_IN} />}
      >
        Sign in
      </Button>
    </Form>
  )
}
