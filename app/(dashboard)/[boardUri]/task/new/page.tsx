import { GetOneBoardByUriDocument } from "@/__generated__/graphql";
import NewTaskContainer from "@/containers/task/NewTaskContainer";
import { executeApiReq } from "@/lib/utils/executeApiReq";
import React from "react";

const NewTaskPage = async ({ params }: { params: Promise<{ taskId: string; boardUri: string }>; }) => {
  const { boardUri } = await params;

  const data = await executeApiReq(GetOneBoardByUriDocument, {
    uri: `/${boardUri}/`,
  });

  return (
    <NewTaskContainer
      boardUri={boardUri}
      boardColumnsData={data?.getOneBoard?.columns}
    />
  );
};

export default NewTaskPage
