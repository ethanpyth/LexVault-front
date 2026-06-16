import { Folder } from "@/app/lib/types"
import { CheckCircleOutlineOutlined, HistoryEduOutlined, LockClockOutlined, ReportProblemOutlined } from "@mui/icons-material"
import TimelineItem from "../items/timeline-item"
import { Key } from "react"

export default function RecordsTimeline({ records }: Readonly<{ records: Folder }>) {
  return (
    <div className="lg:col-span-2 space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-on-surface flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">
            <HistoryEduOutlined />
          </span>Historique des condamnations
        </h3>
        <div className="flex gap-1 p-1 bg-surface-container rounded-xl border border-outline-variant/30">
          <button
            type="button"
            title="Voir toutes les condamnations"
            className="text-xs px-5 py-2 rounded-lg bg-white text-primary font-bold shadow-sm"
          >
            Toutes
          </button>
          <button
            type="button"
            title="Voir les réhabilitations"
            className="text-xs px-5 py-2 rounded-lg hover:bg-white/50 text-on-surface-variant font-medium transitions-colors"
          >
            Réhabilitées
          </button>
        </div>
      </div>
      <div className="relative pl-10 lg:pl-0 space-y-12 before:absolute before:content-[''] before:inset-0 before:left-5 before:h-full before:w-0.5 before:bg-outline-variant lg:before:left-1 lg:before:-ml-px">
        {records.infractions.map((folder) => (
          <TimelineItem
            key={folder.id}
            status={records.statut}
            icon={records.statut === "ACTIF" ? ReportProblemOutlined : records.statut === "ARCHIVE" ? CheckCircleOutlineOutlined : LockClockOutlined}
            description={folder.description ?? ""}
            délit={folder.qualification}
            date={folder.dateInfraction}
            side={false}
            action={undefined}
          />
        ))}
      </div>
    </div>
  )
}