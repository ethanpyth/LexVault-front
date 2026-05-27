'use client'

import { PersonOutlined, GavelOutlined, DescriptionOutlined, PaymentsOutlined, VerifiedOutlined } from "@mui/icons-material"
import NavLink from "./items/nav-items"

const navLinks = [
  {
    href: "./dashboard",
    label: "Tableau de bord",
    isActive: false
  },
  {
    href: "./folder",
    label: "Dossier",
    isActive: true
  },
  {
    href: "./help",
    label: "Aide",
    isActive: false
  },
]

const navLinkSideBar = [
  {
    href: "./new?stepLabel=identity",
    label: "Identité",
    icon: PersonOutlined,
    isActive: false
  },
  {
    href: "./new?stepLabel=representation",
    label: "Representation",
    icon: GavelOutlined,
    isActive: true
  },
  {
    href: "./new?stepLabel=attachments",
    label: "Pièces jointes",
    icon: DescriptionOutlined,
    isActive: false
  },
  {
    href: "./new?stepLabel=payments",
    label: "Paiement",
    icon: PaymentsOutlined,
    isActive: false
  },
  {
    href: "./new?stepLabel=confirmation",
    label: "Confirmation",
    icon: VerifiedOutlined,
    isActive: false
  },
]

export function Nav() {
  return (
    <nav className="hidden md:flex items-center gap-stack-md font-body-mb text-body-md ml-stack-lg">
      {navLinks.map((navLink) =>  (
        <a 
          key={navLink.label}
          href={navLink.href}
          className={`${navLink.isActive ? "text-primary border-b-2 border-primary font-bold pb-1 transition-all duration-200" : "text-on-surface-variant hover:text-primary transition-colors"}`}
        >
          {navLink.label}
        </a>
      ))}
    </nav>
  )
}

export function NavSidebar() {
  return (
    <nav className="flex flex-col">
      {navLinkSideBar.map((navLink) => (
        <NavLink key={navLink.label} navLink={navLink} />
      ))}
    </nav>
  )
}