import Stat from "./_components/stats"
import MainContentSection from "./_components/main-content-section"
import DetailPanel from "./_components/detail-panel"

const stats = [
  {
    label: "Total Utilisateurs",
    number: "1,240",
    hints: "+2.4%",
  },
  {
    label: "Accès Sensibles",
    number: "42",
    hints: "Vigilance",
  },
  {
    label: "En attente de revue",
    number: "18",
    hints: "Hebdomadaire",
  },
] 

export default function Page() {
  return (
    <main className="flex-1 p-6 lg:p-10 overflow-y-auto bg-surface-bright">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 institutional-border pl-6">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">
            Gestion des habilitations & accès 
          </h2>
          <p className="mt-2 text-on-surface-variant max-w-2xl text-lg">
            Contrôlez les droits d&apos;accès des agents aux systèmes d&apos;information judiciaires sécurisés.
          </p>
        </div>
        <Stat stats={ stats } />
        <MainContentSection/>
        <DetailPanel />
      </div>
    </main>
  )
}