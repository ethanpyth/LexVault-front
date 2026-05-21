import { Metadata } from "next"
import Header from "./_components/header"
import Footer from "./_components/footer"
import React from "react"

export const metadata: Metadata = {
  title: "Page de connexion",
  description: "Authentification des utilisateurs"
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-background text-on-surface flex flex-col min-h-screen font-body-md">
      <Header />
      <main className="grow flex items-center justify-center px-margin-mobile py-stack-lg">
        {children}
      </main>
      <Footer />
    </div>
  )
}