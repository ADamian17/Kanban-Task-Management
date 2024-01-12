"use server";

import createApolloClient from "@/lib/apollo/apollo-client";
import { Board } from "@/types";
import { GET_BOARDS } from "../queries/board.queries";

export const getBoards = async (): Promise<{
  boards: Pick<Board, "id" | "name" | "uri">[];
}> => {
  const client = createApolloClient();

  const { data } = await client.query({
    query: GET_BOARDS,
  });

  return data;
};
