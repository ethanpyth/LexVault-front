'use client'

import IdentityForm from "./_components/forms/identity";
import Representation from "./_components/forms/representation"
import Attachments from "./_components/forms/attachments"
import Payments from "./_components/forms/payments"
import Confirmation from "./_components/forms/confirmation"
import Action from "./_components/actions";
import ProgressHeader from "./_components/progress-header"
import { createRecord } from "@/app/lib/folder/record/action";
import RecordProvider from "./_context/record-context";
import { use } from "react";

type PageProps = {
  searchParams: Promise<{
    stepNumber: string;
    stepLabel: string;
  }>;
};

const formsHeader = {
  "identity" : {
    title: "Identification du condamné",
    description: "Veuillez saisir les informations d'identité officielles telles qu'elles figurent dans les registres d'état civil.",
    number: 1,
  },
  "record" : {
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

export default function Page({ searchParams }:  Readonly<PageProps> ) {
  const resolvedParams = use(searchParams) || {stepNumber: "1", stepLabel: "identity"}
  const stepLabel = resolvedParams.stepLabel || "identity"
  const formHeader = formsHeader[stepLabel as keyof typeof formsHeader] || formsHeader["identity"]

  return (
    <RecordProvider>
      <div
        className={`mx-auto 
          ${stepLabel === "representation" ? "max-w-200 pt-stack-md"
            : stepLabel === "identity" ? "max-w-180 px-gutter py-12"
              : stepLabel === "attachments" ? "max-w-container-max"
                : stepLabel === "payments" ? "max-w-container-max py-10 px-gutter"
                  : "max-w-container-max py-margin-desktop px-gutter"}`}
      >
        <ProgressHeader progressHeader={formHeader} />
        <form action={createRecord} method="POST">
          {(stepLabel === "identity") && <IdentityForm />}
          {(stepLabel === "representation") && <Representation />}
          {(stepLabel === "attachments") && <Attachments />}
          {(stepLabel === "payments") && <Payments />}
          {(stepLabel === "confirmation") && <Confirmation />}
          
          <Action currentStep={formHeader.number} />
        </form>
      </div>
    </RecordProvider>
  )
}