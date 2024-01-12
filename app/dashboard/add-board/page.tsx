import BoardForm from "@/components/Forms/BoardForm";
import Modal from "@/components/UI/Modal";
import DashboardLayout from "@/layouts/Dashboard";
import DashboardHeader from "@/layouts/DashboardHeader";

export default function AddBoardModal() {
  return (
    <DashboardLayout>
      <DashboardHeader boardName={""} pathname='/' />

      <Modal>
        <BoardForm
          headline="Add New Board"
          submitBtnTxt="create new board"
        />
      </Modal>
    </DashboardLayout>
  );
}
