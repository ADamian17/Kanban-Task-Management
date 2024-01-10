import BoardForm from '@/components/Forms/BoardForm';
import Modal from '@/components/UI/Modal';
import ModalContent from '@/components/UI/Modal/ModalContent';
import DashboardHeader from '@/layouts/DashboardHeader';

export default async function CreateBoard() {
  return (
    <>
      <DashboardHeader boardName={""} />

      <Modal closeUrl='/'>
        <ModalContent>
          <BoardForm
            headline="Add New Board"
            submitBtnTxt="create new board"
          />
        </ModalContent>
      </Modal>
    </>
  )
}
