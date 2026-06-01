export interface RecordData {
  identity: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    placeOfBirth: string;
    nin: string;
    ville: string;
    commune: string;
    avenue: string;
    country: string;
    nationality: string;
  };
  record: {
    offense: string;
    sentence: string;
    dateOfConviction: string;
    jurisdiction: string;
    infractionDescription?: string;
    penalCode: string;
    salle: string;
    juge: string;
    tribunal: string;
    verdict: string;
    unit: string;
    infractionGravity: string;
    duree: string;
  };
  attachments: File[];
  payments: {
    amount: number;
    method: string;
    idTimbre: string;
  };
}