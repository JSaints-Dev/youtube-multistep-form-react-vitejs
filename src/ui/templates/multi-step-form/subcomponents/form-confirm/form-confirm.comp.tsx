import { Fragment } from 'react'
import { useFormContext } from 'react-hook-form'

import { FormFieldsValue } from '@ui/templates/multi-step-form'

export const FormConfirm = () => {
  const { getValues } = useFormContext<FormFieldsValue>()
  const {
    age,
    company,
    email,
    firstName,
    jobTitle,
    lastName,
    salary,
    yearsOfExperience,
  } = getValues()

  const data = [
    {
      section: 'Informações Pessoais',
      values: [
        { label: 'Nome Completo:', value: `${firstName} ${lastName}` },
        { label: 'Idade:', value: age },
        { label: 'Email:', value: email },
      ],
    },
    {
      section: 'Informações Profissionais',
      values: [
        { label: 'Empresa:', value: company },
        { label: 'Cargo:', value: jobTitle },
        { label: 'Salário:', value: salary },
        { label: 'Anos de Experiência:', value: yearsOfExperience },
      ],
    },
  ]

  return (
    <section className="flex justify-center pb-6">
      <div className="flex w-auto flex-col gap-4 ">
        {data.map(({ section, values }) => (
          <div key={section} className="flex flex-col rounded-md bg-light">
            <span className="px-4 pt-4 text-lg font-semibold text-dark">
              {section}:
            </span>
            <div className="h-[1px] bg-secondary" />
            {values.map((item, index) => (
              <Fragment key={item.label}>
                {index > 0 && <div className="h-[1px] bg-secondary" />}
                <div className="flex h-7 items-center gap-1 p-4">
                  <span className="font-semibold text-primary">
                    {item.label}
                  </span>
                  <span className="text-primary">{item.value}</span>
                </div>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
