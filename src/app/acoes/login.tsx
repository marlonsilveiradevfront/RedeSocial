"use server";

import { cookies } from "next/headers";
import usuarios from "@/app/data/user.json";
import { redirect } from "next/navigation";
import apiError from "../functions/api-error";
export async function login(prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!email || !password) {
      throw new Error("Prencha os campos de email e senha");
    }

    const usuarioEncontrado = usuarios.find(
      (u) => u.email === email && u.password === password,
    );

    if (!usuarioEncontrado) {
      throw new Error("Email ou senha invalidos");
    }
    const cookieStore = await cookies();
    cookieStore.set("token", `session_${usuarioEncontrado.id}_${Date.now()}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
  } catch (erro: unknown) {
    return apiError(erro);
  }
  redirect("/interface");
}
