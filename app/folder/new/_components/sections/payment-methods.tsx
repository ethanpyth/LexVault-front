import { ConfirmationNumberOutlined, CreditCardOutlined } from "@mui/icons-material"
import { useRecord } from "../../_context/record-context"

export default function PaymentMethodSection() {
  const { recordData, updateRecordData } = useRecord()
  
  return (
    <section className="bg-surface-lowest border border-outline-variant">
      <div className="bg-surface-low px-stack-lg py-stack-md border-b border-outline-variant">
        <h3 className="font-label-md text-label-md text-primary uppercase tracking-tight">
          Modes de paiement
        </h3>
      </div>
      <div className="p-stack-lg space-y-stack-md">
        <label htmlFor="payment_method" className="block cursor-pointer group">
          <div className="flex items-center gap-stack-md p-stack-md border-outline-variant group:hover:border-primary">
            <input
              name="payment_method"
              id="payment_method"
              type="text"
              value={recordData.payments?.method || ""}
              onChange={(e) => updateRecordData({...recordData, payments: {...recordData.payments, method: e.target.value}})}
              className="text-primary focus:ring-primary h-5 w-5"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-label-md text-label-md">
                  Timbre fiscal éléctronique
                </span>
                <span className="material-symbols-outlined text-primary">
                  <ConfirmationNumberOutlined />
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mt-1">
                Saisie du code à 16 chiffres
              </p>
            </div>
          </div>
        </label>
        <label htmlFor="payment_method" className="block cursor-pointer group">
          <div className="flex items-center gap-stack-md p-stack-md border-outline-variant group:hover:border-primary">
            <input
              name="payment_method"
              id="payment_method"
              type="text"
              value={recordData.payments?.method || ""}
              onChange={(e) => updateRecordData({...recordData, payments: {...recordData.payments, method: e.target.value}})}
              className="text-primary focus:ring-primary h-5 w-5"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-label-md text-label-md">
                  Carte bancaire
                </span>
                <span className="material-symbols-outlined text-primary">
                  <CreditCardOutlined />
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mt-1">
                Visa, Mastercard, CB
              </p>
            </div>
          </div>
        </label>
        <div className="pt-stack-md">
          <label htmlFor="id_timbre" className="font-label-md text-label-md text-on-surface block mb-2">
            Identifiant du timbre (si applicable)
          </label>
          <input
            type="text"
            name="id_timbre"
            placeholder="Ex: 1234 5678 9012 3456"
            value={recordData.payments?.idTimbre || ""}
            onChange={(e) => updateRecordData({...recordData, payments: {...recordData.payments, idTimbre: e.target.value}})}
            className="w-full h-11 border border-outline-variant px-stack-md focus:border-primary focus:ring-1 focus:ring-primary rounded"
          />
        </div>
      </div>
    </section>
  )
}