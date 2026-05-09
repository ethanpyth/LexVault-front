import SearchWidget from "./search-widget"
import SystemStatus from "./system-status"
import QuickLinks from "./quick-links"

export function SideWidget() {
  return (
    <div className="space-y-6">
      <SearchWidget />
      <SystemStatus />
      <QuickLinks />
    </div>
  )
}