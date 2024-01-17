import { cache } from "react";
import { unstable_noStore as noStore } from "next/cache";

const allBoards = async () => {
  try {
    noStore();
    const res = await fetch(`${process.env.API_ENDPOINT}/boards/`);
    return await res.json();
  } catch (error) {
    return { error };
  }
};

export const getBoards = cache(allBoards);
