'use client'

import { SvgIconComponent } from "@mui/icons-material"
import Link from "next/link"

type NavLinkProps = {
  href: string,
  label: string,
  isActive: boolean,
  icon: SvgIconComponent,
}

export default function NavLink({ navLink }: Readonly<{ navLink: NavLinkProps }>) {
  const Icon = navLink.icon

  return (
    <Link
      href={navLink.href}
      className={`flex items-center gap-3 px-4 py-3 ${navLink.isActive ? "bg-primary-fixed text-on-primary-fixed font-bold" : "text-on-surface-variant font-medium hover:bg-surface-container-low" }`}
    >
      <span className="material-symbols-outlined">
        <Icon />
      </span>
      <span className="text-sm">{navLink.label}</span>
    </Link>
  )
}