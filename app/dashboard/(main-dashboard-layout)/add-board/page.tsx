import DashboardHeader from "@/layouts/headers/DashboardHeader";
import FormContentWrapper from "@/components/BoardForms/board-form-components/FormContentWrapper";
import Modal from "@/components/UI/Modal";
import AddBoardForm from "@/components/BoardForms/AddBoardForm";

const AddBoardPage = () => {
  return (
    <>
      <DashboardHeader />

      <Modal>
        <AddBoardForm />
      </Modal>
    </>
  )
}

export default AddBoardPage;
