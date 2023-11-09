import { PersonalInfoFormFieldsValue } from '.'
import { FormFieldsValueConstants } from '../..'

export const PERSONAL_INFO_CONSTANTS: FormFieldsValueConstants<
  PersonalInfoFormFieldsValue['personalInfo']
> = {
  section: {
    name: 'personalInfo',
    title: 'Informações pessoais',
  },
  fields: {
    firstName: {
      label: 'Primeiro nome*:',
      placeholder: 'Digite seu primeiro nome aqui...',
    },
    lastName: {
      label: 'Sobrenome:',
      placeholder: 'Digite seu sobrenome aqui...',
    },
    email: {
      label: 'E-mail*:',
      placeholder: 'exemplo@gmail.com',
    },
    age: {
      label: 'Idade',
      placeholder: 'Digite sua idade aqui...',
    },
  },
}
