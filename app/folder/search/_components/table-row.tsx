import { PersonOutlined } from "@mui/icons-material"

type TableRowDataProps = {
  nom: string,
  birthday: string,
  nin: string,
  updatedAt: string,
  status: string,
}

export default function TableRow({ nom, birthday, nin, updatedAt, status }: Readonly<TableRowDataProps>) {
  return (
    <tr className="hover:bg-surface-container-low transition-colors">
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded bg-surface-container-dim flex items-center justify-center text-on-surface-variant">
            <span className="material-symbols-outlined">
              <PersonOutlined />
            </span>
          </div>
          <div className="">
            <div className="font-bold text-on-surface">{ nom }</div>
            <div className="text-xs text-on-surface-variant">{  }</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-5">
        <div className="text-sm font-semibold text-on-surface">{ birthday }</div>
        <div className="text-xs text-on-surface-variant tracking-tight">{ nin }</div>
      </td>
      <td className="px-6 py-5 text-sm text-on-surface-variant">
        { updatedAt }
      </td>
      <td className="px-6 py-5">
        <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold bg-error-container text-on-error-container">
          { status }
        </span>
      </td>
      <td className="px-6 py-5 text-right">
        <button
          type="button"
          title="bouton pour visualiser les dossiers"
          className="bg-primary-fixed hover:bg-primary-fixed-dim text-on-primary-fixed-variant font-bold px-5 py-2 rounded text-sm transition-all">
          Voir le dossier
        </button>
      </td>
    </tr>
  )
}