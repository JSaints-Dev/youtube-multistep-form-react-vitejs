import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import { Input } from '@ui/shared'

import { PERSONAL_INFO_CONSTANTS } from './constants'
import { PersonalInfoFormFieldsValue } from './form-personal-info.types'

export const FormPersonalInfo = () => {
  const {
    register,
    setFocus,
    formState: { errors },
  } = useFormContext<PersonalInfoFormFieldsValue>()

  useEffect(() => {
    setFocus('personalInfo.firstName')
  }, [setFocus])

  return (
    <section className="flex flex-col gap-4">
      <Input
        {...register('personalInfo.firstName')}
        label={PERSONAL_INFO_CONSTANTS.fields.firstName.label}
        placeholder={PERSONAL_INFO_CONSTANTS.fields.firstName.placeholder}
        errorMessage={errors.personalInfo?.firstName?.message}
      />
      <Input
        {...register('personalInfo.lastName')}
        label={PERSONAL_INFO_CONSTANTS.fields.lastName.label}
        placeholder={PERSONAL_INFO_CONSTANTS.fields.lastName.placeholder}
        errorMessage={errors.personalInfo?.lastName?.message}
      />
      <Input
        {...register('personalInfo.age', { valueAsNumber: true })}
        label={PERSONAL_INFO_CONSTANTS.fields.age.label}
        placeholder={PERSONAL_INFO_CONSTANTS.fields.age.placeholder}
        errorMessage={errors.personalInfo?.age?.message}
        type="number"
      />
      <Input
        {...register('personalInfo.email')}
        label={PERSONAL_INFO_CONSTANTS.fields.email.label}
        placeholder={PERSONAL_INFO_CONSTANTS.fields.email.placeholder}
        errorMessage={errors.personalInfo?.email?.message}
      />
    </section>
  )
}
