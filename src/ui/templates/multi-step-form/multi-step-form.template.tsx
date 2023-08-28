import { ReactNode } from 'react'

import { Steps } from '@ui/shared'

const STEPS: {
  label: string
  value?: string | number | ReactNode
  id: number
}[] = [
  {
    label: 'Informações Pessoais',
    id: 1,
    value: 1,
  },
  {
    label: 'Cargo Profissional',
    id: 2,
    value: 2,
  },
  {
    label: 'Confirme seus dados',
    id: 3,
    value: 3,
  },
]

export const MultiStepTemplate = () => {
  return (
    <main className="flex min-h-[100vh] w-full bg-secondary">
      <Steps steps={STEPS} currentStep={2} />
    </main>
  )
}
