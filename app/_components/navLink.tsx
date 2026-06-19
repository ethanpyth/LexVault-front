import { SvgIconComponent } from "@mui/icons-material";

type navLinkProps = {
  href: string,
  label: string,
  icon: SvgIconComponent,
  isActive: boolean
}

export default function NavLink({ navLink }: Readonly<{ navLink: navLinkProps }>) {
  const Icon = navLink.icon
  return(
    <a
      title="Lien de rédirection"
      href={navLink.href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded ${navLink.isActive ? `bg-primary text-white font-semibold` : `text-on-surface hover:bg-surface-container-high font-medium`}`}
    >
      <span className="material-symbols-outlined text-lg">
        <Icon />
      </span>
      <span className="text-sm">{navLink.label}</span>
    </a>
  )
} 