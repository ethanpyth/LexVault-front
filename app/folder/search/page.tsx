import Header from "./_components/sections/header"
import Search from "./_components/sections/search"
import Results from "./_components/sections/result"
import { getFolders } from "@/app/lib/folder/actions";
import { FoldersData } from "../../lib/types";

type PageParamsProps = {
  page: string,
  pageSize: string,
  firstName?: string,
  birthday?: string,
  nin?: string,
  lastName?: string,
}

export default async function Page({ searchParams }: Readonly<{ searchParams: Promise<PageParamsProps> }>) {
  const params = await searchParams;

  const result: FoldersData = await getFolders({
    page: params.page ?? 1,
    pageSize: params.pageSize ?? 10,
    firstName: params.firstName,
    lastName: params.lastName,
    nin: params.nin,
    birthday: params.birthday
  })

  return (
    <div className="layout-content-container flex flex-col max-w-300 w-full gap-8">
      <Header />
      <Search />
      <Results result={result} />
    </div>
  )
}