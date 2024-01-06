"use client";
import { ChangeEvent, ChangeEventHandler, ComponentProps, FocusEvent, FocusEventHandler, useEffect, useRef, useState } from "react";

import styles from "./TextField.module.scss";

type TextFieldProps = {
  placeholder: string
  error: boolean
  onSetError: (val: boolean, e?: FocusEvent<HTMLInputElement>) => void
  onSetValue: (val: string, e?: ChangeEvent<HTMLInputElement>) => void
} & ComponentProps<"input">

const TextField = ({ value, onChange, error, onSetError, onSetValue, ...rest }: TextFieldProps) => {
  const [internalValue, setInternalValue] = useState(value || "");
  const [internalError, setInternalError] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target

    if (internalError) {
      onSetError(false)
      setInternalError(false)
    }

    if (onSetValue) onSetValue(value, e)

    setInternalValue(value)
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.trim() === "") {
      setInternalError(true)
      onSetError(internalError, e)
    }
  }

  return (
    <div className={`${styles.textFieldWrapper} ${internalError && styles.error}`}>
      <input
        className={styles.input}
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        value={internalValue}
        {...rest}
      />
    </div>
  )
}

export default TextField;
