import { WarningOutlined } from "@mui/icons-material"

export default function Warning() {
  return (
    <div className="bg-error-container border-l-4 border-error p-stack-md">
      <div className="flex gap-stack-md">
        <span className="material-symbols-outlined text-error">
          <WarningOutlined />
        </span>
        <div>
          <p className="text-xs font-bold text-on-error-container uppercase">
            Attention
          </p>
          <p className="text-xs text-on-error-container">
            Aucun remboursement n&apos;est possible après la validation finale de l&apos;enregistrement judiciaire.
          </p>
        </div>
      </div>
    </div>
  )
}