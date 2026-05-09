'use client'

import { FolderShared, Gavel, Update } from "@mui/icons-material";
import Card from "../cards/stat-card";

const stats = [
  {
    title: "Total Dossiers Nationaux",
    value: "1,234",
    info: "+5%",
    icon: FolderShared
  },
  {
    title: "Nouvelles décisions",
    value: "567",
    info: "Aujourd'hui",
    icon: Gavel
  },
  {
    title: "Mise à jour récente",
    value: "28",
    info: "Dernière Heure",
    icon: Update
  }, 
]

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Card 
          key={index}
          title={stat.title.toUpperCase()}
          value={stat.value}
          info={stat.info}
          icon={<stat.icon />}
        />
      ))}
    </div>
  )
}