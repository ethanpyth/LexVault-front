'use client'

import { useSearchParams } from "next/navigation";
import Header from "./_components/header"
import SideBar from "./_components/sidebar";
import RecordProvider from "./_context/record-context"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams()
  const stepLabel = searchParams.get("stepLabel") || "identity"

  return (
    <RecordProvider>
      <div>
        <Header />
        <div className="grow flex flex-col md:flex-row max-w-container-max mx-auto w-full relative">
          <SideBar />
          <main
            className={`
              ${stepLabel === "identity" ? "flex-1 ml-0 md:ml-80 pb-20"
                : stepLabel === "representation" ? "grow lg:ml-80 pt-16 px-gutter pb-stack-lg"
                  : stepLabel === "attachments" ? "flex-1 md:ml-80 bg-background p-margin-mobile md:p-margin-desktop overflow-hidden"
                    : stepLabel === "payments" ? "flex-1 lg:ml-80 pb-20"
                      : "flex-1 md:ml-80 overflow-y-auto pb-12"}`}
          >
            {children}
          </main>
        </div>
      </div>
    </RecordProvider>
  );
}