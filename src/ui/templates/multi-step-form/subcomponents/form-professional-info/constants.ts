import { ProfessionalInfoFormFieldsValue } from '.'
import { FormFieldsValueConstants } from '../..'

export const PROFESSIONAL_INFO_CONSTANTS: FormFieldsValueConstants<
  ProfessionalInfoFormFieldsValue['professionalInfo']
> = {
  section: {
    name: 'professionalInfo',
    title: 'Informações profissionais',
  },
  fields: {
    jobTitle: {
      label: 'Cargo*:',
      placeholder: 'Digite seu cargo aqui...',
    },
    company: {
      label: 'Empresa*:',
      placeholder: 'Digite o nome de sua empresa aqui...',
    },
    yearsOfExperience: {
      label: 'Anos de experiência*:',
      placeholder: 'Digite seus anos de experiência aqui...',
    },
    salary: {
      label: 'Salário*:',
      placeholder: 'Digite seu salário aqui...',
    },
  },
}
