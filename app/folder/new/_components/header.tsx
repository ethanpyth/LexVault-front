import { NotificationsOutlined, AccountCircle } from "@mui/icons-material"
import { Nav } from "./nav"

export default function Header() {
  return (
    <header className="bg-surface border-b border-outline-variant docked full-width top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 h-16 max-w-container-max mx-auto">
        <div className="flex items-center gap-gutter">
          <span className="font-h3 text-h3 font-bold text-primary">
            Ministère de la justice
          </span>
          <Nav />
        </div>
        <div className="flex items-center gap-stack-md">
          <button
            title="Notifications"
            type="button" 
            className="material-symbols-outlined text-primary"
            data-icon="notifications"
          >
            <NotificationsOutlined />
          </button>
          <button
            title="Profil de l'utilisateur"
            type="button" 
            className="material-symbols-outlined text-primary"
            data-icon=""
          >
            <AccountCircle />
          </button>
        </div>
      </div>
    </header>
  )
}