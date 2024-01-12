import { getBoard } from "@/utils/board/getBoard";
import DashboardHeader from "@/layouts/DashboardHeader";
import DashboardLayout from "@/layouts/Dashboard";
import DeleteBoardContent from "@/components/ModalsContent/DeleteBoard";

export default async function DeleteBoardModal({ params }: {
  params: { slug: string };
}) {
  const data = await getBoard(`/${params?.slug}/`);

  return (
    <DashboardLayout>
      <DashboardHeader boardName={data?.board.name} pathname={`/${params?.slug}/`} />

      <DeleteBoardContent boardName={data?.board.name} boardId={data?.board.id} />
    </DashboardLayout>
  );
}
