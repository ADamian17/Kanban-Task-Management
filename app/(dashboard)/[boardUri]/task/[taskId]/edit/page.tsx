import React from "react";

import EditTaskContainer from "@/containers/task/EditTaskContainer";
import { executeApiReq } from "@/lib/utils/executeApiReq";
import { GetTaskDocument } from "@/__generated__/graphql";

const EditTaskPage = async ({ params }: { params: Promise<{ taskId: string; boardUri: string }>; }) => {
  const { taskId, boardUri } = await params;

  const data = await executeApiReq(GetTaskDocument, {
    id: taskId,
    boardUri: `/${boardUri}/`,
  });

  return (
    <EditTaskContainer
      boardColumnsData={data?.getOneBoard?.columns}
      boardUri={boardUri}
      taskData={data?.getOneTask}
    />
  )
};

export default EditTaskPage;
