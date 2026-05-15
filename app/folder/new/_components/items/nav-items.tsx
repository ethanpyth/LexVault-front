import { SvgIconComponent } from "@mui/icons-material";

type NavLinkProps = {
  href: string,
  label: string,
  icon: SvgIconComponent,
  isActive: boolean,
}

export default function NavItem({ navLink }: Readonly<{ navLink: NavLinkProps }>) {
  const Icon = navLink.icon

  return (
    <a
      href={navLink.href}
      className={`flex items-center gap-8 p-stack-sm px-6 ${ navLink.isActive ? "bg-surface text-primary border-l-4 border-primary font-bold" : "text-on-secondary-container opacity-70" }`}
    >
      <span className="material-symbols-outlined">
        <Icon />
      </span>
      <span className="font-label-caps text-label-caps uppercase tracking-wider">
        {navLink.label}
      </span>
    </a>
  )
}