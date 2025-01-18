"use server";

import { CreateBoardDocument, CreateBoardMutation } from "@/__generated__/graphql";
import { executeApiReq } from "@/lib/utils/execute-api-req";

export const createBoardAction = async ({
  name,
  columns
}: Record<string, any>): Promise<CreateBoardMutation | { error: string } | undefined> => {
  try {
    const res = await executeApiReq(CreateBoardDocument, { name, columns });
    return res;
  } catch (error) {
    if (error instanceof Error) {
      const splitMsg = error.message.split(",");
      const msg = splitMsg.length > 1 ? splitMsg[0] : error.message;

      return { error: msg };
    }
  }
};
