"use client"
import { useRouter } from "next/navigation";

import Button from "@/components/UI/Button";

const CancelButton = () => {
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

export default CancelButton;