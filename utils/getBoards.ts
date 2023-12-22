"use server";
import gql from "graphql-tag";

import createApolloClient from "@/lib/apollo/apollo-client";

export const getBoards = async () => {
  const client = createApolloClient();

  const { data } = await client.query({
    query: gql`
      query Boards {
        boards {
          id
          name
        }
      }
    `,
  });

  return data;
};
