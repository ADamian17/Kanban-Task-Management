"use server";
import { CompleteSubtaskDocument, CompleteSubtaskMutationVariables } from "@/__generated__/graphql";
import { executeApiReq } from "@/lib/utils/execute-api-req";

export const completeSubtaskAction = async ({
  id,
  completed,
}: CompleteSubtaskMutationVariables) => {
  try {
    const res = await executeApiReq(CompleteSubtaskDocument, { id, completed });

    return res;
  } catch (error) {
    console.error(error);
  }
};
