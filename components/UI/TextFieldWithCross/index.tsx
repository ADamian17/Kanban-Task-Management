import { ChangeEventHandler, ComponentProps, MouseEventHandler, useState } from "react"
import TextField from "../TextField"

import styles from "./TextFieldWithCross.module.scss"

type TextFieldWithCrossProps = {
  colId: string
  error: boolean
  inputIconClickHandler: MouseEventHandler<SVGElement>
  onSetError: (id: string, value: boolean) => void;
  onSetValue: (id: string, value: string) => void;
  placeholder?: string,
  value: string,
}

const TextFieldWithCross = ({
  colId,
  error,
  inputIconClickHandler,
  onSetError,
  onSetValue,
  value,
}: TextFieldWithCrossProps) => {
  const [internalVal, setInternalVal] = useState(value || "")
  const [internalErr, setInternalErr] = useState(error || false)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onSetValue(e.target.id, e.target.value)
    setInternalVal(e.target.value)
  }

  const handleBlur: ChangeEventHandler<HTMLInputElement> = (e) => {
    const error = e.target.value.trim() === ""
    onSetError(e.target.id, error)
    setInternalErr(error)
  }

  return (
    <div className={styles.inputWrapper}>
      <TextField
        error={internalErr}
        id={colId}
        name="input"
        onBlur={handleBlur}
        onChange={handleChange}
        value={internalVal}
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
