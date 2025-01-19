"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

type SignInActionResType = { error: string } | boolean | undefined;

export const signInAction = async ({
  email,
  password,
}: Record<string, unknown>): Promise<SignInActionResType> => {
  let hasError = false;

  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return res;
  } catch (error) {
    hasError = true;
    if (error instanceof AuthError && error?.cause?.err?.message) {
      return { error: error?.cause?.err?.message };
    }
  } finally {
    if (!hasError) redirect("/");
  }
};
