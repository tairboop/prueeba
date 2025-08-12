import { formMaxChar, formMinChar, formRequired, formText } from '@/messages/common'
import { z } from 'zod'

export const textMinMax = (min: number, max: number) =>
  z
    .string({
      error: issue => (issue.input === undefined ? formRequired : formText),
    })
    .min(min, { message: formMinChar(min) })
    .max(max, { message: formMaxChar(max) })

export const textMin = (min: number) =>
  z
    .string({
      error: issue => (issue.input === undefined ? formRequired : formText),
    })
    .min(min, { message: formMinChar(min) })

export const textMax = (max: number) =>
  z
    .string({
      error: issue => (issue.input === undefined ? formRequired : formText),
    })
    .max(max, { message: formMaxChar(max) })
