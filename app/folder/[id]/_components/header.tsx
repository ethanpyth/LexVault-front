import { AccountBalanceOutlined, SearchOutlined, NotificationsOutlined, PersonOutlined } from "@mui/icons-material"
import NavLink from "../../search/_components/navLink"

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
    <header className="flex items-center justify-between whitespace-nowrap border-b border-outline-variant bg-surface-container-lowest px-6 py-4 lg:px-10 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-primary">
          <span className="material-symbol-outlined text-3xl font-bold">
            <AccountBalanceOutlined />
          </span>
          <h2 className="text-on-surface text-lg font-lg leading-tight tracking-tight">
            Système Judiciaire Nationale
          </h2>
        </div>
        <nav className="flex items-center gap-9">
          {navLinks.map((navLink, index) => (
            <NavLink key={index} href={navLink.href} isActive={navLink.isActive} label={navLink.label} />
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center bg-surface-container rounded-lg px-3 py-2 border border-outline-variant/30">
          <span className="material-symbol-outlined text-outline text-sm">
            <SearchOutlined />
          </span>
          <input
            name=""
            title="Champ de recherche"
            type="text"
            placeholder="Rechercher un numéro"
            className="bg-transparent border-none focus:ring-0 text-sm w-64 text-on-surface placeholder:text-outline"
          />
        </div>
        <button
          title="bouton des notifications"
          className="p-2 rounded-llg bg-surface-container text-on-surface-variant hover:text-primary transition-colors relative">
          <span className="material-symbol-outlined">
            <NotificationsOutlined />
          </span>
          <span className="abolute top-2 right-2 w-2 h-2 bg-error rounded-full "></span>
        </button>
        <div className="h-9 w-9 rounded-full bg-primary-container flex items-center justify-center border border-primary/20 cursor-pointer">
          <span className="material-symbols-outlined text-white text-sm">
            <PersonOutlined />
          </span>
        </div>
      </div>
    </header>
  )
}