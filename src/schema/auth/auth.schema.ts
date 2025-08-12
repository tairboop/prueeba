import z from 'zod'
import { textMin } from '../common.schema'

export const authSchema = z.object({
  username: textMin(3),
  password: textMin(6),
})
