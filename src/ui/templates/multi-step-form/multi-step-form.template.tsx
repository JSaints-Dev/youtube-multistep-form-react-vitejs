import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Steps } from '@ui/shared'
import { z } from 'zod'

import { FORMS_STEPS } from './multi-step-form.content'
import { FormFieldsValue } from './multi-step-form.types'
import { Actions } from './subcomponents'

const STEPS_LENGTH = FORMS_STEPS.length
const FIRST_STEP = 1

export const MultiStepTemplate = () => {
  const [currentStep, setCurrentStep] = useState(FIRST_STEP)

  const formMethods = useForm<FormFieldsValue>({
    mode: 'onBlur',
    resolver: zodResolver(
      FORMS_STEPS.find((form) => form.order === currentStep)
        ?.validationSchema ?? z.object({}),
    ),
  })

  function handleFinishStep() {
    console.log(formMethods.getValues())
  }

  function nextStep() {
    if (currentStep < STEPS_LENGTH) {
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
        <Steps steps={FORMS_STEPS} currentStep={currentStep} />
      </div>
      <section className="flex w-[90%] max-w-[850px] rounded-lg bg-dark">
        <FormProvider {...formMethods}>
          <form
            onSubmit={formMethods.handleSubmit(nextStep)}
            className="flex w-full flex-col p-8"
          >
            {FORMS_STEPS.find((form) => form.order === currentStep)?.component}
            <Actions
              currentStep={currentStep}
              previousStep={previousStep}
              stepsLength={STEPS_LENGTH}
              handleFinishStep={handleFinishStep}
            />
          </form>
        </FormProvider>
      </section>
    </main>
  )
}
