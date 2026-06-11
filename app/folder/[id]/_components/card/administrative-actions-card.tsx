'use client'

import { AdminPanelSettingsOutlined, DeleteForeverOutlined, ChevronRightOutlined, SyncAltOutlined, VerifiedUserOutlined } from "@mui/icons-material"

export default function AdministrativeActionsCard() {
  return (
    <div className="bg-white rounded-2xl border border-outline-variant overflow-hidden shadow-sm">
      <div className="p-6 bg-surface-low border-b border-outline-variant/50">
        <h4 className="font-bold text-on-surface flex items-center gap-3">
          <span className="material-symbols-outlined text-primary-text-2xl">
            <AdminPanelSettingsOutlined />
          </span>Actions Administratives
        </h4>
      </div>
      <div className="p-6 space-y-4">
        <button
          title="Suppression"
          type="button"
          onClick={() => {}}
          className="w-full flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-primary/50 hover:bg-primary/5 transition-all text-left group"
        >
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-error p-3 bg-error/10 rounded-xl">
              <DeleteForeverOutlined />
            </span>
            <div>
              <span className="block text-sm font-bold text-on-surface">Requete en effacement</span>
              <span className="block text-helper-xs text-on-surface-variant">Procédure de droit à l&apos;éffacement</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-transform group-hover:translate-x-1">
            <ChevronRightOutlined />
          </span>
        </button>
        <button
          type="button"
          title="Certificat de réhabilitation"
          className="w-full flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-primary/50 hover:bg-primary/5 transition-all text-left group"
        >
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary p-3 bg-primary/10 rounded-xl">
              <VerifiedUserOutlined />
            </span>
            <div>
              <span className="block text-sm font-bold text-on-surface">Requete en effacement</span>
              <span className="block text-helper-xs text-on-surface-variant">Procédure de droit à l&apos;éffacement</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-transform group-hover:translate-x-1">
            <ChevronRightOutlined />
          </span>
        </button>
        <button
          type="button"
          title="Transférer le dossier"
          className="w-full flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-primary/50 hover:bg-primary/5 transition-all text-left group"
        >
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-on-surface-variant p-3 bg-surface-container-high rounded-xl">
              <SyncAltOutlined />
            </span>
            <div>
              <span className="block text-sm font-bold text-on-surface">Transférer le dossier</span>
              <span className="block text-helper-xs text-on-surface-variant">Mutation juridictionnelle</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-transform group-hover:translate-x-1">
            <ChevronRightOutlined />
          </span>
        </button>
      </div>
    </div>
  )
}