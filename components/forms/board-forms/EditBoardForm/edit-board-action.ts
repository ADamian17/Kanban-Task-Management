"use server";
import { EditBoardDocument, EditBoardMutation } from "@/__generated__/graphql";
import { executeApiReq } from "@/lib/utils/execute-api-req";

export const editBoardAction = async ({
  name,
  columns,
  id,
}: Record<string, any>): Promise<EditBoardMutation | { error: string } | undefined> => {
  try {
    const res = await executeApiReq(EditBoardDocument, {
      columns,
      id,
      name,
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
