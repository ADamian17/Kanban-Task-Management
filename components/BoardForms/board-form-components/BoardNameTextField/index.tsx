"use client"
import { ChangeEventHandler, FocusEventHandler, useEffect } from "react";

import { useBoardFormStore } from "@/state/useBoardFormStore";
import TextField from "@/components/UI/TextField";
import TextFieldGroup from "@/components/UI/TextFieldGroup";

const BoardNameTextField = ({ externalValue, externalMsg }: { externalValue?: string; externalMsg?: string }) => {
  const { error, value, setError, setValue, resetBoardName } = useBoardFormStore();

  useEffect(() => {
    if (externalValue) {
      setValue(externalValue)
    }

    return () => resetBoardName()
  }, [externalValue, setValue, resetBoardName])

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (error) setError(false);

    setValue(e.target.value)
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.trim() === "") {
      setError(true)
    }
  }

  return (
    <TextFieldGroup label="board Name">
      <TextField
        error={error}
        errorMsg={externalMsg}
        id="board-name"
        name="boardName"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="e.g. Web Design"
        value={value}
      />
    </TextFieldGroup>
  )
};

export default BoardNameTextField;