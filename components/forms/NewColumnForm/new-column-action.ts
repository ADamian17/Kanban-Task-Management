"use server";

import {
  CreateColumnDocument,
  CreateColumnMutation,
  CreateColumnMutationVariables,
} from "@/__generated__/graphql";
import { executeApiReq } from "@/lib/utils/execute-api-req";

export const newColumnAction = async ({
  boardId,
  name,
  tasks,
}: CreateColumnMutationVariables): Promise<
  CreateColumnMutation | { error: string } | undefined
> => {
  try {
    const res = await executeApiReq(CreateColumnDocument, {
      boardId,
      name,
      tasks,
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
