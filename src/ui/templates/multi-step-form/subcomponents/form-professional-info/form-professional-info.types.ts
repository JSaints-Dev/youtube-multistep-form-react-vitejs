import { z } from 'zod'

import { professionalInfoSchema } from './form-professional-info.schema'

export type ProfessionalInfoFormFieldsValue = z.infer<
  typeof professionalInfoSchema
>
