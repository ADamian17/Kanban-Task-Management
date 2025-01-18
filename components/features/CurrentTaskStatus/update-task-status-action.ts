"use server";
import {
  UpdateTaskStatusDocument,
  UpdateTaskStatusMutationVariables
} from "@/__generated__/graphql";
import { executeApiReq } from "@/lib/utils/execute-api-req";

export const updateTaskStatusAction = async ({
  id,
  columnId
}: UpdateTaskStatusMutationVariables) => {
  try {
    const res = await executeApiReq(UpdateTaskStatusDocument, { id, columnId });

    return res;
  } catch (error) {
    console.error(error);
  }
};
