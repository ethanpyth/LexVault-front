import GuidanceAlert from "../guidance-alerts"

export default function IdentityForm() {
  return (
    <>
    <div className="">
      <div className="bg-surface-lowest border-outline-variant shadow-sm rounded-lg overflow-hidden">
        <div className="bg-surface-low px-6 py-4 border-b border-outline-variant">
          <h3 className="font-label-md text-label-md text-primary uppercase">
            Informations Personnelles
          </h3>
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-1.5">
            <label htmlFor="last_name" className="font-label-md text-label-md text-on-surface flex items-center gap-1">
              Nom de famille<span className="text-error">*</span>
            </label>
            <input
              name="last_name"
              placeholder="Ex.: DUPONT"
              id="last_name"
              type="text"
              className="w-full h-11 px-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="first_name" className="font-label-md text-label-md text-on-surface flex items-center gap-1">
              Prénom<span className="text-error">*</span>
            </label>
            <input
              name="first_name"
              placeholder="Ex.: Jean, Michel"
              id="first_name"
              type="text"
              className="w-full h-11 px-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label htmlFor="dob" className="font-label-md text-label-md text-on-surface flex items-center gap-1">
                Date de naissance<span className="text-error">*</span>
              </label>
              <input
                name="dob"
                placeholder="Ex.: Jean, Michel"
                id="dob"
                type="date"
                className="w-full h-11 px-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="pob" className="font-label-md text-label-md text-on-surface flex items-center gap-1">
                Lieu de naissance<span className="text-error">*</span>
              </label>
              <input
                name="pob"
                placeholder="Ex.: paris"
                id="pob"
                type="text"
                className="w-full h-11 px-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="last_name" className="font-label-md text-label-md text-on-surface flex items-center gap-1">
              Numéro d&apos;identification nationale<span className="text-error">*</span>
            </label>
            <input
              name="first_name"
              placeholder="1 00 00 00 000 000"
              id="first_name"
              type="text"
              className="w-full h-11 px-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
            />
            <p className="font-helper-xs text-helper-xs text-on-surface-variant">
              Le NIN est requis pour la vérification automatique dans le Casier Judiciaire National.
            </p>
          </div>
        </div>
      </div>
      </div>
      <GuidanceAlert />
    </>
  )
}