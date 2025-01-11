"use server";
import { revalidatePath } from "next/cache";

export const onSuccessEditBoardAction = async (uri: string): Promise<void> => {
  try {
    if (uri) {
      revalidatePath(uri);
    }
  } catch (error) {
    console.error(error);
  }
};
