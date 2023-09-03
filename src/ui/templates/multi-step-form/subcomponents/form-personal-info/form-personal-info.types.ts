import { personalInfoSchema } from '@ui/templates/multi-step-form/validations'
import { z } from 'zod'

export type PersonalInfoFormFieldsValue = z.infer<typeof personalInfoSchema>
