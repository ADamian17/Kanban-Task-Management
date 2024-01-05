"use client"

import useModalStore from "@/state/useModalStore";

import Button from "../../Button";

const ModalCancelButton = () => {
  const { closeModal } = useModalStore(state => state);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    closeModal()
  }

  return (
    <Button
      variant="secondary"
      onClick={handleClick}
    >
      Cancel
    </Button>
  )
};

export default ModalCancelButton;