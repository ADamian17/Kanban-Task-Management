"use server";
import { redirect } from "next/navigation";

import { createBoard } from "@/utils/board/createBoard";

type AddBoardReturn = Promise<{
  uri: string | null;
  error?: {
    message?: string;
  } | null;
}>;

export const addBoard = async (boardFormData: FormData): AddBoardReturn => {
  if (!boardFormData) throw new Error("Form Data Missing");

  const name = boardFormData.get("boardName");
  const allInputs = boardFormData.getAll("input");
  const columns = allInputs.map((col) => ({ name: col })) || [];

  const { data, errors } = await createBoard({
    name,
    columns,
  });

  if (!errors) {
    return {
      uri: data?.createBoard?.uri,
      error: null,
    };
  }

  const [error] = errors;

  if (error.message.includes("Unique constraint failed")) {
    return {
      uri: null,
      error: {
        message: "Board name needs to be unique",
      },
    };
  }

  return {
    uri: null,
    error: {
      message: error.message,
    },
  };
};

export const editBoard = (boardFormData: FormData) => {
  if (!boardFormData) throw new Error("Form Data Missing");

  const name = boardFormData.get("boardName");
  const columns = boardFormData.getAll("input").map((col) => ({ name: col }));

  console.log("add", { name, columns });
};
