type MetricCardProps = {
  label: string,
  number: number,
  hint: string,
  color: string,
}

export default function MetricCard({ metric }: Readonly<{ metric: MetricCardProps }>) {
  return (
    <div className={`bg-surface-container-lowest p-6 rounded-lg border-b-4 border-${metric.color} shadow-sm`}>
      <p className="text-xs font-bold text-outline-variant uppercase mb-2">
        {metric.label}
      </p>
      <div className="flex items-end gap-2">
        <p className="text-3xl font-black">{metric.number}</p>
        <span className="text-emerald-600 text-sm font-bold pb-1">
          {metric.hint}
        </span>
      </div>
    </div>
  )
}