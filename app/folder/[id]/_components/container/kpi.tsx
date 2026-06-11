export default function KPI() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-10 border-outline-variant/50">
      <div className="flex flex-col gap-1 p-6 rounded-2xl bg-surface-low border border-outline-variant/20 hover:shadow-md transition-all">
        <span className="text-on-surface-variant text- font-bold uppercase tracking-widest opacity-80">
          Condamnations Actives
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-on-surface font-headline-md tracking-tight">03</span>
          <span className="text-xs text-error font-bold">+1 cette année</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-6 rounded-2xl bg-surface-low border border-outline-variant/20 hover:shadow-md transition-all">
        <span className="text-on-surface-variant text- font-bold uppercase tracking-widest opacity-80">
          Total peines effectuées
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-on-surface font-headline-md tracking-tight">07</span>
          <span className="text-xs text- font-bold">Historique complet</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-6 rounded-2xl bg-[#fff7ed] border-l-4 border-l-[#f97316]/20 hover:shadow-md transition-all">
        <span className="text-[#9a3412] text- font-bold uppercase">Statut de réinsertion</span>
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-[#f97316] font-headline-m">En cours</span>
          <span className="w-3 h-3 bg-[#f97316] rounded-full animate-pulse"></span>
        </div>
      </div>
    </div>
  )
}