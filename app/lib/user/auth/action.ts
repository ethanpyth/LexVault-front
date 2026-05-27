'use server'

import { cookies } from "next/headers";
import { API_BASE_URL } from "../../config";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const username = formData.get("agent-id") as string;
  const password = formData.get("pwd") as string;

  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();

    const cookieStore = await cookies();

    cookieStore.set(
      "access_token",
      data.access_token,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24,
      }
    );
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }

  redirect("/dashboard");
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("access_token")
}