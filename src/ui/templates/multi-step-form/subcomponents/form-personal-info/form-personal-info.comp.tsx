import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import { Input } from '@ui/shared'

import { PersonalInfoFormFieldsValue } from './form-personal-info.types'

export const FormPersonalInfo = () => {
  const {
    register,
    setFocus,
    formState: { errors },
  } = useFormContext<PersonalInfoFormFieldsValue>()

  useEffect(() => {
    setFocus('firstName')
  }, [setFocus])

  return (
    <section className="flex flex-col gap-4">
      <Input
        {...register('firstName')}
        placeholder="Digite seu primeiro nome aqui..."
        label="Primeiro Nome*:"
        errorMessage={errors.firstName?.message}
      />
      <Input
        {...register('lastName')}
        label="Sobrenome:"
        placeholder="Digite seu sobrenome aqui..."
        errorMessage={errors.lastName?.message}
      />
      <Input
        {...register('age', { valueAsNumber: true })}
        label="Idade*:"
        type="number"
        placeholder="Digite sua idade aqui..."
        errorMessage={errors.age?.message}
      />
      <Input
        {...register('email')}
        name="email"
        label="Email*:"
        placeholder="exemplo@gmail.com"
        errorMessage={errors.email?.message}
      />
    </section>
  )
}
