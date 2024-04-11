import { notFound } from "next/navigation";

import { getBoard } from "@/utils/board-actions/get-board";
import ColumnsContainer from "@/containers/ColumnsContainer";
import DashboardContent from "@/layouts/DashboardContent";
import EmptyBoard from "@/components/EmptyBoard";

const BoardDetailPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getBoard(`/${params?.slug}/`);

  if (data?.status === 404) notFound();

  return (
    <DashboardContent>
      <ColumnsContainer
        columns={data?.board?.columns}
        slug={params?.slug}
      />
    </DashboardContent>
  )
}

export default BoardDetailPage;
