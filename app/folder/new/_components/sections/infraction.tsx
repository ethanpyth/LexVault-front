import { GavelOutlined } from "@mui/icons-material"
import { useRecord } from "../../_context/record-context"

export default function InfractionForm() {
  const { recordData, updateRecordData } = useRecord()
  
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
            value={recordData.record?.infractionDescription || ""}
            onChange={(e) => updateRecordData({...recordData, record: {...recordData.record, infractionDescription: e.target.value}})}
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
            value={recordData.record?.penalCode || ""}
            onChange={(e) => updateRecordData({...recordData, record: {...recordData.record, penalCode: e.target.value}})}
            className="w-full h-12 border border-outline px-4 font-body-md focus-border-primary focus:ring-primary"
          />
          <span className="text-xs text-on-surface-variant">
            Référence législative ou réglementaire précise.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          <div className="flex flex-col gap-2">
            <label htmlFor="gravity" className="font-label-caps text-label-caps text-on-surface-variant">
              Gravité de l&apos;infraction<span className="text-error">*</span>
            </label>
            <select
              name="gravity"
              id="gravity"
              onChange={(e) => updateRecordData({...recordData, record: {...recordData.record, infractionGravity: e.target.value}})}
              className="w-full h-12 border border-outline px-4 font-body-md bg-white focus:border-primary focus:ring-primary"
            >
              <option disabled selected>Selectionnez la gravité</option>
              <option value="légère">Légère</option>
              <option value="moyenne">Moyenne</option>
              <option value="grave">Grave</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lieu" className="font-label-caps text-label-caps text-on-surface-variant">
              Lieu de l&apos;infraction<span className="text-error">*</span>
            </label>
            <input
              name="lieu"
              title="Champ du lieu de l'infraction"
              placeholder="Ex: Kinshasa, RDC"
              type="text"
              id="lieu-decision"
              className="w-full h-12 border border-outline px-4 font-body-md focus:border-primary focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </section>
  )
}