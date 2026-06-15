export default function Table() {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Agent</th>
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Role principal</th>
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Accès BD</th>
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Statut</th>
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">

          </tbody>
        </table>
      </div>
      <div className="px-6 py-5 bg-surface-container-low border-t border-outline-variant flex items-center justify-between">
        <p className="text-sm font-bold text-on-surface-variant">
          Affichage de sur agents
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            title="Précedent"
            className="px-6 py-2 text-sm font-bold border border-primary text-primary hover:bg-primary-fixed transition-colors uppercase tracking-widest"
          >
            Précedent
          </button>
          <button
            type="button"
            title="Suivant"
            className="px-6 py-2 text-sm font-bold border border-primary text-primary hover:bg-primary-fixed transition-colors uppercase tracking-widest"
          >
            Suivant
          </button>
        </div>
      </div>
    </>
  )
}