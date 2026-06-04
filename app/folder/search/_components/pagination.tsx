import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material"
import { useSearchParams, useRouter } from "next/navigation"

type PaginationProps = {
  page: number,
  pageCount: number,
  total: number,
  pageSize: number,
}

export default function PaginationButton({ page, pageCount, pageSize, total }: Readonly<PaginationProps>) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const goToPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set("page", String(newPage))
    router.push(`?${params.toString()}`)
  }
  const hasPrevious = page > 1
  const hasNext = page < pageCount
  
  return (
    <div className="flex items-center justify-between px-2 pt-6">
      <p className="text-sm text-on-surface-variant">
        Affichage de {(page - 1) * pageSize + 1} à {Math.min(page * pageSize, total)} sur {total} résultats
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          title="Précedent"
          disabled={!hasPrevious}
          className="p-2 border border-outline-variant rounded hover:bg-surface-container-low text-on-surface-variant"
        >
          <span className="material-symbols-outlined">
            <ChevronLeftOutlined />
          </span>
        </button>
        <button
          type="button"
          onClick={() => goToPage(page - 1)}
          title={`Page ${page - 1}`}
          className={`px-5 py-2rounded font-bold ${page === 1 ? "bg-primary-container text-on-primary" : "hover:bg-surface-container-low border border-outline-variant rounded text-on-surface-variant"}`}
        >
          {(page - 1).toString()}
        </button>
        <button
          type="button"
          title={`Page ${page}`}
          className={`px-5 py-2rounded font-bold ${page === page - 1 ? "bg-primary-container text-on-primary" : "hover:bg-surface-container-low border border-outline-variant rounded text-on-surface-variant"}`}
        >
          {page}
        </button>
        <button
          type="button"
          title={`Page ${page + 1}`}
          onClick={() => goToPage(page + 1)}
          className={`px-5 py-2rounded font-bold ${page === page + 1 ? "bg-primary-container text-on-primary" : "hover:bg-surface-container-low border border-outline-variant rounded text-on-surface-variant"}`}
        >
          {(page + 1).toString()}
        </button>
        <button
          title="suivant"
          type="button"
          disabled={!hasNext}
          onClick={() => goToPage(page + 1)}
          className="p-2 border border-outline-variant rounded hover:bg-surface-container-low text-on-surface-variant"
        >
          <span className="material-symbols-outlined">
            <ChevronRightOutlined />
          </span>
        </button>
      </div>
    </div>
  )
}