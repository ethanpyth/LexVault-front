import { SvgIconComponent } from "@mui/icons-material"

type FileUploadedProps = {
  icon: SvgIconComponent,
  filename: string,
  filesize: string,
}

export default function FileUploadedItem({ fileUploaded }: Readonly<{ fileUploaded: FileUploadedProps }>) {
  const Icon = fileUploaded.icon
  
  return (
    <div className="border border-outline-variant p-3 flex items-center gap-3 bg-surface-container-low">
      <span className="material-symbols-outlined text-blue-900">
        <Icon />
        <div className="truncate">
          <p className="text-xs font-bold truncate">{fileUploaded.filename}</p>
          <p className="text- text-on-secondary-container">{ fileUploaded.filesize }</p>
        </div>
      </span>
    </div>
  )
}