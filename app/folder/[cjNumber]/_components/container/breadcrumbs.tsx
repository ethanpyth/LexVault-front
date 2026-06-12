'use client'

import Link from "next/link"
import { ChevronRightOutlined } from "@mui/icons-material"
import { useSearchParams } from "next/navigation"

export default function Breadcrumbs() {
  const params = useSearchParams()

  const CJNumber = params.get("cjNumber")

  return (
    <div className="flex items-center gap-2 mb-10 text-sm text-on-surface-variant">
      <Link
        title="Lien"
        href="/folder"
        className="hover:text-primary transitions-colors"
      >
        Folder
      </Link>
      <span className="material-symbols-outlined text- text-outline">
        <ChevronRightOutlined />
      </span>
      <Link
        title="lien"
        href="/folder/search"
        className="hover:text-primary transitions-colors"
      >
        Search
      </Link>
      <span className="material-symbols-outlined text- text-outline">
        <ChevronRightOutlined />
      </span>
      <span className="text-on-surface-bold">
        {`Fiche individuelle ${CJNumber}`}
      </span>
    </div>
  )
}