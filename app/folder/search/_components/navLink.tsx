type NavLinkProps = {
  href: string,
  label: string,
  isActive: boolean
}

export default function NavLink({ href, label, isActive }: Readonly<NavLinkProps>) {
  return (
    <a href={href} className={`text-sm ${isActive ? "text-primary-container font-bold border-b-2 " : "text-on-surface font-medium hover:text-primary-container transition-colors"} `}>
      {label}
    </a>
  )
}