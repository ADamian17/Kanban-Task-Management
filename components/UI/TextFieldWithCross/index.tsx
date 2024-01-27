"use client"
import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from "react"
import TextField from "../TextField"

import styles from "./TextFieldWithCross.module.scss"

type TextFieldWithCrossProps = {
  colId: string
  error: boolean
  inputIconClickHandler: MouseEventHandler<SVGElement>
  onSetError?: (id: string, value: boolean) => void;
  onSetValue?: (id: string, value: string) => void;
  placeholder?: string,
  value: string,
}

const TextFieldWithCross = ({
  colId,
  error,
  inputIconClickHandler,
  onSetError,
  onSetValue,
  placeholder,
  value,
}: TextFieldWithCrossProps) => {
  const [internalVal, setInternalVal] = useState(value || "")
  const [internalErr, setInternalErr] = useState(error || false)

  useEffect(() => {
    setInternalErr(error)
  }, [error])

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target

    if (internalErr) {
      onSetError && onSetError(id, false)
      setInternalErr(false)
    }

    onSetValue && onSetValue(id, value)
    setInternalVal(value)
  }

  const handleBlur: ChangeEventHandler<HTMLInputElement> = (e) => {
    const isEmpty = e.target.value.trim() === "";

    if (isEmpty) {
      onSetError && onSetError(e.target.id, true)
      setInternalErr(true)
    }
  }

  return (
    <div className={styles.inputWrapper}>
      <input type="hidden" name="columnId" value={colId} />
      <TextField
        error={internalErr}
        id={colId}
        name="column"
        onBlur={handleBlur}
        onChange={handleChange}
        value={internalVal}
        placeholder={placeholder}
      />

      <svg
        id={colId}
        className={styles.icon}
        onClick={inputIconClickHandler}
      >
        <use href="/icons/icons-defs.svg#cross"></use>
      </svg>
    </div>
  )
}

export default TextFieldWithCross;
