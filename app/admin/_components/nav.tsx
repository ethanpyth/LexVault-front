'use client'

import { GroupOutlined, HistoryOutlined, PersonOutlined, DatasetOutlined, PolicyOutlined } from "@mui/icons-material"
import NavLink from "./navLink"

const navLinks = [
  {
    href: "/admin",
    label: "Utilisateurs",
    icon: GroupOutlined,
    isActive: true,
  },
  {
    href: "/admin/permissions",
    label: "Roles et permissions",
    icon: PersonOutlined,
    isActive: false,
  },
  {
    href: "audit",
    label: "Journal d'audits",
    icon: HistoryOutlined,
    isActive: false,
  },
  {
    href: "/admin/db",
    label: "Accès aux bases de données",
    icon: DatasetOutlined,
    isActive: false,
  },
  {
    href: "/admin/security",
    label: "Sécurité et conformité",
    icon: PolicyOutlined,
    isActive: false,
  }
]

export default function Nav() {
  return (
    <nav className="flex flex-col gap-1">
      {navLinks.map((navLink, index) => (
        <NavLink
          key={index}
          navLink={navLink}
        />
      ))}
    </nav>
  )
}