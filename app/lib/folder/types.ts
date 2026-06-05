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
    motif: string;
  };
  attachments: File[];
  payments: {
    amount: number,
    method: string,
    idTimbre: string,
  }
}

export interface FoldersData {
  data: ({
    personne: {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      nom: string;
      prenom: string;
      dateNaissance: Date | null;
      sexe: 'MASCULIN' | 'FEMININ' | null;
      nationalite: string | null;
      nin: string | null;
      telephone: string | null;
      email: string | null;
      adresseId: string | null;
    };
  } & {
    id: string;
    numeroCasier: string;
    statut: 'TRAVAUX' | 'PRISON' | 'AMENDE' | 'SURSIS';
    dateCreation: Date;
    createdAt: Date;
    updatedAt: Date;
    personneId: string;
  })[],
  meta: {
    page: number,
    pageSize: number,
    total: number,
    pageCount: number,
    hasNext: number,
    hasPrevious: number,
  }
}