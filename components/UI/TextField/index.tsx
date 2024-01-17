"use client";
import { ComponentProps } from "react";

import styles from "./TextField.module.scss";

type TextFieldProps = {
  error: boolean
  errorMsg?: string
} & ComponentProps<"input">

const TextField = ({ error, errorMsg, ...rest }: TextFieldProps) => {
  return (
    <div className={`${styles.textFieldWrapper} ${error && styles.error}`}>
      <input
        className={styles.input}
        type="text"
        {...rest}
      />
      {error && <p className={styles.errorMsg}>{errorMsg || "Can't be empty"}</p>}
    </div>
  )
}

export default TextField;
