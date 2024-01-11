import BoardForm from "@/components/Forms/BoardForm";
import Modal from "@/components/UI/Modal";

export default function AddBoardModal() {
  return (
    <Modal>
      <BoardForm
        headline="Add New Board"
        submitBtnTxt="create new board"
      />
    </Modal>
  );
}
