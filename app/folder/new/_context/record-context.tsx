'use client'

import { createContext, useContext, useState } from "react";

export type RecordData = {
  identity: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    placeOfBirth: string;
    nin: string;
    nationality: string;
    avenue: string;
    commune: string;
    ville: string;
    country: string;
  };
  record: {
    offense: string;
    sentence: string;
    salle: string;
    juge: string;
    tribunal: string;
    dateOfConviction: string;
    jurisdiction: string;
    infractionDescription?: string;
    penalCode: string;
    caseReference: string;
    verdict: string;
    unit: string;
    infractionGravity: string;
  };
  attachments: File[];
  payments: {
    amount: number;
    method: string;
    idTimbre: string;
  };
};

type RecordContextType = {
  recordData: RecordData;
  updateRecordData: (data: Partial<RecordData>) => void;
}

const RecordContext = createContext<RecordContextType | undefined>(undefined);

export function useRecord() {
  const context = useContext(RecordContext);
  if (!context) {
    throw new Error("useRecord must be used within a RecordContextProvider");
  }
  return context;
}

export default function RecordProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const initialRecordData: RecordData = {
    identity: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      placeOfBirth: '',
      nin: '',
      nationality: '',
      avenue: '',
      commune: '',
      ville: '',
      country: '',
    },
    record: {
      offense: '',
      sentence: '',
      salle: '',
      juge: '',
      tribunal: '',
      dateOfConviction: '',
      jurisdiction: '',
      infractionDescription: '',
      penalCode: '',
      caseReference: '',
      verdict: '',
      unit: '',
      infractionGravity: '',
    },
    attachments: [],
    payments: {
      amount: 0,
      method: '',
      idTimbre: '',
    }
  }

  const [recordData, setRecordData] = useState<RecordData>(initialRecordData)

  const updateRecordData = (values: Partial<RecordData>) => {
    setRecordData((prev) => ({
      ...prev,
      ...values
    }))
  }

  return (
    <RecordContext.Provider value={{ recordData, updateRecordData }}>
      {children}
    </RecordContext.Provider>
  )
}