import Header from "./_components/header"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col groupdesign-root overflow-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
      </div>
    </div>
  )
}