import { ArrowForwardOutlined, ArrowBackOutlined, CheckOutlined } from "@mui/icons-material"
import Link from "next/link"

type ActionProps = {
  currentStep: number
}

const step = ["identity", "representation", "attachments", "payments", "confirmation"]

export default function Action({ currentStep }: Readonly<ActionProps>) {
  const isLastStep = currentStep === step.length
  const isFirstStep = currentStep === 1

  const previousStep = step[currentStep - 2]
  const nextStep = step[currentStep]

  return (
    <div className="mt-12 flex justify-between items-center">
      {isFirstStep ? (
        <button
          title="Annulation"
          type="button"
          className="px-6 py-3 border border-primary text-primary font-label-md text-label-md uppercase tracking-wider rounded-lg hover:bg-surface-container transition-colors"
        >
          Annuler
        </button>
      ) : (
        <Link
          href={`./new?stepLabel=${previousStep}`}
          title="Étape précédente"
          type="button"
          className="px-6 py-3 border border-primary text-primary font-label-md text-label-md uppercase tracking-wider rounded-lg hover:bg-surface-container transition-colors"
        >
          <ArrowBackOutlined />
          Précédent
        </Link>
      )}
      {isLastStep ? (
        <button
          title="Prochaine étape"
          type="submit"
          className="px-8 py-3 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded-lg shadow-md hover:opacity-90 transition-all flex items-center"
        >
          Terminer<span className="material-symbols-outlined">
            <CheckOutlined />
          </span>
        </button>
      ) : (
        <Link
          href={`./new?stepLabel=${nextStep}`}
          title="Prochaine étape"
          type="submit"
          className="px-8 py-3 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded-lg shadow-md hover:opacity-90 transition-all flex items-center"
        >
          Suivant<span className="material-symbols-outlined">
            <ArrowForwardOutlined />
          </span>
        </Link>
      )}
    </div>
  )
}