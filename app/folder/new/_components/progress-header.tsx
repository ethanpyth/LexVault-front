type ProgressHeaderProps = {
  title: string,
  description: string,
  number: number
}

export default function ProgressHeader({ progressHeader }: Readonly<{ progressHeader: ProgressHeaderProps}>) {
  return (
    <div className="mb-10">
      <span className="font-title-sm-caps text-title-sm-caps text-primary uppercase tracking-widest block mb-2">Etape {progressHeader.number} sur 5</span>
      <h1 className="font-headline-md text-headline-md text-on-surface">{progressHeader.title}</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2">{progressHeader.description}</p>
    </div>
  )
}