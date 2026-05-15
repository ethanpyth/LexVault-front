'use client'

import Header from "./_components/header"
import SideBar from "./_components/sidebar";
import ProgressHeader from "./_components/progress-header"
import { usePathname } from "next/navigation";

const formsHeader = {
  "new" : {
    title: "Identification du condamné",
    description: "Veuillez saisir les informations d'identité officielles telles qu'elles figurent dans les registres d'état civil.",
    number: 1,
  },
  "representation" : {
    title: "Détails de la décision",
    description: "Caractéristiques de la condamnation",
    number: 2,
  },
  "attachments" : {
    title: "Pièces jointes",
    description: "Veuillez founir les documents justificatifs nécessaires à l'instruction de votre dossier judiciaire.",
    number: 3,
  },
  "payments" : {
    title: "Reglements des frais de dossiers",
    description: "Veuillez vérifier le récapitulatif des frais administratifs et choisir votre mode de paiement pour finaliser l'enregistrement",
    number: 4,
  },
  "confirmation" : {
    title: "Validation et signature electronique",
    description: "Veuillez saisir les informations d'identité officielles telles qu'elles figurent dans les registres d'état civil.",
    number: 5,
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const urlLastPart = pathname.replace(/\/$/, '').split('/').at(-1) ?? "";

  const formHeaderInfo = formsHeader[urlLastPart as keyof typeof formsHeader];

  return (
      <div>
        <Header />
        <div className="grow flex flex-col md:flex-row max-w-container-max mx-auto w-full relative">
          <SideBar />
          <main className="grow lg:ml-80 pt-16 px-gutter pb-stack-lg">
            <div className="max-w-200 mx-auto pt-stack-md">
              <ProgressHeader progressHeader={formHeaderInfo} />
              {children}
            </div>
          </main>
        </div>
      </div>
  );
}