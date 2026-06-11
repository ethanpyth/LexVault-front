'use client'

import AdministrativeActionsCard from "./card/administrative-actions-card"
import AccessLogCard from "./card/access-log-card"

export default function SidebarInfo() {
  return (
    <div className="space-y-8">
      <AdministrativeActionsCard />
      <AccessLogCard />
    </div>
  )
}