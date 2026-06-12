'use server'

import Breadcrumbs from "./_components/container/breadcrumbs"
import HeaderProfileCard from "./_components/card/header-profile-card"
import RecordsTimeline from "./_components/container/records-timeline"
import SidebarInfo from "./_components/sidebar-info"
import { redirect } from "next/navigation"
import { getFolderByCJNumber } from "@/app/lib/folder/actions"

export default async function Page({ params }: Readonly<{ params: Promise<{ cjNumber?: string }>}>) {
  const { cjNumber } = await params
  console.log("CJ NUMBER =", cjNumber)


  if (!cjNumber) {
    redirect('/dashboard')
  }


  const folder = await getFolderByCJNumber(cjNumber)

  const nbc = folder?.decision?.filter(
    (decision: { typeDecision: string }) => decision.typeDecision === "CONDAMNATION"
  ).length ?? 0;

  return (
    <>
      <Breadcrumbs />
      <HeaderProfileCard
        nom={folder.personne.nom}
        birthday={folder.personne.birthday}
        pob={folder.personne.nationalite}
        country={folder.personne.nationalite}
        cjNumber={folder.numeroCasier}
        nbc={nbc}
        nbp={""}
        status={folder.statut}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <RecordsTimeline />
        <SidebarInfo />
      </div>
    </>
  )
}