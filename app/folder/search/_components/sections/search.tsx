import { SearchOutlined } from "@mui/icons-material"
import Filters from "./filters-group"

export default function Search() {
  return (
    <div className="bg-surface-container-lowest p-8 rounded border border-outline-variant shadow-sm">
      <div className="flex flex-col gap-6">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary-container transition-colors">
            <span className="material-symbols-outlined">
              <SearchOutlined />
            </span>
          </div>
          <input
            title="champ de recherche"
            value=""
            type="text"
            onChange={() => {}}
            placeholder="Ex. : Rechercher par un nom complet ou numéro d'identification nationale"
            className="block w-full pl-12 pr-4 py-4 bg-surface-container-low border-outline-variant rounded text-lg focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-all placeholder-on-surface-variant50"
          />
        </div>
        <Filters />
      </div>
    </div>
  )
}