import { AllBoardsDocument } from "@/__generated__/graphql";
import { executeApiReq } from "@/lib/utils/execute-api-req";
import AllBoardsContainer from "@/containers/board/AllBoardsContainer";
import AllBoardsHeader from "@/components/layouts/headers/AllBoardsHeader";

export default async function DashboardPage() {
  const data = await executeApiReq(AllBoardsDocument);

  if (!data?.getAllBoards?.nodes) return null;

  return (
    <main>
      <AllBoardsHeader />

      <AllBoardsContainer boardData={data?.getAllBoards} />
    </main>
  );
}
