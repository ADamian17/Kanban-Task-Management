"use client"
import { useState } from "react";

import Button from "@/components/UI/Button";
import DynamicInputs from "@/components/DynamicInputs";
import TextField from "@/components/UI/TextField";
import TextFieldGroup from "@/components/UI/TextFieldGroup";

import { addBoard } from "./addBoard";

const AddBoardForm = () => {
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

  const handleSubmit = () => {
    if (boardName.value.trim() === "") {
      setBoardName(prev => ({ ...prev, error: true }))
      return
    };

    const formData = new FormData()
    formData.append("boardName", boardName.value)
    addBoard(formData)
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

      <DynamicInputs buttonTxt="+ Add New Column">
        <Button onClick={handleSubmit}>Create New Board</Button>
      </DynamicInputs>
    </>
  )
};

export default AddBoardForm;