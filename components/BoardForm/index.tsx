"use client"
import { createBoard } from "@/utils/createBoard"
import { useFormStatus, useFormState } from "react-dom"

const BoardForm = () => {
  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(createBoard, { success: false, boardName: "" })

  return (
    <form action={formAction}>
      <input type="hidden" name="_redirect" value={"/dashboard"} />
      <input type="text" placeholder="e.g todo" name="boardName" />

      <button type="submit" disabled={pending}>submit</button>
    </form>
  )
}

export default BoardForm
