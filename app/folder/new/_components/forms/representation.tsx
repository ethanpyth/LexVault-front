import InfoRecordForm from "../sections/info-record"
import InfractionForm from "../sections/infraction"
import InformationalIllustration from "../info-illustration"
import NavigationFooter from "../navigation-footer"

export default function Representation() {
  return (
    <>
      <InfoRecordForm />
      <InfractionForm />
      <InformationalIllustration />
      <NavigationFooter />
    </>
  )
}