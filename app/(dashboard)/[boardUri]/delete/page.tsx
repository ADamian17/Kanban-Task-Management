import React from "react";

import { executeApiReq } from "@/lib/utils/execute-api-req";
import { GetOneBoardByUriDocument } from "@/__generated__/graphql";
import DeleteBoardContainer from "@/containers/board/DeleteBoardContainer";

const DeleteBoardPage = async ({
  params,
}: {
  params: Promise<{ boardUri: string }>;
}) => {
  const { boardUri } = await params;
  const data = await executeApiReq(GetOneBoardByUriDocument, {
    uri: `/${boardUri}/`,
  })

  return (
    <DeleteBoardContainer
      boardUri={data?.getOneBoard?.uri ?? ''}
      boardName={data?.getOneBoard?.name ?? ''}
      boardId={data?.getOneBoard?.id ?? ''}
    />
  );
};

export default DeleteBoardPage;
