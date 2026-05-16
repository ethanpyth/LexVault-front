'use client'

import Header from "./_components/header"
import SideBar from "./_components/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
      <Header />
      <div className="grow flex flex-col md:flex-row max-w-container-max mx-auto w-full relative">
        <SideBar />
        <main className="grow lg:ml-80 pt-16 px-gutter pb-stack-lg">
          <div className="max-w-200 mx-auto pt-stack-md">    
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}