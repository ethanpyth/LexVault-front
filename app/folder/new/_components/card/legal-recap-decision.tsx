import { CheckCircleOutlined } from "@mui/icons-material"

export default function LegalRecapDecisionCard() {
  return (
    <div className="bg-surface-lowest border border-outline-variant overflow-hidden">
      <div className="bg-surface-low border-b border-outline-variant px-stack-lg py-3 flex justify-between items-center">
        <h3 className="font-label-md text-label-md text-blue-900">
          Détails de la Procédure
        </h3>
        <button
          type="button"
          title="Bouton de modification"
          className="text-blue-900 text-xs font-bold hover:underline"
        >
          Modifier
        </button>
      </div>
      <div className="p-stack-lg space-y-4">
        <div className="flex justify-between border-b border-surface-container py-2">
          <span className="text-on-secondary-container font-label-caps text-[10px] uppercase">Tribunal</span>
          <span className="font-body-md text-body-md font-bold">
            TJ de Lyon
          </span>
        </div>
        <div className="flex justify-between border-b border-surface-container py-2">
          <span className="text-on-secondary-container font-label-caps text-[10px] uppercase">Nature d&apos;infraction</span>
          <span className="font-body-md text-body-md font-bold">
            Délit routier
          </span>
        </div>
        <div className="flex justify-between border-b border-surface-container py-2">
          <span className="text-on-secondary-container font-label-caps text-[10px] uppercase">Date d&apos;audience</span>
          <span className="font-body-md text-body-md font-bold">
            12 / 10 / 2024
          </span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-on-secondary-container font-label-caps text-[10px] uppercase">Statut paiement</span>
          <span className="font-body-md text-body-md font-bold text-blue-900 flex items-center">
            <span className="material-symbols-outlined text-[16px]">
              <CheckCircleOutlined />
            </span>Validé
          </span>
        </div>
      </div>
    </div>
  )
}