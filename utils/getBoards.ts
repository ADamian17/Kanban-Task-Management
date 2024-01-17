import { cache } from "react";
import { unstable_noStore as noStore } from "next/cache";
import { Boards, GetAllBoardsReturnType } from "@/types";

const allBoards = async (): Promise<GetAllBoardsReturnType> => {
  try {
    noStore();
    const res = await fetch(`${process.env.API_ENDPOINT}/boards/`);
    return await res.json();
  } catch (error) {
    return { error, count: null, boards: null };
  }
};

export const getBoards = cache(allBoards);
