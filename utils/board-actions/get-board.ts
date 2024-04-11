import { cache } from "react";
import { unstable_noStore as noStore } from "next/cache";
import { Board } from "@/types";
import { number } from "zod";

type GetOnBoardReturn = {
  board: Board;
  status?: number;
};

const getOnBoard = async (uri: string): Promise<GetOnBoardReturn | null> => {
  try {
    noStore();
    const res = await fetch(`${process.env.API_ENDPOINT}/boards/${uri}`);
    const data = await res.json();

    return data;
  } catch (error) {
    return null;
  }
};

export const getBoard = cache(getOnBoard);
