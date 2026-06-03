'use client'

import RecordProvider from "./_context/record-context"
import FolderLayoutClient from "./folder-layout"
import { Suspense } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecordProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <FolderLayoutClient>
          {children}
        </FolderLayoutClient>
      </Suspense>
    </RecordProvider>
  );
}