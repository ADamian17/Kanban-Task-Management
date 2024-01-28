import { notFound } from "next/navigation";

import { getBoard } from "@/utils/board-actions/get-board";
import DashboardContent from "@/layouts/DashboardContent";
import EmptyBoard from "@/components/EmptyBoard";

const BoardDetailPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getBoard(`/${params?.slug}/`);

  if (data?.status === 404) notFound();
  const isEmptyBoard = data?.board?.columns && data?.board?.columns?.length <= 0
  const boardContent = isEmptyBoard ? (
    <EmptyBoard slug={params?.slug} />
  ) : (
    <>
      {
        data?.board?.columns && data?.board?.columns.map(col => (<div key={col.id}>{col.name}</div>))
      }
    </>
  )

  return (
    <DashboardContent>
      {boardContent}
    </DashboardContent>
  )
}

export default BoardDetailPage;
