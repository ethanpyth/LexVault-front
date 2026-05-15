import DropZone from "../dropzone"
import HelpSidebar from "../help-sidebar"

export default function BentoUpload() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
      <DropZone />
      <HelpSidebar />
    </div>
  )
}