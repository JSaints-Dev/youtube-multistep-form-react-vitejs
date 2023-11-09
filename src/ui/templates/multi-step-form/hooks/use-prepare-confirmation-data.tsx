import { useFormContext } from 'react-hook-form'

import { FormFieldsValue } from '@ui/templates/multi-step-form'

export function usePrepareConfirmationData() {
  const { getValues } = useFormContext<FormFieldsValue>()
  const { personalInfo, professionalInfo } = getValues()
  


  const preparedConfirmationData = [
    {
      section: 'Informações Pessoais',
      values: [
        {
          label: 'Nome Completo:',
          value: `${personalInfo.firstName} ${personalInfo.lastName}`,
        },
        { label: 'Idade:', value: personalInfo.age },
        { label: 'Email:', value: personalInfo.email },
      ],
    },
    {
      section: 'Informações Profissionais',
      values: [
        { label: 'Empresa:', value: professionalInfo.company },
        { label: 'Cargo:', value: professionalInfo.jobTitle },
        { label: 'Salário:', value: professionalInfo.salary },
        {
          label: 'Anos de Experiência:',
          value: professionalInfo.yearsOfExperience,
        },
      ],
    },
  ]

  return { preparedConfirmationData }
}
