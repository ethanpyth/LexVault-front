import { PrintOutlined, AnalyticsOutlined } from "@mui/icons-material"

export default function QuickLinks() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        title="Imprimer"
        type="button"
        className="bg-surface border border-outline-variant p-3 rounded flex flex-cols items-center gap-2 hover:bg-surface-container-high transitions-colors group"
      >
        <span className="material-symbol-outlined text-primary group-hover:scale-110 transition-transform">
          <PrintOutlined />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-tight">Imprimer</span>
      </button>
      <button
        title="Imprimer"
        type="button"
        className="bg-surface border border-outline-variant p-3 rounded flex flex-cols items-center gap-2 hover:bg-surface-container-high transitions-colors group"
      >
        <span className="material-symbol-outlined text-primary group-hover:scale-110 transition-transform">
          <AnalyticsOutlined />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-tight">Rapport Trim</span>
      </button>
    </div>
  )
}