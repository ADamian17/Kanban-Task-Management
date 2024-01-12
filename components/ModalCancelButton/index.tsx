"use client"
import useModalStore from "@/state/useModalStore";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";


const ModalCancelButton = () => {
  const router = useRouter()

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    router.back()
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