"use server";
import gql from "graphql-tag";

import { apolloClient } from "@/lib/apollo/apollo-client";
import { GET_BOARDS } from "../queries/board.queries";

export const createBoard = async (data: {
  name: FormDataEntryValue | null;
  columns: {
    name: FormDataEntryValue;
  }[];
}) => {
  const res = await apolloClient.mutate({
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

  await apolloClient.refetchQueries({
    include: "all",
  });

  return res;
};
