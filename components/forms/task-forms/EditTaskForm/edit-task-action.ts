"use server";

import {
  EditTaskDocument,
  EditTaskMutation,
  EditTaskMutationVariables,
} from "@/__generated__/graphql";
import { executeApiReq } from "@/lib/utils/execute-api-req";

export const editTaskAction = async ({
  columnId,
  description,
  id,
  subtasks,
  title,
}: EditTaskMutationVariables): Promise<EditTaskMutation | { error: string } | undefined> => {
  try {
    const res = await executeApiReq(EditTaskDocument, {
      columnId,
      description,
      id,
      subtasks,
      title,
    });

    return res;
  } catch (error) {
    if (error instanceof Error) {
      const splitMsg = error.message.split(",");
      const msg = splitMsg.length > 1 ? splitMsg[0] : error.message;

      return { error: msg };
    }
  }
};
