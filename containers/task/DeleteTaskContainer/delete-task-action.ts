"use server";

import {
  DeleteTaskDocument,
  DeleteTaskMutation,
  DeleteTaskMutationVariables,
} from "@/__generated__/graphql";
import { executeApiReq } from "@/lib/utils/execute-api-req";

export const deleteTaskAction = async ({
  id,
}: DeleteTaskMutationVariables): Promise<DeleteTaskMutation | { error: string } | undefined> => {
  try {
    const res = await executeApiReq(DeleteTaskDocument, { id });

    return res;
  } catch (error) {
    if (error instanceof Error) {
      const splitMsg = error.message.split(",");
      const msg = splitMsg.length > 1 ? splitMsg[0] : error.message;

      return { error: msg };
    }
  }
};
