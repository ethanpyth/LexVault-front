import StatusCard from "../items/status"

const statut = [
  {
    status: "operationnel",
    infrastructure: "Base nationale",
  },
  {
    status: "operationnel",
    infrastructure: "Interconnexion UE"
  },
  {
    status: "maintenance",
    infrastructure: "Archives (Bordeaux)"
  }
]

export default function SystemStatus() {
  return (
    <div className="bg-surface rounded border border-outline-variant p-6 shadow-sm">
      <h3 className="font-bold text-sm mb-4 uppercase tracking-widest text-on-surface-variant">Statut Infrastructure</h3>
      <div className="space-y-4">
        {statut.map((statut, index) => (
          <StatusCard key={index} status={statut}/>
        ))}
        <div className="pt-2">
          <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[94%]"></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[10px] text-outline uppercase font-bold tracking-tight">Disponibilité Syst.</span>
            <span className="text-[10px] text-primary font-bold">99.98%</span>
          </div>
        </div>
      </div>
    </div>
  )
}