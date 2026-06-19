'use client'

import { CalendarTodayOutlined } from '@mui/icons-material'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'

type Filters = {
  period: string,
  action: string,
  userId: string
}

export default function Filters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [filter, setFilter] = useState<Filters>({
    period: searchParams.get("period") ?? "",
    action: searchParams.get("action") ?? "",
    userId: searchParams.get("userId") ?? ""
  })

  const handleChange = (
    field: keyof Filters,
    value: string,
  ) => {
    setFilter((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const applyFilters = () => {
    const params = new URLSearchParams()

    if (filter.period)
      params.set("firstName", filter.period)

    if (filter.action)
      params.set("action", filter.action)

    if (filter.userId)
      params.set("userId", filter.userId)

    router.push(`?${params.toString()}`)
  }

  const resetFilters = () => {
    setFilter({
      period: "",
      userId: "",
      action: "",
    })

    router.push("?")
  }
  
  return (
    <div className="bg-surface-container p-6 rounded-lg border border-outline-variant flex flex-wrap gap-6 items-end">
      <div className="flex-1 min-w-60">
        <label
          htmlFor="period"
          className="block text-xs font-bold text-on-surface-variant uppercase mb-2"
        >
          Période
        </label>
        <div className="relative">
          <select
            title="La période d'audit"
            name="period"
            id="period"
            onChange={(e) => handleChange("period", e.target.value)}
            className="w-full appearance-none bg-surface-container-lowest border border-outline rounded px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="month">Les 30 dernières jours</option>
            <option value="week">Les 7 derniers jours</option>
            <option value="day">Aujourd&apos;hui</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <CalendarTodayOutlined />
          </span>
        </div>
      </div>
      <div className="flex-1 min-w-60">
        <label
          htmlFor="action"
          className="block text-xs font-bold text-on-surface-variant uppercase mb-2"
        >
          Type d&apos;action
        </label>
        <select
          title="Le type d'action"
          name="action"
          id="action"
          onChange={(e) => handleChange("period", e.target.value)}
          className="w-full appearance-none bg-surface-container-lowest border border-outline rounded px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
        >
          <option value="">Tous les types</option>
          <option value="read">Consultation</option>
          <option value="create">Création</option>
          <option value="update">Modification</option>
        </select>
      </div>
      <div className="flex-1 min-w-60">
        <label
          htmlFor="period"
          className="block text-xs font-bold text-on-surface-variant uppercase mb-2"
        >
          Utilisateurs
        </label>
        <div className="relative">
          <select
            title="Utilisateur"
            name="users"
            id="users"
            onChange={(e) => handleChange("period", e.target.value)}
            className="w-full appearance-none bg-surface-container-lowest border border-outline rounded px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="admin">Administrateur</option>
            <option value="greffier">Greffier</option>
            <option value="procureur">Procureur</option>
            <option value="Juge">Juge</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <CalendarTodayOutlined />
          </span>
        </div>
      </div>
      <button
        type="button"
        title='Filtre'
        onClick={() => applyFilters()}
        className="px-8 py-2 bg-on-surface text-surface rounded font-bold hover:bg-black transition-colors">
          Filtrer
      </button>
    </div>
  )
}