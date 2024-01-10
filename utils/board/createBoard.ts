"use server";
import gql from "graphql-tag";

import { apolloClient } from "@/lib/apollo/apollo-client";

export const createBoard = async (data: {
  name: FormDataEntryValue | null;
  columns: {
    name: FormDataEntryValue;
  }[];
}) => {
  return await apolloClient.mutate({
    mutation: gql`
      mutation CreateBoard($data: BoardInputType!) {
        createBoard(data: $data) {
          uri
        }
      }
    `,
    variables: {
      data,
    },
    errorPolicy: "all",
  });
};
