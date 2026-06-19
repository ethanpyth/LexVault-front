'use client'

import { useRouter, useSearchParams } from "next/navigation"
import TRow from "./trow"
import { Personne, Role } from "@/app/lib/types"

export type UserProps = {
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

export type PaginationProps = {
  page: number,
  pageCount: number,
  total: number,
  pageSize: number,
}

export default function Table({ pagination, users }: Readonly<{ pagination: PaginationProps, users: UserProps[] }>) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const goToPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set("page", String(newPage))
    router.push(`?${params.toString()}`)
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Agent</th>
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Role principal</th>
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Accès BD</th>
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Statut</th>
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {(users ?? []).map((user, index) => (
              <TRow
                key={index}
                user={{
                  nom: user.personne.nom,
                  prenom: user.personne.prenom,
                  email: user.personne.email,
                  statut: "ACTIF",
                  role: user.role.toString()
                }}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-5 bg-surface-container-low border-t border-outline-variant flex items-center justify-between">
        <p className="text-sm font-bold text-on-surface-variant">
          Affichage de { Math.min(1, pagination.pageCount * pagination.pageSize) } - { Math.max(pagination.pageCount * pagination.pageSize, pagination.total) } sur { pagination.total } agents
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            title="Précedent"
            onClick={() => pagination.page > 1 ? goToPage(pagination.page - 1) : {}}
            className="px-6 py-2 text-sm font-bold border border-primary text-primary hover:bg-primary-fixed transition-colors uppercase tracking-widest"
          >
            Précedent
          </button>
          <button
            type="button"
            title="Suivant"
            onClick={() => pagination.page < pagination.pageCount ? goToPage(pagination.page + 1) : {}}
            className="px-6 py-2 text-sm font-bold border border-primary text-primary hover:bg-primary-fixed transition-colors uppercase tracking-widest"
          >
            Suivant
          </button>
        </div>
      </div>
    </>
  )
}