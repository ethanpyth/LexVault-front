import { SvgIconComponent } from "@mui/icons-material"

type ListItemProps = {
  icon: SvgIconComponent,
  username: string,
  date: string,
  action: string
}

export default function ListItem(listItem: Readonly<ListItemProps>) {
  const Icon = listItem.icon

  return (
    <li className="flex gap-4">
      <div className="w-11 h-11 rounded-full bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10 shadow-sm">
        <span className="material-symbols-outlined text-primary text-xl">
          <Icon />
        </span>
      </div>
      <div className="grow">
        <div className="flex justify-between items-start">
          <p className="text-[13px] font-bold text-on-surface">{listItem.username}</p>
          <span className="text-[10px] font-bold text-emerald-50 px-2 py-05 rounded">
            AUTO
          </span>
        </div>
        <p className="text- text-outline mt-1 leading-tight">
          {listItem.date} • {listItem.action}
        </p>
      </div>
    </li>
  )
}