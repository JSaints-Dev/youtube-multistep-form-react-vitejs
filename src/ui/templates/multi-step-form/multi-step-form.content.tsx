import { Step, StepForm } from './multi-step-form.types'
import {
  FormPersonalInfo,
  FormProfessionalInfo,
  FormConfirm,
} from './subcomponents'
import { personalInfoSchema, professionalInfoSchema } from './validations'

export const STEPS: Step[] = [
  {
    label: 'Informações Pessoais',
    order: 1,
    value: 1,
  },
  {
    label: 'Informações Profissionais',
    order: 2,
    value: 2,
  },
  {
    label: 'Confirme seus dados',
    order: 3,
    value: 3,
  },
]

export const FORMS: StepForm[] = [
  {
    order: 1,
    component: <FormPersonalInfo />,
    validationSchema: personalInfoSchema,
  },
  {
    order: 2,
    component: <FormProfessionalInfo />,
    validationSchema: professionalInfoSchema,
  },
  {
    order: 3,
    component: <FormConfirm />,
  },
]
