import ModalContent from "./ModalContent";
import ModalWrapper from "./ModalWrapper";

type ModalType = {
  children: React.ReactNode
};

const Modal = ({ children }: ModalType) => {

  return (
    <ModalWrapper>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal;