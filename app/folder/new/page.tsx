import IdentityForm from "./_components/forms/identity";
import GuidanceAlert from "./_components/guidance-alerts";
import Action from "./_components/actions";
import { createRecord } from "@/app/lib/folder/record/action";

export default function Page() {
  return (
    <form action={createRecord} method="POST">
      <IdentityForm />
      <GuidanceAlert />
      <Action />
    </form>
  )
}