"use client"

import Header from "./_components/sections/header"
import Search from "./_components/sections/search"
import Results from "./_components/sections/result"

export default function Page() {
  return (
    <div className="layout-content-container flex flex-col max-w-300 w-full gap-8">
      <Header />
      <Search />
      <Results />
    </div>
  )
}