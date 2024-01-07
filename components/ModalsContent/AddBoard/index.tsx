import BoardForm from "@/components/Forms/BoardForm";
import ModalContent from "@/components/UI/Modal/ModalContent";

const AddBoard = () => {
  return (
    <ModalContent>
      <BoardForm
        headline="Add New Board"
        submitBtnTxt="create new board"
      />
    </ModalContent>
  )
};

export default AddBoard;
