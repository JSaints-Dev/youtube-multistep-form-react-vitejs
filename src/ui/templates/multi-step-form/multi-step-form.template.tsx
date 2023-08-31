import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Input, Steps } from '@ui/shared'
import { z } from 'zod'

const STEPS: {
  label: string
  value?: string | number | ReactNode
  order: number
}[] = [
  {
    label: 'Informações Pessoais',
    order: 1,
    value: 1,
  },
  {
    label: 'Cargo Profissional',
    order: 2,
    value: 2,
  },
  {
    label: 'Confirme seus dados',
    order: 3,
    value: 3,
  },
]

const schema = z.object({
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string(),
  age: z.number(),
  email: z.string().email('Invalid email'),
})

type FormValues = z.infer<typeof schema>

export const MultiStepTemplate = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  function onSubmit(data: FormValues) {
    console.log(data)
    if (currentStep < STEPS.length) {
      nextStep()
    }
  }

  function nextStep() {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  function previousStep() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <main className="flex min-h-[100vh] w-full flex-col items-center gap-14 bg-secondary pt-20">
      <div className="flex w-full max-w-5xl">
        <Steps steps={STEPS} currentStep={currentStep} />
      </div>
      <section className="flex w-[90%] max-w-[850px] rounded-lg bg-dark">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4 p-8"
        >
          <Input
            {...register('firstName')}
            placeholder="Your first name here..."
            label="First Name*:"
            errorMessage={errors.firstName?.message}
          />
          <Input
            {...register('lastName')}
            label="Last Name:"
            placeholder="Your last name here..."
            errorMessage={errors.lastName?.message}
          />
          <Input
            {...register('age', { valueAsNumber: true })}
            label="Age*:"
            type="number"
            placeholder="Your age here..."
            errorMessage={errors.age?.message}
          />
          <Input
            {...register('email')}
            name="email"
            label="Email*:"
            placeholder="example@gmail.com"
            errorMessage={errors.email?.message}
          />

          <div className="flex justify-end gap-3">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={previousStep}
                className="rounded-md border border-secondary p-2 text-secondary"
              >
                Back
              </button>
            )}
            {currentStep < STEPS.length ? (
              <button
                type="submit"
                className="min-w-[5rem] rounded-md border border-secondary bg-secondary p-2 text-dark"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                className="w-20 rounded-md border border-primary bg-primary p-2 text-light"
              >
                Confirm
              </button>
            )}
          </div>
        </form>
      </section>
    </main>
  )
}
