'use server'

import { RecordData } from "./types"

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

  try {
    const response = await fetch("/api/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        person: {
          "prenom": firstName,
          "nom": lastName,
          "date_Naissance": dateOfBirth,
          "nin": nin,
          "ville": ville,
          "commune": commune,
          "avenue": avenue,
          "pays": country,
          "nationalite": nationality,
        },
        sentences: {
          "delit": offense,
          "typeSentence": sentence,
          "dateConviction": dateOfConviction,
          "juridiction": jurisdiction,
          "descriptionInfraction": infractionDescription,
          "codePénal": penalCode,
          "uniteDuree": unit,
          "duree": duree,
        },
        folder: {
          "salle": salle,
          "juge": juge,
          "tribunal": tribunal
        },
        infractions: {
          "qualification": infractionDescription,
          "articleViole": penalCode,
          "gravite": infractionGravity,
          "dateInfraction": dateOfConviction
        },
        audience: {
          "dateAudience": dateOfConviction,
          "statut": "EN_COURS",
          "tribunalId": "8ef73450-2be0-48ef-b840-eec29a7e7259",
          "jugeId": "82b77cc9-9321-48fb-bbf7-63c6e4dfbcba"
        },
        decision: {
          "verdict": verdict,
          "gravity": infractionGravity
        }
      }),
    });

    if (!response.ok) {
      console.error("Failed to create record:", response.statusText);
      throw new Error("Failed to create record");
    }
  } catch (error) {
    console.error("Error creating record:", error);
    throw new Error("Failed to create record");
  }

  return { firstName, lastName, dateOfBirth, placeOfBirth, nin };
}