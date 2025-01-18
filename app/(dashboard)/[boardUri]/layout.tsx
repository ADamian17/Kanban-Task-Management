import { notFound } from "next/navigation";

import { executeApiReq } from "@/lib/utils/executeApiReq";
import { GetOneBoardByUriDocument } from "@/__generated__/graphql";
import BoardLayout from "@/components/layouts/BoardLayout";

const SingleDashboardRootLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ boardUri: string }>;
}) => {
  const { boardUri } = await params;
  const data = await executeApiReq(GetOneBoardByUriDocument, {
    uri: `/${boardUri}/`
  });

  if (!data?.getOneBoard?.id) {
    return notFound();
  }

  return (
    <BoardLayout boardData={data.getOneBoard}>
      {children}
    </BoardLayout>
  );
};

export default SingleDashboardRootLayout;
