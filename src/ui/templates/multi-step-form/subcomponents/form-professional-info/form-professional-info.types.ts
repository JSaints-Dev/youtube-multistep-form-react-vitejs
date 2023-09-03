import { professionalInfoSchema } from '@ui/templates/multi-step-form/validations'
import { z } from 'zod'

export type ProfessionalInfoFormFieldsValue = z.infer<
  typeof professionalInfoSchema
>
