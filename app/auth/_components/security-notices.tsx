import { VerifiedUserOutlined } from "@mui/icons-material"

export default function SecurityNotices() {
  return (
    <div className="mt-stack-lg pt-stack-md border-t border-outline-variant space-y-stack-sm">
      <div className="flex-items-start gap-stack-sm text-on-secondary-container">
        <span className="material-symbols-outlined text-primary shrink-0">
          <VerifiedUserOutlined />
        </span>
        <p className="font-label-caps text-helper-xs leading-tight uppercase tracking-wider">
          Accès réservé aux agents habilités du Ministère de la Justice. Toute tentative d&apos;accès non autorisée est passible de poursuites.
        </p>
      </div>
    </div>
  )
}