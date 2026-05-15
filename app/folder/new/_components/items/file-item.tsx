import { SvgIconComponent } from "@mui/icons-material"

type FileProps = {
  filename: string,
  filetype: string,
  size: string,
  download_date: string,
  icon: SvgIconComponent
}

export default function FileItem({ file }: Readonly<{ file: FileProps }>) {
  const Icon = file.icon

  return (
    <div className="p-4 flex justify-between items-center hover:bg-surface-container-low transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-surface-container-highest flex items-center justifiy-center rounded">
          <span className="material-symbols-outlined text-primary">
            <Icon />
          </span>
        </div>
        <div>
          <p className="font-label-md text-label-md text-on-surface">{file.filename}</p>
          <p className="font-helper-xs text-on-surface-variant">
            {file.filetype} • {file.size} • Téléchargé le {file.download_date}
          </p>
        </div>
      </div>
    </div>
  )
}