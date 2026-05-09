import { DashboardOutlined, SearchOutlined, NoteAddOutlined, HistoryEduOutlined, VerifiedUserOutlined, SettingsOutlined } from "@mui/icons-material";
import NavLink from "./navLink";

const navLinks = [
  {
    href: "./dashboard",
    label: "Table de bord",
    icon: DashboardOutlined,
    isActive: true,
  },
  {
    href: "./folder/search",
    label: "Recherche Dossier",
    icon: SearchOutlined,
    isActive: true,
  },
  {
    href: "./folder/new",
    label: "Nouvel Enregistrement",
    icon: NoteAddOutlined,
    isActive: true,
  },
  {
    href: "./history",
    label: "Journal d'audit",
    icon: HistoryEduOutlined,
    isActive: true,
  },
]

const adminNavLinks = [
  {
    href: "./admin/permissions",
    label: "Habilitations",
    icon: VerifiedUserOutlined,
    isActive: true,
  },
  {
    href: "./admin/settings",
    label: "Paramètres",
    icon: SettingsOutlined,
    isActive: true,
  }
]

export default function Sidebar() {
  return (
    <aside className="w-72 flex flex-col bg-surface border-r border-outline-variant">
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
      <div></div>
    </aside>
  )
}