import { ReactNode } from 'react'

export type StepsProps = {
  currentStep: number
  steps: {
    section: string
    stepValue?: string | number | ReactNode
    order: number
  }[]
}
