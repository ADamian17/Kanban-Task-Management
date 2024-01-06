import BoardForm from "@/components/Forms/BoardForm";
import ModalContent from "@/components/UI/Modal/ModalContent";

const AddBoard = () => {
  return (
    <ModalContent>
      <BoardForm headline="Add New Board" />
    </ModalContent>
  )
};

export default AddBoard;
