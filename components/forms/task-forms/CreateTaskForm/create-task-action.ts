"use server";

import {
  CreateTaskDocument,
  CreateTaskMutation,
  CreateTaskMutationVariables
} from "@/__generated__/graphql";
import { executeApiReq } from "@/lib/utils/execute-api-req";

export const createTaskAction = async ({
  title,
  description,
  columnId,
  subtasks
}: CreateTaskMutationVariables): Promise<CreateTaskMutation | { error: string } | undefined> => {
  try {
    const res = await executeApiReq(CreateTaskDocument, {
      title,
      description,
      columnId,
      subtasks
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
