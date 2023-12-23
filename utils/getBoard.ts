"use server";
import gql from "graphql-tag";

import createApolloClient from "@/lib/apollo/apollo-client";
import { Board } from "@/types";

export const getBoard = async (
  uri: string,
): Promise<{
  board: Board;
}> => {
  const client = createApolloClient();

  const { data } = await client.query({
    query: gql`
      query BoardQuery($uri: String!) {
        board(uri: $uri) {
          name
          id
          uri
          columns {
            id
            name
            tasks {
              description
              id
              status
              subtasks {
                id
                isCompleted
                title
              }
              title
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });

  return data;
};
