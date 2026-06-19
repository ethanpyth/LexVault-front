import { cookies } from "next/headers";
import { API_BASE_URL } from "../config";

export async function getAuditPerPage({
  page,
  pageSize,
  userId,
  period,
  action,
}: {
  page: string,
  pageSize: string,
  userId?: string,
  period?: string,
  action?: string,
}) {
  const cookieStore = await cookies();

  const TOKEN = cookieStore.get("access_token")?.value;
  const params = new URLSearchParams()

  params.set("page", page)
  params.set("pageSize", pageSize)

  if (userId) params.set("userId", userId)
  if (period) params.set("period", period)
  if (action) params.set("typeAction", action)

  try {
    const response = await fetch(`${API_BASE_URL}/audit/page?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`
      },
      cache: "no-store"
    })

    return response.json()
  } catch (e) {
    throw e
  }
}