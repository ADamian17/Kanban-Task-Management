"use client"
import { MouseEventHandler, useEffect } from "react"
import { useFormStatus, useFormState } from "react-dom"

import { Board } from "@/types"
import { createColumn } from "@/utils/columns-actions/create-column"
import { destroyColumn } from "@/utils/columns-actions/delete-column"
import { editBoard } from "@/utils/board-actions/edit-board"
import { useBoardFormStore } from "@/state/useBoardFormStore"
import BoardNameTextField from "../board-form-components/BoardNameTextField"
import Button from "@/components/UI/Button"
import FormContentWrapper from "../board-form-components/FormContentWrapper"
import TextFieldGroup from "@/components/UI/TextFieldGroup"
import TextFieldWithCross from "@/components/UI/TextFieldWithCross"

type BoardFormProps = {
  data?: Board | null;
}

const EditBoardForm = ({ data }: BoardFormProps) => {
  const { pending } = useFormStatus()
  const { setError } = useBoardFormStore(state => state);
  const [formState, formAction] = useFormState(editBoard, {
    boardName: { isInvalid: false, msg: "" },
    columns: [],
  })

  useEffect(() => {
    if (formState.boardName.isInvalid) {
      setError(formState.boardName.isInvalid)
    }
  }, [formState, setError])

  const handleAddColumn = () => {
    if (!data?.id) return;

    createColumn(data?.id)
  }

  const handleRemoveColumn: MouseEventHandler = (e) => {
    if (!(e.target as HTMLElement).id) return;

    destroyColumn(Number((e.target as HTMLElement).id), "edit-board")
  }

  return (
    <FormContentWrapper headline="Edit Board">
      <form action={formAction}>
        <input type="hidden" name="uri" value={data?.uri} />
        <input type="hidden" name="boardId" value={data?.id} />

        <BoardNameTextField
          externalMsg={formState?.boardName.msg}
          externalValue={data?.name}
        />

        <TextFieldGroup label="board Columns">
          {
            data?.columns && data?.columns.map((col, idx) => (
              <TextFieldWithCross
                colId={col.id}
                error={formState.columns[idx] && formState.columns[idx].isInvalid}
                inputIconClickHandler={handleRemoveColumn}
                key={col.id}
                value={col.name}
              />
            ))
          }

          <Button
            disabled={data?.columns && data?.columns?.length >= 3}
            onClick={handleAddColumn}
            type="button"
            variant="secondary"
          >
            + Add New Column
          </Button>
        </TextFieldGroup>

        <Button type="submit" disabled={pending}>Save Changes</Button>
      </form>
    </FormContentWrapper>
  )
}

export default EditBoardForm;
