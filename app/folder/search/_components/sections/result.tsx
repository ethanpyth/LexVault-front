import { DownloadOutlined, PrintOutlined } from "@mui/icons-material"
import Pagination from "../pagination.tsx"

export default function Results() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-on-surface text-2xl font-bold">
          Résultat de la recherche <span className="text-on-surface-variant font-normal text-base ml-2">
            (124 enregistrements trouvés)
          </span>
        </h3>
        <div className="flex gap-2">
          <button
            type="button"
            title="bouton de téléchargement"
            className="p-2 border border-outline-variant rounded bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined">
              <DownloadOutlined />
            </span>
          </button>
          <button
            title="bouton d'impression"
            type="button"
            className="p-2 border border-outline-variant rounded bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined">
              <PrintOutlined />
            </span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto bg-surface-container-lowest rounded border border-outline-variant shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container border-b border-outline-variant">
              <th className="px-6 py-4 text-xs fontt-bold uppercase tracking-widest text-on-surface-variant">Identité</th>
              <th className="px-6 py-4 text-xs fontt-bold uppercase tracking-widest text-on-surface-variant">Date de naissance/ID</th>
              <th className="px-6 py-4 text-xs fontt-bold uppercase tracking-widest text-on-surface-variant">Dernière mise à jour</th>
              <th className="px-6 py-4 text-xs fontt-bold uppercase tracking-widest text-on-surface-variant">Statut</th>
              <th className="px-6 py-4 text-xs fontt-bold uppercase tracking-widest text-on-surface-variant">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">

          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  )
}