"use server";
import { cache } from "react";
import { unstable_noStore as noStore, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

type destroyBoard = {
  errorMsg: string;
};

const destroyBoard = async (state: destroyBoard, fd: FormData) => {
  let success = true;
  const nextState = { ...state };

  try {
    noStore();
    const boardId = fd.get("boardId");
    const res = await fetch(
      `${process.env.API_ENDPOINT}/boards/delete/${boardId}`,
      {
        method: "DELETE",
        cache: "no-store",
      },
    );
    const data = await res.json();

    if (
      res.status !== 200 &&
      data?.error.message === "Record to delete does not exist."
    ) {
      success = false;
      nextState.errorMsg = data?.error.message;
      throw "board delete error";
    }

    revalidateTag("dashboard");
    nextState.errorMsg = "";
  } catch (error) {
    return nextState;
  } finally {
    if (success) {
      redirect("/dashboard/");
    }

    return nextState;
  }
};

export const deleteBoard = cache(destroyBoard);
