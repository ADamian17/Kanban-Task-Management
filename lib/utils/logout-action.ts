"use server";

import { SignOutUserDocument } from "@/__generated__/graphql";
import { signOut } from "@/auth";
import { executeApiReq } from "./execute-api-req";

export const logoutAction = async () => {
  const data = await executeApiReq(SignOutUserDocument);

  if (data.signOutUser?.success) {
    await signOut({ redirectTo: "/sign-in" });
  }
};
