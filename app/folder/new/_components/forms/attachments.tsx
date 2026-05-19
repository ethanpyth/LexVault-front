import Alerts from "../sections/alert"
import BentoUpload from "../sections/bento-upload"
import FilesList from "../files-list"

export default function Attachments() {
  return (
    <div className="max-w-container-max mx-auto">
      <Alerts />
      <BentoUpload />
      <FilesList />
    </div>
  )
}