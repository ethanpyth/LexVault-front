import MetricCard from "../card/metrics-card"

const metrics = [
  {
    label: "Total actions",
    hint: "",
    number: 12842,
    color: "primary",
  },
  {
    label: "Dernières heures",
    hint: "+12 %",
    number: 124,
    color: "primary",
  },
  {
    label: "Total actions",
    hint: "",
    number: 12842,
    color: "on-tertiary-container",
  },
  {
    label: "Total actions",
    hint: "",
    number: 12842,
    color: "primary",
  },
]

export default function Metrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} metric={metric} />
      ))}
    </div>
  )
}