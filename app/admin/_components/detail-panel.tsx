import { InfoOutlined } from "@mui/icons-material"
import SecuritySummary from "./security-summary"

export default function DetailPanel() {
  return (
    <div className="mt-12 grid grid-cols-1 xl:grid-cols-2 gap-8">
      <div className="bg-surface-container-lowest border border-outline-variant shadow-sm p-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline-variant">
          <h3 className="text-xl font-black uppercase tracking-tight text-on-surface">
            Editer les acccès : 
          </h3>
          <span className="material-symbols-outlined text-on-surface-variant">
            <InfoOutlined />
          </span>
        </div>
        <div className="space-y-8">
          <div className="">
            <label htmlFor="role" className="block text-xs font-black uppercase tracking-widest text-on-surface-variant mb-3">
              Role système
            </label>
            <select
              name="role"
              id="role"
              className="w-full bg-surface-container-low border-0 border-b-2 border-outline focus:border-primary focus:ring-0 text-sm font-bold p-3"
            >
              <option value="Magistrat">Magistrat</option>
              <option value="Admin">Administrateur</option>
              <option value="Greffier">Greffier</option>
              <option value="Juge">Juge</option>
            </select>
          </div>
          <div className="">
            <label
              htmlFor=""
              className="block text-xs font-black uppercase tracking-widest text-on-surface-variant mb-4"
            >
              Accès aux bases de données judiciaires
            </label>
            <div className="space-y-4">
              
            </div>
          </div>
          <div className="flex items-center justify-between pt-6 border-t border-outline-variant">
            <button
              type="button"
              title="Désactiver"
              className="text-sm font-black uppercase tracking-widest text-error hover:underline"
            >
              Désactiver
            </button>
            <div className="flex gap-4">
              <button
                title="Annuler"
                type="button"
                className="px-6 py-3 text-sm font-bold border border-outline text-on-surface-variant uppercase tracking-widest hover:bg-surface-container-low"
              >
                Annuler
              </button>
              <button
                title="Ennregistrer"
                type="button"
                className="px-6 py-3 text-sm font-black bg-primary text-on-primary uppercase tracking-widest hover:bg-primary-container shadow-md"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
      <SecuritySummary />
    </div>
  )
}