import { cookies } from "next/headers";
import { API_BASE_URL } from "../config";

export async function getUsers({ page, pageSize }: Readonly<{ page: string, pageSize: string }>) {
  const cookieStore = await cookies();

  const TOKEN = cookieStore.get("access_token")?.value;
  const params = new URLSearchParams()

  params.set("page", page)
  params.set("pageSize", pageSize)

  try {
    const response = await fetch(`${API_BASE_URL}/users/page?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`
      },
      cache: 'no-store'
    })

    return response.json()
  } catch (e) {
    throw e
  }
}