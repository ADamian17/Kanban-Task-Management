import React from "react";

import { executeApiReq } from "@/lib/utils/executeApiReq";
import { GetTaskDocument } from "@/__generated__/graphql";
import DeleteTaskContainer from "@/containers/DeleteTaskContainer";

const DeleteTaskPage = async ({ params }: { params: Promise<{ taskId: string; boardUri: string }>; }) => {
  const { taskId, boardUri } = await params;

  const data = await executeApiReq(GetTaskDocument, {
    id: taskId
  });

  return (
    <DeleteTaskContainer
      taskId={data.getOneTask?.id ?? ''}
      taskTitle={data.getOneTask?.title ?? ''}
      boardUri={boardUri}
    />
  );
};

export default DeleteTaskPage;
