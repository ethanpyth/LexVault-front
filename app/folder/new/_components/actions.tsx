'use client'

import { ArrowForwardOutlined, ArrowBackOutlined, CheckOutlined } from "@mui/icons-material"
import { useRecord } from "../_context/record-context"
import { createRecord } from "@/app/lib/folder/actions"
import { useRouter } from "next/navigation"
import { useState } from "react"

type ActionProps = {
  currentStep: number
}

const step = ["identity", "representation", "attachments", "payments", "confirmation"]

export default function Action({ currentStep }: Readonly<ActionProps>) {
  const router = useRouter()
  const { recordData } = useRecord()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isLastStep = currentStep === step.length
  const isFirstStep = currentStep === 1

  const goToStep = (stepLabel: string) => {
    router.push(`/folder/new?stepLabel=${stepLabel}`)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const result = await createRecord(recordData)
      if (result.success) {
        router.push('/folder')
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Une erreur est survenue'
      setError(message)
      console.error('Submit error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mt-12 flex justify-between items-center">
      {error && (
        <div className="absolute top-4 right-4 bg-error text-on-error p-4 rounded-lg">
          {error}
        </div>
      )}
      {isFirstStep ? (
        <button
          title="Annulation"
          type="button"
          className="px-6 py-3 border border-primary text-primary font-label-md text-label-md uppercase tracking-wider rounded-lg hover:bg-surface-container transition-colors"
        >
          Annuler
        </button>
      ) : (
        <button
          title="Étape précédente"
          onClick={() => goToStep(step[currentStep - 2])}
          type="button"
          className="px-6 py-3 border border-primary text-primary font-label-md text-label-md uppercase tracking-wider rounded-lg hover:bg-surface-container transition-colors"
          disabled={isLoading}
        >
          <ArrowBackOutlined />
          Précédent
        </button>
      )}
      {isLastStep ? (
        <button
          title="Prochaine étape"
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
          className="px-8 py-3 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded-lg shadow-md hover:opacity-90 transition-all flex items-center disabled:opacity-50"
        >
          {isLoading ? "Envoi en cours..." : "Terminer"}
          <span className="material-symbols-outlined">
            <CheckOutlined />
          </span>
        </button>
      ) : (
        <button
          onClick={() => goToStep(step[currentStep])}
          title="Prochaine étape"
          type="submit"
          className="px-8 py-3 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded-lg shadow-md hover:opacity-90 transition-all flex items-center"
        >
          Suivant<span className="material-symbols-outlined">
            <ArrowForwardOutlined />
          </span>
        </button>
      )}
    </div>
  )
}