import AddBoardForm from "@/components/BoardForms/AddBoardForm";
import DashboardHeader from "@/layouts/headers/DashboardHeader";
import Modal from "@/components/UI/Modal";

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
