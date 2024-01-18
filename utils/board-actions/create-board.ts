"use server";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { CreateBoardStateProp } from "@/types";
import { validateBoardFom } from "./validate-board-fom";

export const createBoard = async (
  prevState: CreateBoardStateProp,
  fd: FormData,
) => {
  const boardNameVal = fd.get("boardName");
  const columnsVals = fd.getAll("input");
  const columns = columnsVals.map((col) => ({ name: col.toString() })) || [];
  let target = "";

  const { nextState, isValid } = validateBoardFom({
    state: prevState,
    boardNameVal,
    columnsVals,
  });

  try {
    if (!isValid) throw "invalid Form";

    const res = await fetch(`${process.env.API_ENDPOINT}/boards/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: boardNameVal,
        columns,
      }),
      cache: "no-store",
    });
    const data = await res.json();

    if (
      res.status !== 200 &&
      data?.error.message === "Board name needs to be unique"
    ) {
      throw "board name error";
    }
    target = data?.createdBoard?.uri;

    revalidateTag("dashboard");

    return {
      boardName: { isInvalid: false, msg: "" },
      columns: [],
    };
  } catch (error) {
    if (error === "invalid Form") {
      return nextState;
    }

    if (error === "board name error") {
      nextState.boardName.isInvalid = true;
      nextState.boardName.msg = "Board name already exist";
      return nextState;
    }

    return nextState;
  } finally {
    if (isValid && target.length > 1) {
      redirect(`/dashboard${target}`);
    }

    return nextState;
  }
};
