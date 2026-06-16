import { PersonOutlined } from "@mui/icons-material"

export default function SecuritySummary() {
  return (
    <div className="bg-surface-container p-8 border border-ooutline-variant shadow-sm institutional-border">
      <div className="flex items-center gap-3 mb-8 text-primary">
        <span className="material-symbols-outlined text-[28px] font-bold">
          <PersonOutlined />
        </span>
        <h3 className="text-xl font-black uppercase tracking-tight">
          Résumé de sécurité
        </h3>
      </div>
      <div className="space-y-6">
        <div className="bg-surface-container-lowest p-6 border border-outline-variant shadow-sm">
          <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">Dernière connexion</p>
          <p className="text-base font-bold text-on-surface">
            Aujourd&apos;hui, 10:45 <span className="text-on-surface-variant font-normal">
              (IP: 10.22.45.121)
            </span>
          </p>
        </div>
        <div className="bg-surface-container-lowest p-6 border border-outline-variant shadow-sm">
          <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-3">Niveau d&apos;accréditation</p>
          <div className="flex items-center gap-4">
            <div className="h-2.5 flex-1 bg-surface-container-low border border-outline-variant overflow-hidden">
              <div className="h-full bg-primary w-3/4"></div>
            </div>
            <span className="text-sm font-black text-primary uppercase tracking-widest">
              SECREt
            </span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 border border-outline-variant shadow-sm">
          <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">
            Dernière revue d&apos;accèss
          </p>
          <p className="text-base font-bold text-on-surface">
            12 Mars 2024 <span className="text-on-surface-variant font-normal">
              par DSI-SEC-01
            </span>
          </p>
        </div>
      </div>
      <div className=""></div>
    </div>
  )
}