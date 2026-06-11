'use client'

import { VisibilityLockOutlined } from "@mui/icons-material"

export default function AccessLogCard() {
  return (
    <div className="bg-white rounded-2xl border border-outline-variant overflow-hidden shadow-sm">
      <div className="p-6 bg-surface-low border-b border-outline-variant/50">
        <h4 className="font-bold text-on-surface flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-2xl">
            <VisibilityLockOutlined />
          </span>Journal des consultations
        </h4>
      </div>
    </div>
  )
}