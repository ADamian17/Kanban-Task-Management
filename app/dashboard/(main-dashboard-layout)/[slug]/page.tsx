import { notFound } from "next/navigation";
import DashboardContent from "@/layouts/DashboardContent";
import DashboardHeader from "@/layouts/headers/DashboardHeader";
import { getBoard } from "@/utils/board-actions/get-board";

const BoardDetailPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getBoard(`/${params?.slug}/`);

  if (data?.status === 404) notFound();

  return (
    <>
      <DashboardHeader boardName={data?.board.name} pathname={`/${params?.slug}/`} />

      <DashboardContent>
        BoardDetailPage {params.slug}
      </DashboardContent>
    </>
  )
}

export default BoardDetailPage;
