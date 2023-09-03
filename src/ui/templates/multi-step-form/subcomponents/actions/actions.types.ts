export type ActionsProps = {
  currentStep: number
  previousStep: () => void
  stepsLength: number
  handleFinishStep: () => void
}
