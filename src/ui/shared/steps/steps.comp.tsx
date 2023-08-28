import { ReactNode } from 'react'

type StepsProps = {
  currentStep: number
  steps: {
    label: string
    value?: string | number | ReactNode
    id: number
  }[]
}

export function Steps({ currentStep, steps }: StepsProps) {
  return (
    <div className="w-full">
      <div className="flex flex-row items-start">
        {steps.map((step) => (
          <div
            key={step.id}
            style={{
              flex: '1 1 0%',
              position: 'relative',
            }}
          >
            {step.id !== 1 && (
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: 'calc(-50% + 2.5rem)',
                  right: 'calc(50% + 2.5rem)',
                }}
              >
                <span className="block border-t-[1px] border-t-dark" />
              </div>
            )}
            <span
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  height: '2.5rem',
                  width: '2.5rem',
                  flexShrink: 0,
                  fontWeight: 'bolder',
                  borderRadius: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="bg-dark text-light"
              >
                {step.value}
              </span>
              <span className="w-full text-center">{step.label}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
