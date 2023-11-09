import { useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '@ui/shared'

import { PROFESSIONAL_INFO_CONSTANTS } from './constants'
import { ProfessionalInfoFormFieldsValue } from './form-professional-info.types'

export const FormProfessionalInfo = () => {
  const {
    register,
    control,
    setFocus,
    formState: { errors },
  } = useFormContext<ProfessionalInfoFormFieldsValue>()

  useEffect(() => {
    setFocus('professionalInfo.jobTitle')
  }, [setFocus])

  return (
    <section className="flex flex-col gap-4">
      <Input
        {...register('professionalInfo.jobTitle')}
        label={PROFESSIONAL_INFO_CONSTANTS.fields.jobTitle.label}
        placeholder={PROFESSIONAL_INFO_CONSTANTS.fields.jobTitle.placeholder}
        errorMessage={errors.professionalInfo?.jobTitle?.message}
      />
      <Input
        {...register('professionalInfo.company')}
        label={PROFESSIONAL_INFO_CONSTANTS.fields.company.label}
        placeholder={PROFESSIONAL_INFO_CONSTANTS.fields.company.placeholder}
        errorMessage={errors.professionalInfo?.company?.message}
      />
      <Input
        {...register('professionalInfo.yearsOfExperience', {
          valueAsNumber: true,
        })}
        label={PROFESSIONAL_INFO_CONSTANTS.fields.yearsOfExperience.label}
        placeholder={
          PROFESSIONAL_INFO_CONSTANTS.fields.yearsOfExperience.placeholder
        }
        errorMessage={errors.professionalInfo?.yearsOfExperience?.message}
        type="number"
      />
      <Controller
        name="professionalInfo.salary"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            value={field.value ?? ''}
            label={PROFESSIONAL_INFO_CONSTANTS.fields.salary.label}
            placeholder={PROFESSIONAL_INFO_CONSTANTS.fields.salary.placeholder}
            errorMessage={errors.professionalInfo?.salary?.message}
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
