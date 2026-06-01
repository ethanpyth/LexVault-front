import InfoRecordForm from "../sections/info-record"
import InfractionForm from "../sections/infraction"
import InformationalIllustration from "../info-illustration"
import AudiencesForm from "../sections/audiences"

export default function Representation() {
  return (
    <div className="grid grid-cols-1 gap-stack-md">
      <AudiencesForm />
      <InfoRecordForm />
      <InfractionForm />
      <InformationalIllustration />
    </div>
  )
}