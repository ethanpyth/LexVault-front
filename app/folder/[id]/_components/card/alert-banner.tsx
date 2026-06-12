import { WarningOutlined, PriorityHighOutlined } from "@mui/icons-material"

export default function AlertBanner() {
  return (
    <div className="p-6 bg-error/5 border border-error/20 rounded-2xl shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-1 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="material-symbols-outlined text-6xl text-error">
          <PriorityHighOutlined />
        </span>
      </div>
      <div className="flex items-start gap-4 relative z-10">
        <span className="material-symbols-outlined text-error font-bold mt-0.5">
          <WarningOutlined />
        </span>
        <div>
          <p className="text-sm font-bold text-error uppercase tracking-wide">
            Procédure de révision
          </p>
          <p className="text-title-sm-caps text-on-surface-variant leading-relaxed mt-2 font-medium">
            Ce dossier est sous le coup d&apos;une <span className="font-bold text-on-surface underline decoration-error/30">
              révision excceptionnelle
            </span>. Toute modification structurelle est soumise à l&apos;avale préalable du Procureur de la République
          </p>
        </div>
      </div>
    </div>
  )
}