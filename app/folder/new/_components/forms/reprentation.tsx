import InfoRecordForm from "../sections/info-record"
import InfractionForm from "../sections/infraction"
import InformationalIllustration from "../info-illustration"
import NavigationFooter from "../navigation-footer"
import { createRepresentation } from "@/app/lib/folder/representation/action"

export default function Page() {
  return (
    <form action={createRepresentation} method="POST" className="grid grid-cols-1 gap-stack-md">
      <InfoRecordForm />
      <InfractionForm />
      <InformationalIllustration />
      <NavigationFooter />
    </form>
  )
}