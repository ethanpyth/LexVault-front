import { ShieldOutlined, DrawOutlined } from "@mui/icons-material"

export default function Signature() {
  return (
    <div className="bg-tertiary-fixed border-l-4 border-primary p-stack-lg mb-10">
      <div className="flex items-start gap-4">
        <span className="material-symbols-outlined text-primary text-3xl">
          <ShieldOutlined />
        </span>
        <div>
          <h4 className="font-label-md text-label-md text-primary mb-2">
            Authentification et Signature Certifiée
          </h4>
          <p className="font-body-md text-body-md text-on-tertiary-fixed-variant mb-6">
            En cliquant sur &quot;Valider et Signer&quot;, vous certifiez sur l&apos;honneur l&apos;exactitude des informations fournies. L&apos;acte sera scellé numériquement avec une empreinte horodatée conforme au Référentiel Général de Sécurité (RGS).
          </p>
          <div className="flex items-center gap-4 mb-8">
            <input
              type="checkbox"
              name="consent"
              title="consent"
              className="w-5 h-5 rounded-none border-outline text-primary focus:ring-primary"
              id="consent"
            />
            <label
              htmlFor="consent"
              className="text-sm font-medium text-on-surface"
            >
              Je consens à l&apos;usage de la signature électronique pour cet enregistrement.
            </label>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              title="Bouton de validation"
              className="bg-blue-900 text-white font-button text-button px-stack-lg py-3 hover:bg-opacity-90 transition-all items-center justify-center gap-2 uppercase tracking-widest"
            >
              <span className="material-symbols-outlined">
                <DrawOutlined />
              </span>
            </button>
            <button
              type="button"
              title="Bouton de téléchargement de la signnature"
              className="border-blue-900 border bg- text-blue-900 font-button text-button px-stack-lg py-3 hover:bg- transition-all uppercase tracking-widest"
            >
              Télécharger le brouillon PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}