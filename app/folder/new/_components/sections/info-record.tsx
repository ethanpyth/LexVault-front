import { AssignmentOutlined, CalendarTodayOutlined } from "@mui/icons-material"

export default function InfoRecordForm() {
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
        <div className="flex flex-col gap-2">
          <label htmlFor="type" className="font-label-capst text-label-caps text-on-surface-variant">
            Type de peine<span className="text-error">*</span>
          </label>
          <select
            title="Choix du type de peine"
            name="type"
            id="type"
            className="w-full h-12 border border-outline px-4 font-body-md bg-white focus:border-primary focus:ring-primary focus:ring-1"
          >
            <option disabled defaultValue="Selectionnez le type de peine">Selectionnez le type de peine</option>
            <option value="emprisonnement"></option>
            <option value="amende">Amende</option>
            <option value="tig">Travaux d&apos;intéret Génerale</option>
            <option value="sursis">Sursis probatoire</option>
          </select>
          <span className="text-xs text-on-surface-variant italic">
            Précisez la nature principale de la sanction
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="time" className="font-label-caps text-label-caps text-on-surface-variant">
            Durée / montant<span className="text-error">*</span>
          </label>
          <input
            title="Champ de la durée de la peine"
            type="text"
            id="time"
            placeholder="Ex: 12 mois / 1500 €"
            className="w-full h-12 border border-outline px-4 font-body focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="font-label-caps text-label-caps text-on-surface-variant">
            Date de la décision<span className="text-error">*</span>
          </label>
          <div className="relative">
            <input
              title="Champ de la date de la décision judiciaire"
              type="text"
              id=""
              placeholder="Ex: 12 mois / 1500 €"
              className="w-full h-12 border border-outline px-4 font-body focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <span className="absolute right-4 top-3 material-symbols-outlined text-outline pointer-events-none">
              <CalendarTodayOutlined />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}