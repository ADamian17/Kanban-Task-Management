import Modal from "@/components/UI/Modal";

export default function EditBoardModal({ params }: {
  params: { id: string };
}) {
  return <Modal>Edit modal {params?.id}</Modal>;
}