'use client'

import { SvgIconComponent } from "@mui/icons-material";
import { ActivityItem } from "../items/activity";
import { redirect } from "next/navigation";
import { Audit } from "@/app/lib/types";

type ActivityProps = {
  id: string,
  label: string,
  type: string,
  description: string,
  timestamp: string,
  icon: SvgIconComponent
}

export default function Traceability({ activities }: Readonly<{ activities: Audit[] }>) {
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
            <ActivityItem
              key={activity.id}
              activity={{
                id: activity.user.username,
                timestamp: activity.dateAction,
                type: activity.action,
                label: activity.entite,
                description: activity.ancienneValeur ?? '',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}