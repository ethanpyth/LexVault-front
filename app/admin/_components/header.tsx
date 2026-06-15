'use client'

import { GavelOutlined, SearchOutlined, NotificationsOutlined, SettingsOutlined } from "@mui/icons-material"
import Image from "next/image"

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-outline-variant bg-surface-container-lowest px-6 py-4 lg:px-10">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center p-2 bg-primary-fixed text-primary">
            <span className="material-symbols-outlined">
              <GavelOutlined />
            </span>
          </div>
          <h2 className="text-on-surface text-lg font-bold leading-tight">
            Gestion des habilitations
          </h2>
        </div>
        <label htmlFor="" className="hidden md:flex flex-col min-w-60 h-10">
          <div className="flex w-full flex-1 items-strecth bg-surface-container-low border-b-2 border-outline">
            <div className="text-on-surface-variant flex items-center justify-center pl-4">
              <span className="material-symbols-outlined text-">
                <SearchOutlined />
              </span>
            </div>
            <input
              title="Champ de recherche"
              onChange={(e) => {}}
              value={""}
              type="text"
              placeholder="Rechercher un agent"
              className="w-full border-none bg-transparent focus:ring-0 text-sm placeholder:text-on-surface-variant"
            />
          </div>
        </label>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            title="Notifications"
            className="flex items-center justify-center h-10 w-10 text-on-surface-variant hover:bg-surface-container-high transitions-colors"
          >
            <span className="material-symbols-outlined">
              <NotificationsOutlined />
            </span>
          </button>
          <button
            type="button"
            title="Paramètres"
            className="flex items-center justify-center h-10 w-10 text-on-surface-variant hover:bg-surface-container-high transitions-colors"
          >
            <span className="material-symbols-outlined">
              <SettingsOutlined />
            </span>
          </button>
        </div>
        <div className="h-10 w-10 rounded-full bg-surface-container-high bg-cover bg-center border border-outline-variant">
          <Image
            alt="User Profile picture"
            src="https://placeholder.pics/svg/300"
            width={10}
            height={10}
          />
        </div>
      </div>
    </header>
  )
}