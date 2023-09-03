import { ReactNode } from 'react'

import { ZodRawShape, z } from 'zod'

import {
  PersonalInfoFormFieldsValue,
  ProfessionalInfoFormFieldsValue,
} from './subcomponents'

export type FormFieldsValue = PersonalInfoFormFieldsValue &
  ProfessionalInfoFormFieldsValue

export type Step = {
  label: string
  value?: string | number | ReactNode
  order: number
}

export type StepForm = {
  order: number
  component: ReactNode
  validationSchema?: z.ZodObject<ZodRawShape>
}
