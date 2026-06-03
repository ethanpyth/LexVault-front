import { InfoOutlined } from "@mui/icons-material"

export default function Notice() {
  return (
    <section className="bg-tertiary-fixed p-stack-lg border border-outline-variant flex gap-stack-md">
      <span className="material-symbols-outlined text-teriary">
        <InfoOutlined />
      </span>
      <div className="space-y-1">
        <h4 className="font-label-md text-label-md text-on-tertiary-fixed">
          Note d&apos;information
        </h4>
        <p className="text-sm text-on-tertiary-fixed-variant">
          Le paiement par timbre fiscal électronique est traité instantanément. Pour les paiements par carte bancaire, un délai de vérification de 10 minutes peut être observé avant la validation de l&apos;étape suivante.
        </p>
      </div>
    </section>
  )
}