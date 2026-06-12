import { PersonSearchOutlined } from "@mui/icons-material"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchWidget() {
  const router = useRouter()

  const [cjNumber, updateCJNumber] = useState({cjNumber: ""})

  const handleSearch = (value: string) => { 
    updateCJNumber((prev) => ({
      ...prev,
      cjNumber: value
    }))
  }
  
  const setParams = () => {
    const params = new URLSearchParams()

    params.set("cjNumber", String(cjNumber.cjNumber))

    router.push(`/folder/${cjNumber.cjNumber}`)
  }

  return (
    <div className="bg-primary p-6 rounded text-white shadow-lg">
      <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
        <span className="material-symbol-outlined">
          <PersonSearchOutlined />
          Recherche rapide
        </span>
      </h3>
      <div className="space-y-3">
        <div>
          <label 
            htmlFor="search"
            className="text-[10px] font-bold uppercase opacity-80 mb-1 block"
            >
              Identité / Numéro du dossier
          </label>
          <input
            type="text"
            id="search"
            name="cjNumber"
            value={cjNumber.cjNumber}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Entrez une identité ou un numéro de dossier"
            className="w-full font-bold rounded border border-white/20 focus:outline-none focus:ring-white/30 focus:border-white/40 px-3 py-2 text-sm text-white bg-white/10 placeholder:text-white/40" 
          />
        </div>
        <button
          type="button"
          onClick={() => setParams()}
          className="w-full bg-white text-primary font-bold py-2.5 rounded text-sm hover:bg-surface transition-colors uppercase tracking-wide"
        >
          Lancer la recherche
        </button>
      </div>
    </div>
  )
}