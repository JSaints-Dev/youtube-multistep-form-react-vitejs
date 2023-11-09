import { ReactNode } from 'react'

import { ZodRawShape, z } from 'zod'

import {
  PersonalInfoFormFieldsValue,
  ProfessionalInfoFormFieldsValue,
} from './subcomponents'

export type FormFieldsValue = PersonalInfoFormFieldsValue &
  ProfessionalInfoFormFieldsValue

export type FormStep = {
  order: number
  section: string
  stepValue?: string | number | ReactNode
  component: ReactNode
  validationSchema?: z.ZodObject<ZodRawShape>
}

export type FormFieldsValueConstants<T> = {
  section: {
    name: keyof FormFieldsValue
    title: string
  }
  fields: {
    [key in keyof T]: {
      label: string
      placeholder: string
    }
  }
}
