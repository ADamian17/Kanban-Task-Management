"use server";
import gql from "graphql-tag";

import createApolloClient from "@/lib/apollo/apollo-client";
import { Board } from "@/types";
import { redirect } from "next/navigation";

export const deleteBoard = async (deleteBoardId: number | null) => {
  const client = createApolloClient();
  console.log({ deleteBoardId });

  // const { data, error } = await client.query<Board>({
  //   query: gql`
  //     mutation DeleteBoard($deleteBoardId: Int!) {
  //       deleteBoard(id: $deleteBoardId) {
  //         id
  //         name
  //       }
  //     }
  //   `,
  //   variables: {
  //     deleteBoardId,
  //   },
  // });

  // if (error) {
  //   return console.log(error);
  // }

  // if (data.id) {
  //   redirect("/");
  // }
};
