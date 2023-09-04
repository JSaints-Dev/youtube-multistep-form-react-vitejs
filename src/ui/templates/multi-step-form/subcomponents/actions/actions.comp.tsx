import { ActionsProps } from './actions.types'

export const Actions = ({
  currentStep,
  previousStep,
  stepsLength,
  handleFinishStep,
}: ActionsProps) => {
  return (
    <div className="flex justify-end gap-3">
      {currentStep > 1 && (
        <button
          type="button"
          onClick={previousStep}
          className="rounded-md border border-secondary p-2 text-secondary"
        >
          Voltar
        </button>
      )}
      {currentStep < stepsLength ? (
        <button
          type="submit"
          className="rounded-md border border-secondary bg-secondary p-2 text-dark"
        >
          Próximo
        </button>
      ) : (
        <button
          type="button"
          onClick={handleFinishStep}
          className="rounded-md border border-primary bg-primary p-2 text-light"
        >
          Confirmar
        </button>
      )}
    </div>
  )
}
