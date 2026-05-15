import { ArrowBackOutlined, ArrowForward } from "@mui/icons-material"

export default function NavigationFooter() {
  return (
    <div className="flex justify-between items-center pt-stack-md mt-stack-md border-t border-outline-variant">
      <button
        title="bouton de retour"
        type="button"
        className="flex items-center gap-2 px- py-3 text-button font-button border border-primary hover:bg-surface-variant transition-all cursor-pointer"
      >
        <span className="material-symbols-outlined text-[20px]"><ArrowBackOutlined /></span>Précedent
      </button>
      <button
        title="Bouton de changement de formulaire"
        type="button"
        className="flex items-center gap-2 px-8 py-3 bg-primary text-on-primary text-button font-button hover:bg-tertiary transition-all cursor-pointer"
      >
        Suivant<span className="material-symbols-outlined text-[20px]"><ArrowForward /></span>
      </button>
    </div>
  )
}