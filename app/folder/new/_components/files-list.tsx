import { PictureAsPdfOutlined, ImageOutlined } from "@mui/icons-material"
import FileItem from "./items/file-item"

const filesItems = [
  {
    filename: "jugement_2023_v1.pdf",
    filetype: "PDF",
    size: "2.4 MB",
    download_date: "24/10/2024",
    icon: PictureAsPdfOutlined
  },
  {
    filename: "carte_identite_recto.jpg",
    filetype: "JPG",
    size: "840 KB",
    download_date: "24/10/2024",
    icon: ImageOutlined
  },
]

export default function FilesList() {
  return (
    <div className="md:col-span-12 bg-surface-lowest border border-outline-variant rounded-lg overflow-hidden">
      <div className="bg-surface-low p-4 border-b border-outline-variant">
        <h2 className="font-label-md text-label-md text-primary uppercase">
          Document déjà téléchargé (2)
        </h2>
      </div>
      <div className="divide-y divide-outline-variant">
        {filesItems.map((file) => (
          <FileItem file={file} key={file.filename} />
        ))}
      </div>
    </div>
  )
}