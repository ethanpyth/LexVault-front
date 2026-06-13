import Header from "./_components/header"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="grow max-w-300 mx-auto w-full px-6 py-10">
        {children}
      </main>
    </div>
  )
}