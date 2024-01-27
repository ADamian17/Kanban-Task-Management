"use server";

import { revalidateTag } from "next/cache";

export const createColumn = async (boardId: number) => {
  try {
    const res = await fetch(`${process.env.API_ENDPOINT}/columns/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "",
        boardId,
      }),
      cache: "no-store",
    });

    if (res.status === 201) {
      revalidateTag("edit-board");
    }
  } catch (error) {
    return error;
  }
};
