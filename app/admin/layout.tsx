import Header from "./_components/header"
import Sidebar from "./_components/sidebar"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <div className="flex flex-1 flex-col lg:flex-row">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}