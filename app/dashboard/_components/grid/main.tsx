import { getAuditPerPage } from '@/app/lib/audits/action'
import Traceability from '../cards/recent-activity'
import { SideWidget } from '../cards/side-widget'
import { Audit } from '@/app/lib/types'

export default async function Grid() {
  const recentActivities = await getAuditPerPage({ page: '1', pageSize: '5' })
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Traceability activities={recentActivities.data} />
      <SideWidget />
    </div>
  )
}