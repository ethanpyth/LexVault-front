import { cookies } from "next/headers";
import { API_BASE_URL } from "../config";

export async function getUsers({ page, pageSize }: Readonly<{ page: string, pageSize: string }>) {
  const cookieStore = await cookies();

  const token = cookieStore.get("access_token")?.value;
  const params = new URLSearchParams()

  console.log(token)

  params.set("page", page)
  params.set("pageSize", pageSize)

  try {
    const response = await fetch(`${API_BASE_URL}/users/page?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      cache: 'no-store'
    })

    // const data = response.json()

    // console.log(response.status)
    // console.log(data)

    // if (!response.ok) {
    //   throw new Error(data ?? "Erreur serveur")
    // }

    return response.json()
  } catch (e) {
    throw e
  }
}