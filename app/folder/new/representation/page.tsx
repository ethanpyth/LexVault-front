import InfoRecordForm from "./_components/sections/info-record"
import InfractionForm from "./_components/sections/infraction"
import InformationalIllustration from "./_components/info-illustration"
import NavigationFooter from "./_components/navigation-footer"
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