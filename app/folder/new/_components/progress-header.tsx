type ProgressHeaderProps = {
  title: string,
  description: string,
  number: number
}

export default function ProgressHeader({ progressHeader }: Readonly<{ progressHeader: ProgressHeaderProps}>) {
  return (
    <div className="mb-stack-lg">
      <div className="flex justify-between items-end mb-stack-sm">
        <div>
          <h1 className="font-h1 text-h1 text-primary mb-2">
            {progressHeader.title}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Etape {progressHeader.number} sur 5 : {progressHeader.description}
          </p>
        </div>
        <span className="font-label-caps text-label-caps text-primary">66% complet</span>
      </div>
      <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
        <div className="bg-primary h-full w-[66%] transition-all duration-500"></div>
      </div>
    </div>
  )
}