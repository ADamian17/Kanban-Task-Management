import { getBoard } from "@/utils/board-actions/get-board";
import DashboardHeader from "@/layouts/headers/DashboardHeader";
import DeleteBoardForm from "@/components/BoardForms/DeleteBoardForm";
import { notFound } from "next/navigation";


export default async function DeleteBoardModal({ params }: {
  params: { slug: string };
}) {
  const data = await getBoard(`/${params?.slug}/`);

  if (data?.status === 404) notFound();

  return (
    <>
      <DashboardHeader boardName={data?.board.name} pathname={`/${params?.slug}/`} />

      <DeleteBoardForm boardName={data?.board?.name} boardId={data?.board?.id} />
    </>
  );
}
