'use client'

import Breadcrumbs from "./_components/container/breadcrumbs"
import HeaderProfileCard from "./_components/card/header-profile-card"
import RecordsTimeline from "./_components/container/records-timeline"
import SidebarInfo from "./_components/sidebar-info"

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <HeaderProfileCard />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <RecordsTimeline />
        <SidebarInfo />
      </div>
    </>
  )
}