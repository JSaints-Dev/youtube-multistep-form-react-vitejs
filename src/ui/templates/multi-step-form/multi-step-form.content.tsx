import { FormStep } from './multi-step-form.types'
import {
  FormPersonalInfo,
  FormProfessionalInfo,
  FormConfirm,
  personalInfoSchema,
  professionalInfoSchema,
} from './subcomponents'

export const FORMS_STEPS: FormStep[] = [
  {
    order: 1,
    section: 'Informações Pessoais',
    stepValue: 1,
    component: <FormPersonalInfo />,
    validationSchema: personalInfoSchema,
  },
  {
    order: 2,
    section: 'Informações Profissionais',
    stepValue: 2,
    component: <FormProfessionalInfo />,
    validationSchema: professionalInfoSchema,
  },
  {
    order: 3,
    section: 'Confirme seus dados',
    stepValue: 3,
    component: <FormConfirm />,
  },
]
