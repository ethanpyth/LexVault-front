import StatCard, { StatCardProps } from "./card/stat-card"

export default function Stat({ stats }: Readonly<{ stats: StatCardProps[] }>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-18">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          statCard={stat}
        />
      ))}
    </div>
  )
}