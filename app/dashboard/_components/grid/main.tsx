import Traceability from '../cards/recent-activity'
import { SideWidget } from '../cards/side-widget'
import SystemStatus from '../cards/system-status'

export default function Grid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Traceability />
      <SideWidget />
    </div>
  )
}