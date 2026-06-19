'use client'

import Nav from "./nav"

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-72 border-r border-outline-variant bg-surface-container-lowest p-6">
      <div className="mb-8 border-l-4 border-primary pl-4">
        <h1 className="text-on-surface text-base font-extrabold uppercase tracking-tight">
          Ministère de la justice
        </h1>
        <p className="text-on-surface-variant text- uppercase font-bold tracking-widest mt-1">
          Portail d&apos;administration
        </p>
      </div>
      <Nav />
    </aside>
  )
}