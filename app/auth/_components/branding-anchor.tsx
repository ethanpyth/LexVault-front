import { ShieldOutlined } from "@mui/icons-material"

export default function BrandingAnchor() {
  return (
    <div className="flex flex-col items-center mb-stack-lg text-center">
      <div className="w-16 h-16 bg-primary flex items-center justify-center mb-stack-sm">
        <span className="material-symbols-outlined text-on-primary text-[32px]">
          <ShieldOutlined />
        </span>
      </div>
      <h1 className="font-h2 text-h2 text-primary mb-unit">
        Portail judiciaire
      </h1>
      <p className="font-label-caps text-label-caps text-on-secondary-container uppercase tracking-widest">
        Connexion Sécurisée agent
      </p>
    </div>
  )
}