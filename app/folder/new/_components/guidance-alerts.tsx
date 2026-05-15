import { HelpOutlined } from "@mui/icons-material"

export default function GuidanceAlert() {
  return (
    <div className="mt-8 bg-tertiary-fixed border-l-4 border-tertiary -6 rounded-lg">
      <div className="flex gap-4">
        <span className="material-symbols-outlined text-tertiary">
          <HelpOutlined />
        </span>
        <div>
          <h4 className="font-label-md text-label-md text-on-tertiairy">
            Besoin d&apos;aide pour l&apos;identification ?
          </h4>
          <p className="font-body-md text-body-md text-on-tertiairy-fixed-variant">
            Si le condamné ne possède pas de papiers d&apos;identité, veuillez cocher la case &quot;Identité non documentée&quot; dans les options avancées pour générer un identifiant temporaire.
          </p>
        </div>
      </div>
    </div>
  )
}