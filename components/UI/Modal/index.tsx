import { ModalProvider } from "./ModalProvider";
import ModalTrigger from "./ModalTrigger";

import styles from "./Modal.module.scss";
import ModalContent from "./ModalContent";

type ModalType = {
  children: React.ReactNode
};

const Modal = ({ children }: ModalType) => {
  return (
    <ModalProvider>
      {children}
    </ModalProvider>
  )
};

Modal.Trigger = ModalTrigger
Modal.Content = ModalContent

export default Modal;