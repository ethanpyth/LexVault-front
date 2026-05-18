import { WarningOutlined } from "@mui/icons-material"

export default function Warning() {
  return (
    <div className="bg-red-300 border-l-4 border-red-500 p-stack-lg">
      <div className="flex gap-4">
        <span className="material-symbols-outlined text-red-700">
          <WarningOutlined />
        </span>
        <p className="font-helper-xs text-helper-xs text-red-700 uppercase font-bold">
          Toute fausse déclaration est passible de sanctions pénales conformément à l&apos;article 441-1 du Code Pénal.
        </p>
      </div>
    </div>
  )
}