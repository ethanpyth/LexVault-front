'use client'

import { FilterAltOutlined } from "@mui/icons-material"
import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"

type Filters = {
  firstName: string,
  lastName: string,
  birthday: string,
  nin: string
}

export default function Filters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [filters, setFilters] = useState<Filters>({
    firstName: searchParams.get("firstname") ?? "",
    lastName: searchParams.get("lastName") ?? "",
    birthday: searchParams.get("birthday") ?? "",
    nin: searchParams.get("nin") ?? ""
  })

  const handleChange = (
    field: keyof Filters,
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const applyFilters = () => {
    const params = new URLSearchParams()

    if (filters.firstName)
      params.set("firstName", filters.firstName)

    if (filters.lastName)
      params.set("lastName", filters.lastName)

    if (filters.nin)
      params.set("nin", filters.nin)

    if (filters.birthday)
      params.set("birthday", filters.birthday)

    router.push(`?${params.toString()}`)
  }

  const resetFilters = () => {
    setFilters({
      firstName: "",
      lastName: "",
      birthday: "",
      nin: "",
    })

    router.push("?")
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-outline-variant">
        <div className="flex flex-col gap-2">
          <label htmlFor="first_name" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Nom</label>
          <input
            title="champ de recherche"
            id="first_name"
            value={filters?.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            type="text" 
            className="bg-surface-container-lowest border-outline-variant rounded focus:ring-primary-container h-12 px-4" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="last_name" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Prenom</label>
          <input
            title="champ de recherche"
            id="last_name"
            value={filters?.lastName}
            type="text"
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="bg-surface-container-lowest border-outline-variant rounded focus:ring-primary-container h-12 px-4" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="birthday" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Date de naissance</label>
          <input
            title="champ de recherche"
            id="birthday"
            value={filters?.birthday}
            type="date"
            onChange={(e) => handleChange("birthday", e.target.value)}
            className="bg-surface-container-lowest border-outline-variant rounded focus:ring-primary-container h-12 px-4" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="nin" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Id national</label>
          <input
            title="champ de recherche"
            id="nin"
            value={filters.nin}
            type="text"
            onChange={(e) => handleChange("nin", e.target.value)}
            className="bg-surface-container-lowest border-outline-variant rounded focus:ring-primary-container h-12 px-4" />
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button
          title="bouton de réinitialisation"
          type="button"
          onClick={() => resetFilters()}
          className="px-6 py-2 text-on-surface-variant font-semibold hover:bg-surface-container-low rounded transition-colors"
        >
          Réinitialiser
        </button>
        <button
          title="bouton de filtrage"
          type="button"
          onClick={() => applyFilters()}
          className="bg-primary-container hover:bg-primary text-on-primary font-bold px-8 py-3 rounded transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">
            <FilterAltOutlined />
          </span>Appliquer les filtres
        </button>
      </div>
    </>
  )
}