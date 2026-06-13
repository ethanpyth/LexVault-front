'use client'

import { VisibilityOutlined, HistoryOutlined } from "@mui/icons-material"

export default function AccessLogCard() {
  return (
    <div className="bg-white rounded-2xl border border-outline-variant overflow-hidden shadow-sm">
      <div className="p-6 bg-surface-low border-b border-outline-variant/50">
        <h4 className="font-bold text-on-surface flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-2xl">
            <VisibilityOutlined />
          </span>Journal des consultations
        </h4>
      </div>
      <div className="p-6">
        <ul className="space-y-6">

        </ul>
        <button
          type="button"
          title="Voir l'historique d'audit complet"
          onClick={() => {}}
          className="w-full mt-8 text-xs font-bold text-primary py-3.5 border-2 border-primary10 rounded-xl hover:bg-primary/5 transition-all uppercase tracking-widest flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">
            <HistoryOutlined />
          </span>Historique d&apos;audit complet
        </button>
      </div>
    </div>
  )
}