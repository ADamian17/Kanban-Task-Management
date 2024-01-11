import DeleteModalButtons from "@/components/DeleteModalButtons";
import Modal from "@/components/UI/Modal";
import { getBoard } from "@/utils/board/getBoard";

export default async function DeleteBoardModal({ params }: {
  params: { slug: string };
}) {
  const data = await getBoard(`/${params?.slug}/`);

  return (
    <Modal>
      <h2>Delete this board?</h2>

      <p>Are you sure you want to delete the {`'${data?.board?.name}'`} board? This action will remove all columns and tasks and cannot be reversed.</p>

      <DeleteModalButtons boardId={data?.board?.id} />
    </Modal>
  );
}