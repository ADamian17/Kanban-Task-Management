import React, { Suspense } from "react";

import EditTaskContainer from "@/containers/task/EditTaskContainer";
import { executeApiReq } from "@/lib/utils/execute-api-req";
import { GetTaskDocument } from "@/__generated__/graphql";

const EditTaskPage = async ({ params }: { params: Promise<{ taskId: string; boardUri: string }>; }) => {
  const { taskId, boardUri } = await params;

  const data = await executeApiReq(GetTaskDocument, {
    id: taskId,
    boardUri: `/${boardUri}/`,
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditTaskContainer
        boardColumnsData={data?.getOneBoard?.columns}
        boardUri={boardUri}
        taskData={data?.getOneTask}
      />
    </Suspense>
  )
};

export default EditTaskPage;
