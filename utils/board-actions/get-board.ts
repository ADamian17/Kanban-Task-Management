import { cache } from "react";
import { unstable_noStore as noStore } from "next/cache";

const getOnBoard = async (uri: string) => {
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
