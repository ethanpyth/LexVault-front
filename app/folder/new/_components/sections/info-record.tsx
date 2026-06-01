import { AssignmentOutlined } from "@mui/icons-material"
import { useRecord } from "../../_context/record-context"

export default function InfoRecordForm() {
  const { recordData, updateRecordData } = useRecord()

  return (
    <section className="bg-white border border-outline-variant p-stack-md shadow-sm relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      <div className="flex items-center gap-2 mb-stack-md">
        <span className="material-symbols-outlined text-primary">
          <AssignmentOutlined />
        </span>
        <h2 className="font-h3 text-h3 text-on-surface">
          Informations sur la condamnation
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="reference" className="font-label-caps text-label-caps text-on-surface-variant">
            Réference du dossier / de la décision<span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="reference"
            placeholder="Ex: RG 12345 / Arrêt n°12"
            value={recordData.record?.caseReference || ""}
            onChange={(e) => updateRecordData({...recordData, record: {...recordData.record, caseReference: e.target.value}})}
            className="w-full h-12 border border-outline-variant px-4 font-body-md focus:border-primary focus:ring-primary focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="type" className="font-label-capst text-label-caps text-on-surface-variant">
            Type de peine<span className="text-error">*</span>
          </label>
          <select
            title="Choix du type de peine"
            name="type"
            id="type"
            value={recordData.record?.offense || ""}
            onChange={(e) => updateRecordData({...recordData, record: {...recordData.record, offense: e.target.value}})}
            className="w-full h-12 border border-outline px-4 font-body-md bg-white focus:border-primary focus:ring-primary focus:ring-1"
          >
            <option disabled defaultValue="Selectionnez le type de peine">Selectionnez le type de peine</option>
            <option value="emprisonnement">Emprisonnement</option>
            <option value="amende">Amende</option>
            <option value="tig">Travaux d&apos;intéret Génerale</option>
            <option value="sursis">Sursis probatoire</option>
          </select>
          <span className="text-xs text-on-surface-variant italic">
            Précisez la nature principale de la sanction
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="time" className="font-label-caps text-label-caps text-on-surface-variant">
              Durée<span className="text-error">*</span>
            </label>
            <input
              title="Champ de la durée de la peine"
              type="number"
              id="time"
              placeholder="Ex: 12 mois"
              value={recordData.record?.sentence || ""}
              onChange={(e) => updateRecordData({...recordData, record: {...recordData.record, sentence: e.target.value}})}
              className="w-full h-12 border border-outline px-4 font-body focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="time" className="font-label-caps text-label-caps text-on-surface-variant">
              Unité<span className="text-error">*</span>
            </label>
            <select
              title="Choix de l'unité"
              name="unit"
              id="unit"
              value={recordData.record?.unit || ""}
              onChange={(e) => updateRecordData({...recordData, record: {...recordData.record, unit: e.target.value}})}
              className="w-full h-12 border border-outline px-4 font-body-md bg-white focus:border-primary focus:ring-primary focus:ring-1"
            >
              <option disabled defaultValue="Selectionnez l'unité">Selectionnez l'unité</option>
              <option value="mois">Mois</option>
              <option value="ans">Ans</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date-decision" className="font-label-caps text-label-caps text-on-surface-variant">
            Date de la décision<span className="text-error">*</span>
          </label>
          <div className="relative">
            <input
              title="Champ de la date de la décision judiciaire"
              type="date"
              id="date-decision"
              placeholder="jj/mm/aaaa"
              value={recordData.record?.dateOfConviction || ""}
              onChange={(e) => updateRecordData({...recordData, record: {...recordData.record, dateOfConviction: e.target.value}})}
              className="w-full h-12 border border-outline px-4 font-body focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="verdict" className="font-label-caps text-label-caps text-on-surface-variant">
            Verdict<span className="text-error">*</span>
          </label>
          <select
              title="Choix du verdict"
              name="verdict"
              id="verdict"
              value={recordData.record?.verdict || ""}
              onChange={(e) => updateRecordData({...recordData, record: {...recordData.record, verdict: e.target.value}})}
              className="w-full h-12 border border-outline px-4 font-body-md bg-white focus:border-primary focus:ring-primary focus:ring-1"
            >
              <option disabled defaultValue="Selectionnez le verdict">Selectionnez le verdict</option>
              <option value="guilty">Coupable</option>
              <option value="not-guilty">Non coupable</option>
            </select>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="verdict" className="font-label-caps text-label-caps text-on-surface-variant">
            Motif de la décision<span className="text-error">*</span>
          </label>
          <textarea
            title="Champ du motif de la décision judiciaire"
            name="motif"
            id="motif"
            placeholder="Description détaillée du motif de la décision judiciaire..." 
            className="w-full border border-outline p-4 font-body-md focus:border-primary">

          </textarea>
        </div>
      </div>
    </section>
  )
}