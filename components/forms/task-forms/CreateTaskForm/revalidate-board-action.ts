"use server";
import { revalidatePath } from "next/cache";

export const revalidateBoardAction = async (
  pathname: string,
): Promise<void> => {
  try {
    revalidatePath(pathname);
  } catch (error) {
    console.error(error);
  }
};
