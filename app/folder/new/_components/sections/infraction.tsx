import { GavelOutlined } from "@mui/icons-material"

export default function InfractionForm() {
  return (
    <section className="bg-white border border-outline-variant p-stack-md shadow-sm relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-950"></div>
      <div className="flex items-center gap-2 mb-stack-md">
        <span className="material-symbols-outlined text-primary">
          <GavelOutlined />
        </span>
        <h2 className="font-h3 text-h3 text-on-surface">
          Infraction
        </h2>
      </div>
      <div className="flex flex-col gap-stack-md">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="font-label-caps text-label-caps text-on-surface-variant"
          >
            Nature de l&apos;infraction<span className="text-error">*</span>
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Description détaillée des faits et de la qualification pénale..."
            rows={4}
            className="w-full border border-outline p-4 font-body-md focus:border-primary focus:ring-1 focus:ring-primary"
          >
          </textarea>
        </div>
        <div className="flex flex-col gap-2 max-w-md">
          <label
            htmlFor="code"
            className="font-label-caps text-label-caps text-on-surface-variant"
          >
            Code Pénal Réferent<span className="text-error">*</span>
          </label>
          <input
            title="Champ du code pénal"
            id="code"
            name="code"
            type="text"
            placeholder="Ex: Article 222-13"
            className="w-full h-12 border border-outline px-4 font-body-md focus-border-primary focus:ring-primary"
          />
          <span className="text-xs text-on-surface-variant">
            Référence législative ou réglementaire précise.
          </span>
        </div>
      </div>
    </section>
  )
}