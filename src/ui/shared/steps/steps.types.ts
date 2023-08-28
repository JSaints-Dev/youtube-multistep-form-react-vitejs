import { ReactNode } from 'react'

export type StepsProps = {
  currentStep: number
  steps: {
    label: string
    value?: string | number | ReactNode
    order: number
  }[]
}
