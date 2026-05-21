import { InfoOutlined } from "@mui/icons-material"

export default function FooterMessage() {
  return (
    <div className="flex flex-col items-center gap-stack-sm text-center">
      <div className="flex items-center gap-stack-sm text-on-surface-variant">
        <span className="material-symbols-outlined text-sm">
          <InfoOutlined />
        </span>
        <p className="font-body-md text-sm italic">
          Ce portail utilise des protocoles de chiffrement conformes au RGS (Référentiel Général de Sécurité).
        </p>
      </div>
    </div>
  )
}