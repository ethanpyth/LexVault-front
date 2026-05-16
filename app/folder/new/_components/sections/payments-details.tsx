export default function PaymentDetail() {
  return (
    <section className="bg-surface-lowest border border-outline-variant overflow-hidden">
      <div className="bg-surface-low px-stack-lg py-stack-md border-b border-outline-variant">
        <h3 className="font-label-md text-label-md text-primary uppercase tracking-tight">
          Détails des frais de greffe
        </h3>
      </div>
      <div className="p-stack-lg space-y-stack-md">
        <div className="flex justify-between items-center py-2 border-b border-outline-variant border-dashed">
          <span className="font-body-md text-body-md">Droits d&apos;enregistrement fixe</span>
          <span className="font-label-md text-label-md">120,00 €</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-outline-variant border-dashed">
          <span className="font-body-md text-body-md">Taxe pour le développement de la formation professionnelle</span>
          <span className="font-label-md text-label-md">15,00 €</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-outline-variant border-dashed">
          <span className="font-body-md text-body-md">Frais d&apos;expédition et de timbre (Numérique)Frais d&apos;expédition et de timbre (Numérique)</span>
          <span className="font-label-md text-label-md">4,50 €</span>
        </div>
        <div className="flex justify-between items-center pt-4">
          <span className="font-headline-md text-headline-md text-primary">Total à régler</span>
          <span className="font-headline-md text-headline-md text-primary">139,50 €</span>
        </div>
      </div>
    </section>
  )
}