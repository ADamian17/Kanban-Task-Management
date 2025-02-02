"use server";
import { redirect } from "next/navigation";
import { CreateUserDocument, CreateUserMutationVariables } from "@/__generated__/graphql";
import { executeApiReq } from "@/lib/utils/execute-api-req";
import { isNil } from "lodash";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const signUpAction = async (
  formValues: CreateUserMutationVariables,
): Promise<boolean | { error: string } | undefined> => {
  let hasError = false;

  try {
    const signupRes = await executeApiReq(CreateUserDocument, formValues);

    if (!isNil(signupRes?.createUser?.id)) {
      const res = await signIn("credentials", {
        email: signupRes?.createUser?.email,
        password: formValues.password,
        redirect: false,
      });

      return res;
    }
  } catch (error) {
    hasError = true;

    if (error instanceof AuthError && error?.cause?.err?.message) {
      return { error: error?.cause?.err?.message };
    }
  } finally {
    if (!hasError) redirect("/");
  }
};
