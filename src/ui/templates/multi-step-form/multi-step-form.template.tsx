import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Steps } from '@ui/shared'
import { z } from 'zod'

import { FORMS, STEPS } from './multi-step-form.content'
import { FormFieldsValue } from './multi-step-form.types'
import { Actions } from './subcomponents'

export const MultiStepTemplate = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const formMethods = useForm<FormFieldsValue>({
    mode: 'onBlur',
    resolver: zodResolver(
      FORMS.find((form) => form.order === currentStep)?.validationSchema ??
        z.object({}),
    ),
  })

  function handleFinishStep() {
    console.log(formMethods.getValues())
  }

  function onSubmit() {
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
        <FormProvider {...formMethods}>
          <form
            onSubmit={formMethods.handleSubmit(onSubmit)}
            className="flex w-full flex-col p-8"
          >
            {FORMS.find((form) => form.order === currentStep)?.component}
            <Actions
              currentStep={currentStep}
              previousStep={previousStep}
              stepsLength={STEPS.length}
              handleFinishStep={handleFinishStep}
            />
          </form>
        </FormProvider>
      </section>
    </main>
  )
}
