"use server";
import { redirect } from "next/navigation";
import { gql } from "@apollo/client";

import { apolloClient } from "@/lib/apollo/apollo-client";
import { GET_BOARDS } from "../queries/board.queries";

export const deleteBoard = async (formData: FormData) => {
  const deleteBoardId = Number(formData.get("boardId"));

  const { errors } = await apolloClient.mutate({
    mutation: gql`
      mutation DeleteBoard($deleteBoardId: Int!) {
        deleteBoard(id: $deleteBoardId) {
          id
        }
      }
    `,
    variables: {
      deleteBoardId,
    },
    update(cache, { data }) {
      console.log(data);

      // cache.modify({
      //   fields: {
      //     todos(existingTodos = []) {
      //       const newTodoRef = cache.writeFragment({
      //         data: addTodo,
      //         fragment: gql`
      //           fragment NewTodo on Todo {
      //             id
      //             type
      //           }
      //         `
      //       });
      //       return [...existingTodos, newTodoRef];
      //     }
      //   }
      // });
    },
    errorPolicy: "all",
  });

  if (errors) return;

  redirect("/dashboard/");
};
