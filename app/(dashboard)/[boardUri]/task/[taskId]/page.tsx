import React from "react";

import ViewTaskContainer from "@/containers/task/ViewTaskContainer";
import { executeApiReq } from "@/lib/utils/executeApiReq";
import { GetTaskDocument } from "@/__generated__/graphql";

const ViewTaskPage = async ({ params }: { params: Promise<{ taskId: string; boardUri: string }>; }) => {
  const { taskId, boardUri } = await params;

  const data = await executeApiReq(GetTaskDocument, {
    id: taskId,
    boardUri: `/${boardUri}/`,
  });

  return (
    <ViewTaskContainer boardUri={boardUri} taskId={taskId} taskData={data?.getOneTask} />
  );
};

export default ViewTaskPage;
