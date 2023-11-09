import { useEffect } from 'react'

import { StepsProps } from './steps.types'

export function Steps({ currentStep, steps }: StepsProps) {
  const isRepeatOrder = steps.some(
    (step, index) => steps.findIndex((s) => s.order === step.order) !== index,
  )

  useEffect(() => {
    if (isRepeatOrder) {
      console.error(
        '[APP ERROR] There are repeated orders in the steps array. Please, check the steps array.',
      )
    }
  }, [isRepeatOrder])

  return (
    <div className="w-full">
      <div className="flex items-start">
        {steps
          .map((e) => e)
          .sort((a, b) => a.order - b.order)
          .map((step) => {
            const isDisabled = step.order > currentStep
            return (
              <div key={step.order} className="relative flex-1">
                {step.order !== 1 && (
                  <div className="absolute left-[calc(-50%+2.5rem)] right-[calc(50%+2.5rem)] top-[1.25rem]">
                    <span
                      data-is-disabled={isDisabled}
                      className="block border-t-[1px] border-dark data-[is-disabled='true']:border-primary"
                    />
                  </div>
                )}
                <div className="flex flex-col items-center">
                  <span
                    data-is-disabled={isDisabled}
                    className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-dark font-bold text-light data-[is-disabled='true']:bg-primary"
                  >
                    {step.stepValue}
                  </span>
                  <span
                    data-is-disabled={isDisabled}
                    className="w-full text-center font-semibold text-dark data-[is-disabled='true']:text-primary"
                  >
                    {step.section}
                  </span>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
