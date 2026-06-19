import { cookies } from "next/headers";

export const API_BASE_URL = process.env.NODE_ENV === 'production'
	? process.env.NEXT_PUBLIC_API_BASE_URL
	: process.env.NEXT_LOCALHOST;

const cookieStore = await cookies();

export const TOKEN = cookieStore.get("access_token")?.value;
