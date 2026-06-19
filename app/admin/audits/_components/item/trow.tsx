import { VisibilityOutlined } from "@mui/icons-material"

type TRowProps = {
  statut: string,
  username: string,
  action: string,
  ressource: string,
  datetime: string,
  ip: string
}

export default function TRow({ tRow }: Readonly<{ tRow: TRowProps }>) {
  return (
    <tr className="hover:bg-surface-container-low transition-colors">
      <td className="px-6 py-5">
        <span className="inline-flex items-center px-2 py-1 bg-on-tertiary-container text-on-tertiary-container/10 text-helper-xs font-black uppercase border border-on-tertiary-container/20">
          { tRow.statut }
        </span>
      </td>
      <td className="px-6 py-5 text-sm font-bold text-on-surface">{ tRow.username }</td>
      <td className="px-6 py-5">
        <span className="text-sm px-3 py-1 bg-blue-50 text-blue-800 border border-blue-200">
          { tRow.action }
        </span>
      </td>
      <td className="px-6 py-5 text-xs font-medium">{tRow.ressource}</td>
      <td className="px-6 py-5 text-sm text-on-surface-variant">{ new Date(tRow.datetime).toDateString() }</td>
      <td className="px-6 py-5 text-sm font-mono text-on-surface-variant">{ tRow.ip }</td>
      <td className="px-6 py-5 text-center">
        <button
          type="button"
          title="Voir les détails"
          className="text-primary hover:scale-110 transition-transform"
        >
          <span className="material-symbols-outlined">
            <VisibilityOutlined />
          </span>
        </button>
      </td>
      <td className="px-6 py-5"></td>
    </tr>
  )
}