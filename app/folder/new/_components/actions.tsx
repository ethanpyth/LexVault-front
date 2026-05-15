import { ArrowForwardOutlined } from "@mui/icons-material"

export default function Action() {
  return (
    <div className="mt-12 flex justify-between items-center">
      <button
        title="Annulation"
        type="button"
        className="px-6 py-3 border border-primary text-primary font-label-md text-label-md uppercase tracking-wider rounded-lg hover:bg-surface-container transition-colors"
      >
        Annuler
      </button>
      <button
        title="Prochaine étape"
        type="submit"
        className="px-8 py-3 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded-lg shadow-md hover:opacity-90 transition-all flex items-center"
      >
        Suivant
        <span className="material-symbols-outlined">
          <ArrowForwardOutlined />
        </span>
      </button>
    </div>
  )
}