import { z } from 'zod'

import { personalInfoSchema } from './form-personal-info.schema'

export type PersonalInfoFormFieldsValue = z.infer<typeof personalInfoSchema>
