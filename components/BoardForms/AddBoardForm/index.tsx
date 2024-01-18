"use client"
import { useBoardFormStore } from "@/state/useBoardFormStore"
import { createBoard } from "@/utils/board-actions/create-board"
import { useEffect } from "react"
import { useFormStatus, useFormState } from "react-dom"
import BoardNameTextField from "../board-form-components/BoardNameTextField"
import Button from "@/components/UI/Button"
import BoardColumnsFields from "../board-form-components/BoardColumnsFields"
import FormContentWrapper from "../board-form-components/FormContentWrapper"

const AddBoardForm = () => {
  const { pending } = useFormStatus()
  const { setError, onSetColumnError } = useBoardFormStore(state => state);
  const [formState, formAction] = useFormState(createBoard, { boardName: { isInvalid: false, msg: "" }, columns: [] })

  useEffect(() => {
    if (formState.boardName.isInvalid) {
      setError(formState.boardName.isInvalid)
    }

    formState.columns.forEach((col) => {
      if (col.isInvalid) {
        onSetColumnError(col.id, col.isInvalid);
      }
    });

  }, [formState, setError, onSetColumnError])

  return (
    <FormContentWrapper headline="Add New Board">
      <form action={formAction}>
        <BoardNameTextField externalMsg={formState?.boardName.msg} />

        <BoardColumnsFields />
        <Button type="submit" disabled={pending}>create new board</Button>
      </form>
    </FormContentWrapper>
  )
}

export default AddBoardForm
