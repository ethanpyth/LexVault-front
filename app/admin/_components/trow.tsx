import { BalanceOutlined, EditNoteOutlined, ManageSearchOutlined, SquareOutlined } from "@mui/icons-material"

type TRowProps = {
  nom: string,
  prenom: string,
  email: string,
  role: string,
  statut: string,
}

export default function TRow({ user }: Readonly<{ user: TRowProps }>) {
  return (
    <tr className="hover:bg-surface-container-lowest transition-colors">
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-black text-xs">
            {user.nom[0]}{user.prenom[0]}
          </div>
          <div className="">
            <p className="text-sm text-on-surface uppercase tracking-tight">{ user.nom }</p>
            <p className="text-xs text-on-surface-variant">{ user.email }</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-5">
        <span className="inline-flex items-center gap-1 px-3 py-1 text- font-black uppercase border-2 border-primary text-primary">
          <span className="material-symbols-outlined text-">
            {`${user.role.toUpperCase() === "MAGISTRAT" ? BalanceOutlined :
              user.role.toUpperCase() === "GREFFIER" ? EditNoteOutlined :
                user.role.toUpperCase() === "ADMIN" ? "" : ""}`}
             { user.role }
          </span>
        </span>
      </td>
      <td className="px-6 py-5"></td>
      <td className="px-6 py-5">
        <span className="inline-flex items-center gap-2 text-xs font-bold text-primary">
          <span className="h-2 w-2 bg-primary"></span>{ user.statut }
        </span>
      </td>
      <td className="px-6 py-5 text-right">
        <div className="flex justify-end gap-3">
          <button
            type="button"
            title="Editer"
            className="p-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <SquareOutlined />
          </button>
          <button
            type="button"
            title="Historique"
            className="p-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">
              <ManageSearchOutlined />
            </span>
          </button>
        </div>
      </td>
    </tr>
  )
}