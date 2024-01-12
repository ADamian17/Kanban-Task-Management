"use server";
import gql from "graphql-tag";

import createApolloClient from "@/lib/apollo/apollo-client";
import { Board } from "@/types";
import { notFound } from "next/navigation";

export const getBoard = async (
  uri: string,
): Promise<{
  board: Board;
}> => {
  const client = createApolloClient();

  const { data, errors } = await client.query({
    query: gql`
      query GetBoardQuery($uri: String!) {
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
    errorPolicy: "all",
  });

  if (errors && errors.length > 0) {
    errors.forEach((error) => {
      if (error.message === "No Board found") {
        notFound();
      }
    });
  }

  return data;
};
