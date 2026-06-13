import { EventOutlined, FingerprintOutlined, VerifiedOutlined, HiveOutlined, DescriptionOutlined, EditNoteOutlined } from "@mui/icons-material"
import KPI from "../container/kpi"

type ProfileProps = {
  nom: string,
  birthday: string,
  pob: string,
  country: string,
  cjNumber: string,
  nbc: string,
  nbp: string,
  status: string,
}

export default function HeaderProfileCard(profile: Readonly<ProfileProps>) {
  return (
    <div className="bg-white rounded-2xl border border-outline-variant p-8 mb-10 shadow-sm overflow-hiddden relative">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="relative group">
            <div
              className="w-40 h-40 lg:h-48 lg:w-48 rounded-2xl bg-surface-dim overflow-hidden border-4 border-surface-container-high shadow-inner"
            >
            </div>
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-error text-[11Px] font-bold px-4 py-1.5 rounded-full border-4 border-white shadow-lg whitespace-nowrap tracking-widest uppercase"
            >
              SURVEILLANCE
            </div>
          </div>
          <div className="text-center md:text-left pt-2">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">{ profile.nom }</h1>
              <span className="bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20 tracking-wide uppercase">
                <HiveOutlined />
              </span>
            </div>
            <div className="space-y-3">
              <p className="text-on-surface-variant flex items-center justify-center md:justify-start gap-3">
                <span className="material-symbol-outline text-[20px] text-primary/60">
                  <EventOutlined />
                </span>
                <span className="font-medium text-on-surface">
                  Né le {new Date(profile.birthday).toDateString()} ({(2026 - new Date(profile.birthday).getFullYear())} ans) à { profile.pob }(75), { profile.country }
                </span>
              </p>
              <p className="text-on-surface-variant flex items-center justify-center md:justify-start gap-3">
                <span className="material-symbol-outline text-[20px] text-primary/60">
                  <FingerprintOutlined />
                </span>
                <span className="font-medium text-on-surface">
                  Dossier National : <span className="font-bold">#{ profile.cjNumber }</span>
                </span>
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
                <span className="material-symbol-outline text-[18px] text-primary">
                  <VerifiedOutlined />
                </span>
                <span className="font-medium text-on-surface">
                  Dernière authentification biométrique : 12/10/2023
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button
            title="bouton de "
            type="button"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-surface-container-high text-on-surface font-bold rounded-xl hover:bg-surface-dim transition-all text-sm border border-outline-variant/30"
          >
            <span className="material-symbols-outlined text-[20px]">
              <EditNoteOutlined />
            </span>Mise à jour Mention
          </button>
          <button
            title="bouton de "
            type="button"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:opacity-95 transition-all shadow-lg shadow-primary/20 text-sm"
          >
            <span className="material-symbols-outlined text-">
              <DescriptionOutlined />
            </span>Extrait Bulletin n1
          </button>
        </div>
      </div>
      <KPI status={profile.status} nbp={profile.nbp} nbc={profile.nbc} />
    </div>
  )
}