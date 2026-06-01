import { useRecord } from "../../_context/record-context"
import GuidanceAlert from "../guidance-alerts"

export default function IdentityForm() {
  const { recordData, updateRecordData } = useRecord()

  return (
    <>
      <div className="bg-surface-lowest border border-outline-variant shadow-sm rounded-lg overflow-hidden">
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
              value={recordData.identity?.lastName || ""}
              onChange={(e) => updateRecordData({ ...recordData, identity: { ...recordData.identity, lastName: e.target.value } })}
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
              value={recordData.identity?.firstName || ""}
              onChange={(e) => updateRecordData({ ...recordData, identity: { ...recordData.identity, firstName: e.target.value } })}
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
                placeholder="Ex.: 01/01/1970"
                id="dob"
                type="date"
                value={recordData.identity?.dateOfBirth || ""}
                onChange={(e) => updateRecordData({ ...recordData, identity: { ...recordData.identity, dateOfBirth: e.target.value } })}
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
                value={recordData.identity?.placeOfBirth || ""}
                onChange={(e) => updateRecordData({ ...recordData, identity: { ...recordData.identity, placeOfBirth: e.target.value } })}
                className="w-full h-11 px-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="nationality" className="font-label-md text-label-md text-on-surface flex items-center gap-1">
              Nationalité<span className="text-error">*</span>
            </label>
            <input
              name="nationality"
              placeholder="Ex.: Français"
              id="nationality"
              type="text"
              value={recordData.identity?.nationality || ""}
              onChange={(e) => updateRecordData({ ...recordData, identity: { ...recordData.identity, nationality: e.target.value } })}
              className="w-full h-11 px-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="nin" className="font-label-md text-label-md text-on-surface flex items-center gap-1">
              Numéro d&apos;identification nationale<span className="text-error">*</span>
            </label>
            <input
              name="nin"
              placeholder="1 00 00 00 000 000"
              id="nin"
              type="number"
              value={recordData.identity?.nin || ""}
              onChange={(e) => updateRecordData({ ...recordData, identity: { ...recordData.identity, nin: e.target.value } })}
              className="w-full h-11 px-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
            />
            <p className="font-helper-xs text-helper-xs text-on-surface-variant">
              Le NIN est requis pour la vérification automatique dans le Casier Judiciaire National.
            </p>
          </div>
          <div className="pt-4 border-t border-outline-variant">
            <h4 className="font-label-md text-label-md text-primary uppercase mb-4">
              Adresse
            </h4>
            <div className="space-y-6">
              <div className="space-y-1.5">
                <label htmlFor="avenue" className="font-label-md text-label-md text-on-surface flex items-center gap-1">
                  Adresse<span className="text-error">*</span>
                </label>
                <input
                  name="avenue"
                  placeholder="Ex.: 123 Rue de la Paix"
                  id="avenue"
                  type="text"
                  value={recordData.identity?.avenue || ""}
                  onChange={(e) => updateRecordData({ ...recordData, identity: { ...recordData.identity, avenue: e.target.value } })}
                  className="w-full h-11 px-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="commune" className="font-label-md text-label-md text-on-surface flex items-center gap-1">
                    Commune<span className="text-error">*</span>
                  </label>
                  <input
                    name="commune"
                    placeholder="Ex.: France"
                    id="commune"
                    type="text"
                    value={recordData.identity?.commune || ""}
                    onChange={(e) => updateRecordData({ ...recordData, identity: { ...recordData.identity, commune: e.target.value } })}
                    className="w-full h-11 px-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="city" className="font-label-md text-label-md text-on-surface flex items-center gap-1">
                    Ville<span className="text-error">*</span>
                  </label>
                  <input
                    name="city"
                    placeholder="Ex.: Paris"
                    id="city"
                    type="text"
                    value={recordData.identity?.ville || ""}
                    onChange={(e) => updateRecordData({ ...recordData, identity: { ...recordData.identity, ville: e.target.value } })}
                    className="w-full h-11 px-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
                  />
                </div>
                
              </div>
              <div className="space-y-1.5">
                <label htmlFor="postalCode" className="font-label-md text-label-md text-on-surface flex items-center gap-1">
                  Pays<span className="text-error">*</span>
                </label>
                <input
                  name="country"
                  placeholder="Ex.: France"
                  id="country"
                  type="text"
                  value={recordData.identity?.country || ""}
                  onChange={(e) => updateRecordData({ ...recordData, identity: { ...recordData.identity, country: e.target.value } })}
                  className="w-full h-11 px-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GuidanceAlert />
    </>
  );
}
