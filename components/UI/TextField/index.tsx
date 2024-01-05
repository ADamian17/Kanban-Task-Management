"use client";
import { ChangeEventHandler, FocusEventHandler, useState } from "react";

import styles from "./TextField.module.scss";

type TextFieldProps = {
  placeholder: string
}

const TextField = ({ placeholder }: TextFieldProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const errorStyles = error && styles.error

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (error) setError(false)

    setValue(e.target.value)
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.trim() === "") {
      setError(true)
    }
  }

  return (
    <div className={`${styles.textFieldWrapper} ${errorStyles}`}>
      <input
        className={styles.input}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </div>
  )
}

export default TextField;