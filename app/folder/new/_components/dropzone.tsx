import { UploadFileOutlined } from "@mui/icons-material"
import { useRecord } from "../_context/record-context"

export default function DropZone() {
  const { recordData, updateRecordData } = useRecord()

  return (
    <div className="md:col-span-8 bg-surface-lowest border-2 border-dashed border-outline-variant p-10 flex flex-col items-center justify-center rounded-lg hover:border-primary transitions-colors cursor-pointer group">
      <span className="material-symbols-outlined text-outline group-hover:text-primary text-5xl mb-4 transition-colors">
        <UploadFileOutlined />
      </span>
      <div className="text-center">
        <p className="font-headline-md text-primary mb-2">
          Glissez-déposez vos fichiers ici
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Ou parcourez vos dossiers locaux pour sélectionner des pièces
        </p>
      </div>
      <button
        title="Bouton de sélectioon de documents"
        type="button"
        className="mt-6 px-6 py-3 bg-primary text-on-primary font-label-md uppercase tracking-widest shadow-md hover:opacity-90"
      >
        Sélectionner des documents
      </button>
    </div>
  )
}