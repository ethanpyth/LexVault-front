import { ShieldOutlined, NotificationsOutlined, AccountCircleOutlined  } from "@mui/icons-material"
import NavLink from "./navLink"

const navLinks = [
  {
    href: "/dashboard/",
    label: "Tableau de bord",
    isActive: false
  },
  {
    href: "",
    label: "Recherche",
    isActive: true
  },
  {
    href: "/archive/",
    label: "Archive",
    isActive: false
  },
  {
    href: "/help",
    label: "Aide",
    isActive: false
  },
]

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-outline-variant bg-surface-container-lowest px-10 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-4 text-primary-container">
        <div className="size-8 flex items-center justify-center bg-primary-fixed rounded">
          <span className="material-symbols-outlined text-primary-container">
            <ShieldOutlined />
          </span>
        </div>
        <h2 className="text-on-surface text-lg font-bold leading-tight tracking-tight">
          Régistre des casiers
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-4 text-primary-container">
        <nav className="flex items-center gap-9">
          {navLinks.map((navLink, index) => (
            <NavLink key={index} href={navLink.href} isActive={navLink.isActive} label={navLink.label} />
          ))}
        </nav>
        <div className="flex gap-2">
          <button
            type="button"
            title="Bouton"
            className="flex items-center justify-center rounded h-10 w-10 bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">
              <NotificationsOutlined />
            </span>
          </button>
          <button
            type="button"
            title="Bouton"
            className="flex items-center justify-center rounded h-10 w-10 bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">
              <AccountCircleOutlined />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}