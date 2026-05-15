import { GavelOutlined } from "@mui/icons-material"
import { NavSidebar } from "./nav"

export default function SideBar() {
  return (
    <aside className="fixed left-0 top-16 h-full flex-col pt-stack-md w-80 bg-surface-container-low border-r border-outline-variant hidden lg:flex">
      <div className="px-6 mb-stack-md">
        <div className="flex items-center gap-stack-sm mb-stack-sm">
          <span className="material-symbols-outlined text-primary text-[32px]">
            <GavelOutlined />
          </span>
          <span className="font-h3 text-h3 text-primary">
            Dossier numéro 2024-FR-982
          </span>
        </div>
        <p className="font-label-caps text-label-caps uppercase tracking-wider text-on-secondary-container">
          Enregistrement Judiciaire
        </p>
      </div>
      <NavSidebar />
    </aside>
  )
}