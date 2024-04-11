import { notFound } from "next/navigation";

import { getBoard } from "@/utils/board-actions/get-board";
import DashboardHeader from "@/layouts/headers/DashboardHeader";
import EditBoardForm from "@/components/BoardForms/EditBoardForm";
import Modal from "@/components/UI/Modal";

export default async function EditBoardModal({ params }: {
  params: { slug: string };
}) {
  const data = await getBoard(`/${params?.slug}/`);

  if (!data || data?.status === 404) notFound();

  return (
    <>
      <DashboardHeader
        boardName={data?.board.name}
        pathname={`/${params?.slug}/`}
      />

      <Modal>
        <EditBoardForm data={data.board} />
      </Modal>
    </>
  );
}
