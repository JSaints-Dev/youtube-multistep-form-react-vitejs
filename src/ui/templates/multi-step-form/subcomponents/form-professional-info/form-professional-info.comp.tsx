import { useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '@ui/shared'

import { ProfessionalInfoFormFieldsValue } from './form-professional-info.types'

export const FormProfessionalInfo = () => {
  const {
    register,
    control,
    setFocus,
    formState: { errors },
  } = useFormContext<ProfessionalInfoFormFieldsValue>()

  useEffect(() => {
    setFocus('jobTitle')
  }, [setFocus])

  return (
    <section className="flex flex-col gap-4">
      <Input
        {...register('jobTitle')}
        label="Cargo*:"
        placeholder="Digite seu cargo aqui..."
        errorMessage={errors.jobTitle?.message}
      />
      <Input
        {...register('company')}
        label="Empresa*:"
        placeholder="Digite sua empresa aqui..."
        errorMessage={errors.company?.message}
      />
      <Input
        {...register('yearsOfExperience', { valueAsNumber: true })}
        label="Anos de experiência*:"
        type="number"
        placeholder="Digite seus anos de experiência aqui..."
        errorMessage={errors.yearsOfExperience?.message}
      />
      <Controller
        name="salary"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            value={field.value ?? ''}
            label="Salário*:"
            placeholder="Digite seu salário aqui..."
            errorMessage={errors.salary?.message}
            onChange={(event) => {
              function formatToCurrency(value: string): string {
                const result = value.replace(/\D/g, '')
                return new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(Number(result) / 100)
              }

              field.onChange(formatToCurrency(event.target.value))
            }}
          />
        )}
      />
    </section>
  )
}
