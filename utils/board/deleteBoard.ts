"use server";
import { redirect } from "next/navigation";
import gql from "graphql-tag";
import { revalidatePath } from "next/cache";

import { apolloClient } from "@/lib/apollo/apollo-client";

export const deleteBoard = async (deleteBoardId: number | null) => {
  const { data, errors } = await apolloClient.mutate({
    mutation: gql`
      mutation DeleteBoard($deleteBoardId: Int!) {
        deleteBoard(id: $deleteBoardId) {
          id
          name
        }
      }
    `,
    variables: {
      deleteBoardId,
    },
    errorPolicy: "all",
  });

  if (data?.deleteBoard?.id) {
    revalidatePath("/");
    redirect("/");
  }
};
