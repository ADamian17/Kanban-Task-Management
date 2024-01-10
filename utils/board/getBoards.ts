"use server";
import gql from "graphql-tag";

import createApolloClient from "@/lib/apollo/apollo-client";
import { Board } from "@/types";
import { revalidatePath } from "next/cache";

export const getBoards = async (): Promise<{
  boards: Pick<Board, "id" | "name" | "uri">[];
}> => {
  const client = createApolloClient();

  const { data } = await client.query({
    query: gql`
      query Boards {
        boards {
          id
          name
          uri
        }
      }
    `,
  });

  return data;
};
