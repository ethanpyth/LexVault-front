import { WarningOutlined } from "@mui/icons-material"

export default function Alert() {
  return (
    <div className="mb-8 p-6 bg-error-container border-l-4 border-error-base flex gap-4 items-start">
      <span className="material-symbols-outlined text-error-base">
        <WarningOutlined />
      </span>
      <div>
        <p className="font-label-md text-label-md text-on-error-container mb-1">
          Attention
        </p>
        <p className="font-body-md text-body-md text-on-error-container">
          Les documents doivent être au format PDF, JPG ou PNG et ne pas dépasser 10 Mo par fichier. Assurez-vous de la lisibilité des scans.
        </p>
      </div>
    </div>
  )
}