"use server";

import {
  DeleteBoardDocument,
  DeleteBoardMutation,
  DeleteBoardMutationVariables,
} from "@/__generated__/graphql";
import { executeApiReq } from "@/lib/utils/execute-api-req";

export const deleteBoardAction = async ({
  boardId,
}: DeleteBoardMutationVariables): Promise<DeleteBoardMutation | { error: string } | undefined> => {
  try {
    const res = await executeApiReq(DeleteBoardDocument, { boardId });

    return res;
  } catch (error) {
    if (error instanceof Error) {
      const splitMsg = error.message.split(",");
      const msg = splitMsg.length > 1 ? splitMsg[0] : error.message;

      return { error: msg };
    }
  }
};
