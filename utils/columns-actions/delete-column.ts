"use server";
import { cache } from "react";
import { unstable_noStore as noStore, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const destroyColumn = async (columnId: number, tag: string) => {
  try {
    const res = await fetch(
      `${process.env.API_ENDPOINT}/columns/delete/${columnId}`,
      {
        method: "DELETE",
        cache: "no-store",
      },
    );

    if (res.status === 200) {
      revalidateTag(tag);
    }
  } catch (error) {
    return error;
  }
};
