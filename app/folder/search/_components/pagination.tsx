'use client'

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

  const pages = getPageNumbers(page, pageCount)
  
  return (
    <div className="flex items-center justify-between px-2 pt-6">
      <p className="text-sm text-on-surface-variant">
        Affichage de {(page - 1) * pageSize + 1} à {Math.min(page * pageSize, total)} sur {total} résultats
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          title="Précedent"
          disabled={page === 1}
          onClick={() => goToPage(page -1)}
          className="p-2 border border-outline-variant rounded hover:bg-surface-container-low text-on-surface-variant"
        >
          <span className="material-symbols-outlined">
            <ChevronLeftOutlined />
          </span>
        </button>
        {pages.map((item, index) => 
          item === "..." ? (
            <span key={index} className="px-2 text-on-surface-variant">...</span>
          ) : (
              <button
                title={`Page ${item}`}
                type="button"
                key={index}
                onClick={() => goToPage(item as number)}
                className={`px-4 py-2 rounded font-semibold transition-colors 
                  ${
                  page === item
                  ? "bg-primary-container text-on-primary"
                  : "border hover:bg-surface-container-low"
                  }
                `}
              >
                {item}
              </button>
          )
        )}
        <button
          title="suivant"
          type="button"
          disabled={page === pageCount}
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

function getPageNumbers(currentPage: number, totalPages: number) {
  const pages: (number | string)[] = [];

  if (totalPages <= 7) {
    return Array.from(
      { length: totalPages },
      (_, i) => i + 1
    );
  }

  pages.push(1);

  if (currentPage > 4) {
    pages.push("...");
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (currentPage < totalPages - 3) {
    pages.push("...");
  }

  pages.push(totalPages);

  return pages;
}