'use client'

import Nav from "./nav"
import { LogoutOutlined } from "@mui/icons-material"

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-72 border-r border-outline-variant bg-surface-container-lowest p-6 gap-8">
      <div className="mb-8 border-l-4 border-primary pl-4">
        <h1 className="text-on-surface text-base font-extrabold uppercase tracking-tight">
          Ministère de la justice
        </h1>
        <p className="text-on-surface-variant text- uppercase font-bold tracking-widest mt-1">
          Portail d&apos;administration
        </p>
      </div>
      <Nav />
      <div className="ml-auto pt-6 border-t border-outline-variant">
        <a
          href=""
          className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-error transition-colors"
        >
          <span className="material-symbols-outlined">
            <LogoutOutlined />
          </span>Déconnexion
        </a>
      </div>
    </aside>
  )
}