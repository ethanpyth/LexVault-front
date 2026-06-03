'use client'

import { createContext, useContext, useMemo, useState } from "react";

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
    duree: string;
    motif: string;
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

const STORAGE_KEY = 'lexvault_record_data';

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
    duree: '',
    motif: '',
  },
  attachments: [],
  payments: {
    amount: 0,
    method: '',
    idTimbre: '',
  }
}

function getInitialData(): RecordData {
  if (typeof window === 'undefined') return initialRecordData
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch (e) {
      console.error("Failed to load data from localStorage:", e)
    }
  }
  return initialRecordData
}

export default function RecordProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [recordData, setRecordData] = useState<RecordData>(getInitialData)

  const updateRecordData = (values: Partial<RecordData>) => {
    setRecordData((prev) => {
      const updated = {
        ...prev,
        ...values
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }

  const value = useMemo(() => ({ recordData, updateRecordData }), [recordData])

  return (
    <RecordContext.Provider value={value}>
      {children}
    </RecordContext.Provider>
  )
}