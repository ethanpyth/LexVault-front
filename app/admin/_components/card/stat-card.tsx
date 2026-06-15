type StatCardProps = {
  label: string,
  number: string
  hints: string
}

export default function StatCard({ statCard }: Readonly<{ statCard: StatCardProps }>) {
  return (
    <div className="bg-surface-container-lowest p-6 border border-outline-variant shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-on-surface-variant font-bold text-xs uppercase tracking-wider">
          {statCard.label}
        </span>
        <span className="text-primary text-xs font-black bg-primary-fixed px-2 py-1">{ statCard.hints }</span>
      </div>
      <p className="text-primary text-xs font-black bg-primary-fixed px-2 py-1">{ statCard.hint }</p>
    </div>
  )
}