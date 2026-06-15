'use client'

import { PersonAddOutlined } from "@mui/icons-material"
import Table from "./table"

export default function MainContentSection() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant shadow-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between border-b border-outline-variant px-6 py-0 gap-4">
        <div className="flex">
          <button
            type="button"
            title="Liste des agents"
            onClick={() => {}}
            className="text-sm font-black text-primary border-b-4 border-primary  px-4 py-5"
          >
            Liste des agents
          </button>
          <button
            type="button"
            title="Groupes de sécurité"
            onClick={() => {}}
            className="text-sm font-bold text-on-surface-variant hover:bg-surface-container px-4 py-5"
          >
            Groupe de sécurité
          </button>
          <button
            type="button"
            title="Politiques"
            onClick={() => {}}
            className="text-sm font-bold text-on-surface-variant hover:bg-surface-container px-4 py-5"
          >
            Politiquess
          </button>
        </div>
        <div className="py-4">
          <button
            type="button"
            title="Ajouter un agent"
            className="flex items-center gap-2 bg-primary text-on-primary px-6 py-2 text-sm font-bold hover:bg-primary-container transition-colors uppercase tracking-wider"
          >
            <span className="material-outlined-symbols text-[20px]">
              <PersonAddOutlined />
            </span>Ajouter un agent
          </button>
        </div>
      </div>
      <Table />
    </div>
  )
}