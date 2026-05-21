import { GavelOutlined } from "@mui/icons-material"

export default function Header() {
  return (
    <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-gutter h-16 max-w-container-max mx-auto">
      <div className="flex items-center gap-stack-sm">
        <span className="font-h3 text-h3 font-bold text-primary">
          Ministère de la justice
        </span>
      </div>
      <div className="flex items-center gap-stack-md">
        <span className="material-symbols-outlined text-primary" data-icon="gavel">
          <GavelOutlined />
        </span>
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">République Démocratique du congo</span>
      </div>
    </header>
  )
}