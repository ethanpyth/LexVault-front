'use client'

import router from "next/router";
import { ActivityItem } from "../items/activity";
import { EditNoteOutlined, AssignmentTurnedInOutlined, WarningOutlined, VisibilityOutlined } from "@mui/icons-material";
import { redirect } from "next/navigation";

const activities = [
  {
    id: 1,
    label: "Jean Dupont",
    type: "a créé un nouveau document",
    timestamp: "Il y a 2 heures",
    description: "Le document 'Accord de confidentialité' a été ajouté à la bibliothèque.",
    icon: EditNoteOutlined
  },
  {
    id: 2,
    label: "a modifié le document",
    type: "Jean Dupont",
    description: "Le document 'Contrat de travail' a été mis à jour avec de nouvelles clauses.",
    timestamp: "Il y a 4 heures",
    icon: AssignmentTurnedInOutlined
  },
  {
    id: 3,
    label: "a supprimé le document",
    type: "Jean Dupont",
    description: "Le document 'Politique de confidentialité' a été supprimé de la bibliothèque.",
    timestamp: "Il y a 1 jour",
    icon: WarningOutlined
  },
  {
    id: 4,
    label: "",
    type: "a partagé le document 'Conditions d'utilisation' avec l'équipe",
    description: "Le document 'Conditions d'utilisation' a été partagé avec les membres de l'équipe.",
    timestamp: "Il y a 3 jours",
    icon: VisibilityOutlined
  },
];

export default function Traceability() {
  return (
    <div className="lg:col-span-2 bg-surface rounded border border-outline-variant shadow-sm">
      <div className="p-6 border-b border-outline-variant flex justify-between items-center">
        <h3 className="font-bold text-lg flex items-center gap-2">Flux de tracabilité</h3>
        <button 
          type="button"
          onClick={() => redirect('/admin/audits')}
          className="text-xs text-primary font-bold uppercase hover:underline"
        >
            Voir tout l&apos;historique
        </button>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {activities.map(activity => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  )
}