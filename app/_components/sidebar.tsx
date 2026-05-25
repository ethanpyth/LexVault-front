import { DashboardOutlined, SearchOutlined, NoteAddOutlined, HistoryEduOutlined, VerifiedUserOutlined, SettingsOutlined, LockOutlined } from "@mui/icons-material";
import NavLink from "./navLink";

const navLinks = [
  {
    href: "./dashboard",
    label: "Tableau de bord",
    icon: DashboardOutlined,
    isActive: false,
  },
  {
    href: "./folder/search",
    label: "Recherche Dossier",
    icon: SearchOutlined,
    isActive: false,
  },
  {
    href: "./folder/new",
    label: "Nouvel Enregistrement",
    icon: NoteAddOutlined,
    isActive: false,
  },
  {
    href: "./history",
    label: "Journal d'audit",
    icon: HistoryEduOutlined,
    isActive: false,
  },
]

const adminNavLinks = [
  {
    href: "./admin/permissions",
    label: "Habilitations",
    icon: VerifiedUserOutlined,
    isActive: false,
  },
  {
    href: "./admin/settings",
    label: "Paramètres",
    icon: SettingsOutlined,
    isActive: false,
  }
]

export default function Sidebar() {
  return (
    <aside className="w-72 flex flex-col bg-white border-r border-outline-variant">
      <div className="p-6 border-b border-outline-variant"></div>
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navLinks.map((navLink, index) => (
          <NavLink navLink={navLink} key={index}/>
        ))}
        <div className="pt-6 pb-2 px-3 text-[10px] font-bold text-outline uppercase tracking-wider">Administration</div>
        {adminNavLinks.map((navLink, index) => (
          <NavLink navLink={navLink} key={index}/>
        ))}
      </nav>
      <div className="p-4 bg-surface-container-highest/50 m-4 rounded border border-outline-variant">
        <div className="text-helper-xs text-on-surface-variant leading-relaxed">
          <span className="material-symbols-outlined text-primary text-sm">
            <LockOutlined />
          </span>
          <span className="text-[10px] font-bold uppercase text-on-surface-variant">
            Session Sécurisée
          </span>
        </div>
        <p className="text-helper-xs text-on-surface-variant leading-relaxed">
          Dernière connection
          <br/>
          12 octobre 2026
        </p>
      </div>
    </aside>
  )
}