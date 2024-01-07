import BoardForm from "@/components/Forms/BoardForm";
import ModalContent from "@/components/UI/Modal/ModalContent";

const EditBoard = () => {
  return (
    <ModalContent>
      <BoardForm
        headline="edit board"
        isEdit
        submitBtnTxt="save changes"
      />
    </ModalContent>
  )
};

export default EditBoard;
