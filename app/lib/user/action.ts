import { cookies } from "next/headers";
import { API_BASE_URL } from "../config";
import { User } from "../types";

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

export async function getCurrentUser(): Promise<User> {
  const cookieStore = await cookies();

  const TOKEN = cookieStore.get("access_token")?.value;

  try {
    const response = await fetch(`${API_BASE_URL}/users/current`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `BEARER ${TOKEN}`
      }
    })

    const data = await response.json()

    console.log(data)

    if (!response.ok) 
      throw new Error("Impossible de récupérer l'utilisateur")

    return data
  } catch (e) {
    throw e
  }
}