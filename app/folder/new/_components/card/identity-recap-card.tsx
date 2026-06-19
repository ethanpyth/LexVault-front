'use client'

import { useRecord } from "../../_context/record-context"

export default function IdentityRecapCard() {
  const { recordData, updateRecordData } = useRecord()
  
  return (
    <div className="bg-surface-lowest border border-outline-variant overflow-hidden">
      <div className="bg-surface-low border-b border-outline-variant px-stack-lg py-3 flex justify-between items-center">
        <h3 className="font-label-md text-label-md text-blue-900">
          Récapitulatif de l&apos;Identité
        </h3>
        <button
          type="button"
          title="Bouton de modification"
          className="text-blue-900 text-xs font-bold hover:underline"
        >
          Modifier
        </button>
      </div>
      <div className="p-stack-lg space-y-4">
        <div className="flex justify-between border-b border-surface-container py-2">
          <span className="text-on-secondary-container font-label-caps text-[10px] uppercase">Nom Complet</span>
          <span className="font-body text-body-md font-bold">{recordData.identity.firstName} { recordData.identity.lastName }</span>
        </div>
        <div className="flex justify-between border-b border-surface-container py-2">
          <span className="text-on-secondary-container font-label-caps text-[10px] uppercase">Né le</span>
          <span className="font-body text-body-md font-bold">{ recordData.identity.dateOfBirth.toString() }</span>
        </div>
        <div className="flex justify-between border-b border-surface-container py-2">
          <span className="text-on-secondary-container font-label-caps text-[10px] uppercase">Lieu de naissance</span>
          <span className="font-body text-body-md font-bold">{ recordData.identity.placeOfBirth } (75015)</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-on-secondary-container font-label-caps text-[10px] uppercase">Nationalité</span>
          <span className="font-body text-body-md font-bold">{ recordData.identity.nationality }</span>
        </div>
      </div>
    </div>
  )
}