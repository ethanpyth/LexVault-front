'use server'

import { API_BASE_URL } from "../config"
import { FoldersData, RecordData } from "./types"

export async function createRecord(recordData: RecordData) {
  const firstName = recordData.identity.firstName
  const lastName = recordData.identity.lastName
  const dateOfBirth = recordData.identity.dateOfBirth
  const placeOfBirth = recordData.identity.placeOfBirth
  const nationality = recordData.identity.nationality
  const nin = recordData.identity.nin;
  const ville = recordData.identity.ville;
  const commune = recordData.identity.commune;
  const avenue = recordData.identity.avenue;
  const country = recordData.identity.country;

  const offense = recordData.record.offense
  const sentence = recordData.record.sentence
  const dateOfConviction = recordData.record.dateOfConviction
  const jurisdiction = recordData.record.jurisdiction
  const infractionDescription = recordData.record.infractionDescription
  const penalCode = recordData.record.penalCode
  const salle = recordData.record.salle
  const juge = recordData.record.juge
  const tribunal = recordData.record.tribunal
  const verdict = recordData.record.verdict
  const unit = recordData.record.unit
  const infractionGravity = recordData.record.infractionGravity
  const duree = recordData.record.duree
  const motif = recordData.record.motif
  const amount = recordData.payments.amount

  console.log(
    JSON.stringify(recordData, null, 2)
  );

  console.log("FINAL PAYLOAD:", recordData)

  const payload = {
    person: {
      "prenom": firstName,
      "nom": lastName,
      "dateNaissance": dateOfBirth,
      "nin": nin,
      "ville": ville,
      "commune": commune,
      "avenue": avenue,
      "pays": country,
      "nationalite": nationality,
    },
    sentences: {
      "typeSentence": offense,
      "dateSentence": dateOfConviction,
      "uniteDuree": unit,
      "duree": Number(duree),
      "montant": amount,
    },
    infractions: [
      {
        "qualification": offense,
        "articleViole": penalCode,
        "gravite": infractionGravity,
        "dateInfraction": dateOfConviction
      }
    ],
    audiences: {
      "dateAudience": dateOfConviction,
      "statut": "EN_COURS",
      "tribunalId": "4de4cc0e-ff46-40ff-96e9-0baddd22f901",
      "jugeId": "95a87fe8-1733-43f0-ab6c-7117a31f16d7"
    },
    decisions: {
      "reference": `REF-${Date.now()}`,
      "verdict": verdict,
      "contenu": `Le prévenu a été condamné à ${duree} ${unit} pour l'infraction suivante : ${offense}. Description de l'infraction : ${infractionDescription}`,
      "motif": motif,
      "typeDecision": "CONDAMNATION",
      "dateDecision": dateOfConviction
    }
  };

  console.log("Sending to:", `${API_BASE_URL}/folder/all`);

  try {
    const response = await fetch(`${API_BASE_URL}/folder/all`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(30000),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("STATUS:", response.status);
      console.error("STATUS TEXT:", response.statusText);
      console.error("BODY:", errorText);
      throw new Error(`Failed (${response.status}): ${errorText}`);
    }

    console.log("Record created successfully");
    return { success: true, firstName, lastName, dateOfBirth, placeOfBirth, nin };
  } catch (error) {
    console.error("Error creating record:", error);
    throw error;
  }
}

export async function getFolders({
  page,
  pageSize,
  firstName,
  lastName,
  nin,
  birthday
}: {
    page: string,
    pageSize: string,
    firstName?: string,
    lastName?: string,
    birthday?: string,
    nin?: string
}): Promise<FoldersData> {
  const params = new URLSearchParams()

  params.set("page", String(page))
  params.set("pageSize", String(pageSize))

  if (firstName) params.set("firstName", firstName)
  if (lastName) params.set("lastName", lastName)
  if (birthday) params.set("birthday", birthday)
  if (nin) params.set("nin", nin)

  try {
    const response = await fetch(`${API_BASE_URL}/folder?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store"
    })

    const data = response.json() 

    console.log(data)

    return data
  } catch (e) {
    throw e
  }
}

export async function getFolderByCJNumber(cjNumber: string) {
  if (cjNumber.length <= 6) {
    throw new Error("Le champ ne doit pas etre vide et doit contenir au moins 14 caractères")
  }

  try {
    const response = await fetch(`${API_BASE_URL}/folder/${cjNumber}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store"
    })
    
    return response.json()
  } catch (e) {
    throw e
  }
}