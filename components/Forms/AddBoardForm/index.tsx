"use client"
import { useState } from "react";

import Button from "@/components/UI/Button";
import DynamicInputs, { ColumnState } from "@/components/DynamicInputs";
import TextField from "@/components/UI/TextField";
import TextFieldGroup from "@/components/UI/TextFieldGroup";

import { addBoard } from "./addBoard";

const AddBoardForm = () => {
  const [columns, setColumns] = useState<{ name: string }[]>([]);
  const [boardName, setBoardName] = useState({
    value: "",
    error: false
  });


  const onSetValue = (value: string) => {
    setBoardName(prev => ({ ...prev, value }))
  }

  const onSetError = (error: boolean) => {
    setBoardName(prev => ({ ...prev, error }))
  }

  const handleSubmit = async () => {
    if (boardName.value.trim() === "" || columns.some(col => col.name.trim() === "")) return;

    const data = {
      boardName: boardName.value,
      columns
    }

    addBoard(data)
  }

  const onInputIncrease = (inputs: ColumnState[]) => {
    const formatedColumns = inputs.map(input => ({
      name: input.value
    }))
  }

  return (
    <>
      <TextFieldGroup label="board Name">
        <TextField
          error={boardName.error}
          id="board-name"
          name="boardName"
          onSetError={onSetError}
          onSetValue={onSetValue}
          placeholder="e.g. Web Design"
          value={boardName.value}
        />
      </TextFieldGroup>

      <DynamicInputs
        buttonTxt="+ Add New Column"
        onInputIncrease={onInputIncrease}
      >
        <Button onClick={handleSubmit}>Create New Board</Button>
      </DynamicInputs>
    </>
  )
};

export default AddBoardForm;