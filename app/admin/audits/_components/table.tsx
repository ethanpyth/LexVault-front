'use client'

import { Audit } from '@/app/lib/types'
import TRow from './item/trow'
import { useSearchParams, useRouter } from 'next/navigation'

export type PaginationProps = {
  page: number,
  pageSize: number,
  total: number,
  pageCount: number,
}

export default function Table({ audits, pagination }: Readonly<{ audits: Audit[], pagination: PaginationProps }>) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const goToPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set("page", String(newPage))
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="bg-surface-container-lowest border border-outline-variant shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container border-b-2 border-primary">
              <th className="px-6 py-4 text-xs font-black uppercase text-on-surface-variant">Statut</th>
              <th className="px-6 py-4 text-xs font-black uppercase text-on-surface-variant">Utilisateur</th>
              <th className="px-6 py-4 text-xs font-black uppercase text-on-surface-variant">Type d&apos;action</th>
              <th className="px-6 py-4 text-xs font-black uppercase text-on-surface-variant">Ressource</th>
              <th className="px-6 py-4 text-xs font-black uppercase text-on-surface-variant">Date & heure</th>
              <th className="px-6 py-4 text-xs font-black uppercase text-on-surface-variant">Adresse IP</th>
              <th className="px-6 py-4 text-xs font-black uppercase text-on-surface-variant">Détails</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {audits.map((audit, index) => (
              <TRow
                key={index}
                tRow={{
                  statut: audit.user.role,
                  username: audit.user.username,
                  action: audit.action,
                  ressource: audit.entite,
                  ip: audit.adresseIP,
                  datetime: audit.dateAction
                }} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-8 py-6 bg-ssurface-container border-t border-ooutline flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-bold text-on-surface-variant">
          Affichage : {Math.min(1, pagination.page * pagination.pageSize + 1)} - {Math.max(pagination.pageSize, pagination.pageSize * pagination.page)}
        </p>
        <div className="flex gap-2">
          
        </div>
      </div>
    </div>
  )
}