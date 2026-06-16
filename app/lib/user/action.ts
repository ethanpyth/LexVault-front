import { cookies } from "next/headers";
import { API_BASE_URL } from "../config";

export async function getUsers({ page, pageSize }: Readonly<{ page: number, pageSize: number }>) {
  const cookieStore = await cookies();

  const token = cookieStore.get("access_token")?.value;
  const params = new URLSearchParams()

  params.set("page", page.toString())
  params.set("pageSize", pageSize.toString())

  try {
    const response = await fetch(`${API_BASE_URL}/users/page?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })

    const data = response.json()

    console.log(response.status)

    return data
  } catch (e) {
    throw e
  }
}