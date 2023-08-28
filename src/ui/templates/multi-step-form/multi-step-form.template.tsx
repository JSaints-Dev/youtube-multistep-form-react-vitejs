import { ReactNode } from 'react'

import { Steps } from '@ui/shared'

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

export const MultiStepTemplate = () => {
  return (
    <main className="flex min-h-[100vh] w-full bg-secondary">
      <Steps steps={STEPS} currentStep={1} />
    </main>
  )
}
