import { CheckCircleOutlined, RadioButtonUncheckedOutlined } from "@mui/icons-material"

export default function HelpSidebar() {
  return (
    <div className="md:col-span-4 bg-tertiary-fixed p-6 rounded-lg flex flex-col gap-4">
      <h3 className="font-label-md text-label-md text-on-tertiary-fixed uppercase border-b border-on-tertiary-fixed-variant pb-2">
        Documents requis
      </h3>
      <ul className="flex flex-col gap-4">
        <li className="flex gap-3 items-center">
          <span className="material-symbols-outlined text-on-tertiary-fixed text-sm">
            <CheckCircleOutlined />
          </span>
          <span className="font-body-md text-body-md text-on-tertiary-fixed">
            Copie du jugement initial
          </span>
        </li>
        <li className="flex gap-3 items-center">
          <span className="material-symbols-outlined text-on-tertiary-fixed text-sm">
            <CheckCircleOutlined />
          </span>
          <span className="font-body-md text-body-md text-on-tertiary-fixed">
            Pièce d&apos;identité (Recto/Verso)
          </span>
        </li>
        <li className="flex gap-3 items-center">
          <span className="material-symbols-outlined text-on-tertiary-fixed text-sm">
            <RadioButtonUncheckedOutlined />
          </span>
          <span className="font-body-md text-body-md text-on-tertiary-fixed">
            Justificatif de domicile de moins de 3 mois
          </span>
        </li>
      </ul>
    </div>
  )
}