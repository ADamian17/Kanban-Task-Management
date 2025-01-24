import React from 'react'

import { executeApiReq } from '@/lib/utils/execute-api-req';
import { GetOneBoardByUriDocument } from '@/__generated__/graphql';
import EditBoardContainer from '@/containers/board/EditBoardContainer';

const EditBoardPage = async ({
  params,
}: {
  params: Promise<{ taskId: string; boardUri: string }>;
}) => {
  const { boardUri } = await params;
  const data = await executeApiReq(GetOneBoardByUriDocument, {
    uri: `/${boardUri}/`,
  })

  return (
    <EditBoardContainer boarData={data?.getOneBoard} />
  )
}

export default EditBoardPage
