import { EventSeatOutlined } from "@mui/icons-material"
import { useRecord } from "../../_context/record-context"

export default function AudiencesForm() {
  const { recordData, updateRecordData } = useRecord()

  return (
    <section className="bg-white border border-outline-variant p-stack-md shadow-sm relative">
      <div className="abslute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      <div className="flex items-center gap-2 mb-stack-md">
        <span className="material-symbols-outlined text-primary">
          <EventSeatOutlined />
        </span>
        <h2 className="font-h3 text-h3 text-on-surface">
          Audiences
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
        <div className="flex flex-col gap-2">
          <label htmlFor="tribunal" className="font-label-caps text-label-caps text-on-surface-variant">
            Tribunal<span className="text-error">*</span>
          </label>
          <select
            title="tribunal"
            name="tribunal"
            id="tribunal"
            value={recordData.record?.tribunal || ""}
            onChange={(event) => updateRecordData({...recordData, record: {...recordData.record, tribunal: event.target.value}})}
            className="w-full h-12 border-outline-variant px-4 font-body-md bg-white focus:border-primary focus:ring-1 focus:ring-primary"
          >
            <option disabled value="">
              Selectionnez le tribunal
            </option>
            <option value="tribunal de grande instance">Tribunal de grande instance de Kinshasa</option>
            <option value="tribunal de commerce">Tribunal de commerce de Kinshasa</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="salle" className="font-label-caps text-label-caps text-on-surface-variant">
            Salle<span className="text-error">*</span>
          </label>
          <input
            type="text"
            title="salle"
            name="salle"
            id="salle"
            value={recordData.record?.salle || ""}
            placeholder="Ex: Salle 1"
            onChange={(event) => updateRecordData({...recordData, record: {...recordData.record, salle: event.target.value}})}
            className="w-full h-12 border border-outline px-4 font-body-md focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="juge"
            className="font-label-caps text-label-caps text-on-surface-variant"
          >
            Juge<span className="text-error">*</span>
          </label>
          <input
            title="juge"
            type="text"
            placeholder="Nom du juge"
            name="juge"
            id="juge"
            value={recordData.record?.juge || ""}
            onChange={(event) => updateRecordData({...recordData, record: {...recordData.record, juge: event.target.value}})}
            className="w-full h-12 border border-outline px-4 font-body-md focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>
    </section>
  )
}