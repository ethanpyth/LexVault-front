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

export interface Folder {
    id: string,
    numeroCasier: string,
    statut: "SUSPENDU" | "ARCHIVE" | "ACTIF",
    dateCreation: string,
    createdAt: string,
    updatedAt: string,
    personneId: string,
    personne: Personne,
    infractions: Infraction[],
    audiences: Audience[],
    decisions: Decision[]
}

export interface Infraction {
  id: string,
  qualification: string,
  articleViole: string,
  description: string | null,
  gravite: string,
  dateInfraction: string,
  lieu: string | null,
  createdAt: string,
  updatedAt: string,
  casierId: string
}

export interface Audience {
  id: string,
  dateAudience: string,
  salle: string | null,
  jugeId: string,
  statut: "EN_COURS" | "EN_ATTENTE" | "TERMINE",
  createdAt: string,
  updatedAt: string,
  tribunalId: string,
  casierId: string,
  userId: string | null
}

export interface Decision {
  id: string,
  reference: string,
  contenu: string,
  dateDecision: string,
  typeDecision: string,
  verdict: string,
  motivation: string,
  audienceId: string,
  casierId: string,
  createdAt: string,
  updatedAt: string
}

export interface Personne {
  id: string,
  nom: string,
  prenom: string,
  dateNaissance: string,
  sexe: string,
  nationalite: string,
  nin: string,
  telephone: string,
  email: string,
  createdAt: string,
  updatedAt: string,
  adresseId: string
}

export interface User {
  id : string,
  username : string,
  passwordHash : string
  role : Role,
  isActive : boolean,
  lastLogin : Date,
  createdAt : Date,
  updatedAt : Date,
  personneId : string,
  personne : Personne,
}

export enum Role {
  ADMIN,
  GREFFIER,
  JUGE,
  PROCUREUR,
  ACCUSE,
}